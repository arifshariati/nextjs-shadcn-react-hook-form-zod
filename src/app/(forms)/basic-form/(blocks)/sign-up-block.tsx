import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CodeDisplay from "@/components/code-display";
import { Container } from "@/components/container";
import { SignUpForm, signUpFormSchema, FormData, defaultValues } from "@/components/forms/sign-up-form";
import { useToast } from "@/components/ui/use-toast";

const SignUpBlock = () => {
  const [formOutput, setFormOutput] = useState<any>(null);
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
  });
  const onSubmit = (values: FormData) => {
    toast({
      title: "Form submit",
      description: "Form submission triggered and validation passed ✅",
    });
    setFormOutput(values);
  };
  return (
    <Container fullWidth className="justify-between bg-slate-100 rounded-lg">
      <Container fullWidth className="max-w-[500px]">
        <SignUpForm title="Sign Up" description="Enter your information to create an accountt." form={form} onSubmit={onSubmit} />
      </Container>
      <Container className="max-w-[500px]">
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

export default SignUpBlock;
