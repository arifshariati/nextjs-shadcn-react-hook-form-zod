import { Container } from "@/components/container";

type FormsLayoutProps = {
  children: React.ReactNode;
};

const FormsLayout = ({ children }: FormsLayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-5 md:px-10 lg:px-24">
      <Container fullWidth>{children}</Container>
    </main>
  );
};

export default FormsLayout;
