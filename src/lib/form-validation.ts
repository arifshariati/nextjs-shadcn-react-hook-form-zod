import { z, ZodSchema } from "zod";
import { zodMappings, ZodMethodType } from "./zod-mappings";
import { ValidationRule } from "./form.types";

type FormFieldConfig = {
  name: string;
  validation: {
    type: ZodMethodType;
    rules: ValidationRule[];
  };
};

export const generateZodSchema = (fields: FormFieldConfig[]): ZodSchema<any> => {
  const shape: any = {};
  fields.forEach((field) => {
    const zodMethod = zodMappings[field.validation.type];
    if (!zodMethod) {
      throw new Error(`Unsupported validation type: ${field.validation.type}`);
    }

    let schema = zodMethod();
    field.validation.rules.forEach((rule) => {
      const method = rule.method as keyof typeof schema;
      if (typeof schema[method] === "function") {
        schema = (schema[method] as any)(...rule.params);
      } else {
        throw new Error(`Invalid method: ${rule.method}`);
      }
    });
    shape[field.name] = schema;
  });
  return z.object(shape);
};
