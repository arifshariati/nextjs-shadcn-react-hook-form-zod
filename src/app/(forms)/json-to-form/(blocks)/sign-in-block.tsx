"use client";
import { useState } from "react";
import DynamicForm from "@/components/forms/dynamic-form";
import { formConfig } from "./sign-in-form-config";
import { Container } from "@/components/container";
import CodeDisplay from "@/components/code-display";
import { useToast } from "@/components/ui/use-toast";

const SingInBlock = () => {
  const [formOutput, setFormOutput] = useState<any>(null);
  const { toast } = useToast();
  const handleSubmit = (values: any) => {
    toast({
      title: "Form submit",
      description: "Form submission triggered and validation passed ✅",
    });
    setFormOutput(values);
  };
  return (
    <Container fullWidth className="justify-center">
      <Container>
        <DynamicForm config={formConfig} onSubmit={handleSubmit} />
      </Container>
      <Container>
        <CodeDisplay
          title="Form output data"
          description="Upon submit, the validated data or values ready for dispatch to backend"
          data={formOutput}
          className="max-h-[750px]"
        />
      </Container>
    </Container>
  );
};

export default SingInBlock;
