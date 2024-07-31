"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormData, formSchema } from "@/components/forms/basic-form-scheme";
import { Container } from "@/components/container";
import { BasicForm } from "@/components/forms";
import CodeDisplay from "@/components/code-display";
import { useToast } from "@/components/ui/use-toast";

const BasicFormPage = () => {
  const [formOutput, setFormOutput] = useState<any>(null);
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      country: "",
      dob: undefined,
      marketingEmails: false,
      securityEmails: false,
      bio: "",
      notificationType: "all",
      mobile: false,
      items: [],
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Form submit",
      description: "Form submission triggered and validation passed ✅",
    });
    setFormOutput(values);
    console.log(values);
  };
  return (
    <Container fullWidth>
      <Container fullWidth className="justify-between">
        <Container fullWidth className="max-w-[400px]">
          <BasicForm form={form} onSubmit={onSubmit} />
        </Container>
        <Container fullWidth className="max-w-[600px]">
          <CodeDisplay
            title="Form output data"
            description="Upon submit, the validated data or values ready for dispatch to backend"
            data={formOutput}
            className="max-h-[750px] min-h-[750px]"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default BasicFormPage;
