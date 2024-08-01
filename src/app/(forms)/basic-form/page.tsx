"use client";
import { Container } from "@/components/container";
import SignInBlock from "./(blocks)/sign-in-block";
import { Separator } from "@/components/ui/separator";
import SignUpBlock from "./(blocks)/sign-up-block";
import InputBlock from "./(blocks)/input-block";
import ToggleBlock from "./(blocks)/toggle-block";

const BasicFormPage = () => {
  return (
    <Container>
      <SignInBlock />
      <Separator />
      <SignUpBlock />
      <Separator />
      <InputBlock />
      <Separator />
      <ToggleBlock />
      <Separator />
    </Container>
  );
};

export default BasicFormPage;
