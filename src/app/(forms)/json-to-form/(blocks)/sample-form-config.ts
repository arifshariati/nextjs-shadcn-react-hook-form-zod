import { countries } from "@/constants/countries";
import { FormConfig, FormFieldType } from "@/lib/form.types";

export const formConfig: FormConfig = {
  title: "Login",
  description: "Enter your email below to login to your account.",
  submitButtonText: "Login",
  fields: [
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
    {
      name: "country",
      label: "Country",
      placeholder: "Select your country",
      type: FormFieldType.Select,
      options: [...countries],
      validation: {
        type: "string",
        rules: [{ method: "min", params: [1] }],
      },
    },
    {
      name: "dob",
      label: "DOB",
      type: FormFieldType.Date,
      validation: {
        type: "date",
        rules: [],
      },
    },
    {
      name: "bio",
      label: "Bio",
      type: FormFieldType.TextArea,
      validation: {
        type: "string",
        rules: [{ method: "min", params: [10] }],
      },
    },
  ],
  defaultValues: {
    email: "",
    password: "",
    countries: "",
    dob: new Date(),
    bio: "",
  },
};
