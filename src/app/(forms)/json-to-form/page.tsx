import SingInBlock from "./(blocks)/sign-in-block";
import SingUpBlock from "./(blocks)/sign-up-block";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/container";
import CollapsibleCodeDisplay from "@/components/collapsible-code-display";
import { formConfig as signInFormConfig } from "./(blocks)/sign-in-form-config";
import { formConfig as signUpFormConfig } from "./(blocks)/sign-up-form-config";

const JsonToFormPage = () => {
  return (
    <Container fullWidth col>
      <SingInBlock />
      <CollapsibleCodeDisplay triggerText="I want to see the form config" content={JSON.stringify(signInFormConfig, null, 2)} />
      <Separator />

      <SingUpBlock />
      <CollapsibleCodeDisplay triggerText="I want to see the form config" content={JSON.stringify(signUpFormConfig, null, 2)} />
      <Separator />
    </Container>
  );
};

export default JsonToFormPage;
