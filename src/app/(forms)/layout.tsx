import { Container } from "@/components/container";

type FormsLayoutProps = {
  children: React.ReactNode;
};

const FormsLayout = ({ children }: FormsLayoutProps) => {
  return (
    <main className="flex min-h-screen max-w-[1200px] mx-auto">
      <Container>{children}</Container>
    </main>
  );
};

export default FormsLayout;
