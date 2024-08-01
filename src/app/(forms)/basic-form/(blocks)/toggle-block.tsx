import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CodeDisplay from "@/components/code-display";
import { Container } from "@/components/container";
import { ToggleForm, toggleFormSchema, FormData, defaultValues } from "@/components/forms/toggle-form";
import { useToast } from "@/components/ui/use-toast";

const ToggleBlock = () => {
  const [formOutput, setFormOutput] = useState<any>(null);
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(toggleFormSchema),
    defaultValues,
  });
  const onSubmit = (values: z.infer<typeof toggleFormSchema>) => {
    toast({
      title: "Form submit",
      description: "Form submission triggered and validation passed ✅",
    });
    setFormOutput(values);
  };
  return (
    <Container fullWidth className="justify-between bg-slate-100 rounded-lg">
      <Container fullWidth className="max-w-[500px]">
        <ToggleForm title="Toggles and Check boxes" description="Toggles and check boxes types supported." form={form} onSubmit={onSubmit} />
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

export default ToggleBlock;
