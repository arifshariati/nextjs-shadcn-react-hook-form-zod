import { ZodMethodType } from "./zod-mappings";

export type ValidationRule = {
  method: "min" | "max" | "email" | "regex";
  params: any[];
};

export enum FormFieldType {
  Text = "text",
  Email = "email",
  Password = "password",
  Select = "select",
  TextArea = "textarea",
  Checkbox = "checkbox",
  Radio = "radio",
  Switch = "switch",
  Date = "date",
}

export type FormOptions = {
  value: string;
  label: string;
};

export type FormFieldConfig = {
  name: string;
  label: string;
  placeholder?: string;
  type: FormFieldType;
  options?: FormOptions[];
  description?: string;
  validation: {
    type: ZodMethodType;
    rules: ValidationRule[];
  };
};

export type FormConfig = {
  title?: string;
  description?: string;
  submitButtonText: string;
  fields: FormFieldConfig[];
  defaultValues: { [key: string]: any };
};
