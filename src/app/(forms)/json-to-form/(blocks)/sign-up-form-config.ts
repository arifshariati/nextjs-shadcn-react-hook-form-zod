import { FormConfig, FormFieldType } from "@/lib/form.types";

export const formConfig: FormConfig = {
  title: "Sign Up",
  description: "Enter your information to create an account",
  submitButtonText: "Create an account",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your First Name",
      type: FormFieldType.Text,
      validation: {
        type: "string",
        rules: [{ method: "min", params: [1] }],
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your Last Name",
      type: FormFieldType.Text,
      validation: {
        type: "string",
        rules: [{ method: "min", params: [1] }],
      },
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email address",
      type: FormFieldType.Text,
      validation: {
        type: "string",
        rules: [{ method: "email", params: [] }],
      },
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: FormFieldType.Password,
      validation: {
        type: "string",
        rules: [
          { method: "min", params: [8] },
          { method: "max", params: [64] },
        ],
      },
    },
  ],
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};
