import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateZodSchema } from "@/lib/form-validation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Form, FormField } from "../ui/form";
import { Button } from "../ui/button";
import { FormConfig, FormFieldConfig, FormFieldType } from "@/lib/form.types";
import TextField from "./text-field";
import SelectField from "./select-field";
import DateFieled from "./date-field";
import TextareaField from "./text-area-field";

export const renderField = (field: FormFieldConfig, controllerField: any): React.JSX.Element => {
  switch (field.type) {
    case FormFieldType.Text:
    case FormFieldType.Email:
    case FormFieldType.Password:
      return (
        <TextField field={controllerField} type={field.type} label={field.label} placeholder={field.placeholder} description={field.description} />
      );
    case FormFieldType.Select:
      return (
        <SelectField
          field={controllerField}
          label={field.label}
          placeholder={field.placeholder}
          description={field.description}
          options={field.options!}
        />
      );
    case FormFieldType.Date:
      return <DateFieled field={controllerField} label={field.label} description={field.description} />;
    case FormFieldType.TextArea:
      return <TextareaField field={controllerField} label={field.label} placeholder={field.placeholder} description={field.description} />;
    default:
      return <></>;
  }
};

type DynamicFormProps = {
  config: FormConfig;
  onSubmit: SubmitHandler<any>;
};

const DynamicForm = ({ config, onSubmit }: DynamicFormProps) => {
  const schema = generateZodSchema(config.fields);
  const form = useForm({ resolver: zodResolver(schema), defaultValues: config.defaultValues });

  return (
    <Card>
      <CardHeader>
        {config.title && <CardTitle>{config.title}</CardTitle>}
        {config.description && <CardDescription>{config.description}</CardDescription>}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-1">
            {config.fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: controllerField }) => renderField(field, controllerField)}
              />
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {config.submitButtonText}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default DynamicForm;
