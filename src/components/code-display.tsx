import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

type CodeDisplayProps = { data: any; className?: string; title?: string; description?: string };

const CodeDisplay = ({ data, className, title, description }: CodeDisplayProps) => {
  const codeData = data ? JSON.stringify(data, null, 2) : "No datda available";
  return (
    <Card className={cn("flex flex-col h-full w-full", className)}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <pre className="w-full rounded-xl bg-slate-950 p-8 overflow-auto h-full">
          <code className="text-white">{codeData}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default CodeDisplay;
