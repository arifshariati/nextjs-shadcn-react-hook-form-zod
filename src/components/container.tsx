import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  col?: boolean;
  fullWidth?: boolean;
};

export const Container = ({ children, className = "", col = false, fullWidth = false }: ContainerProps) => {
  return <div className={cn("flex gap-4 p-4 flex-wrap mx-auto", col && "flex-col", fullWidth && "w-full", className)}>{children}</div>;
};
