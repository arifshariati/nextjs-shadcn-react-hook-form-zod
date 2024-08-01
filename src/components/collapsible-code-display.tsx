import { ChevronsDownUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Container } from "./container";
import { Button } from "./ui/button";

type CollapsibleCodeDisplayProps = {
  triggerText: string;
  content: any;
};

const CollapsibleCodeDisplay = ({ triggerText, content }: CollapsibleCodeDisplayProps) => {
  return (
    <Container fullWidth className="p-0">
      <Collapsible className="w-full space-y-4">
        <Container fullWidth className="items-center justify-end bg-gradient-to-r from-white via-white to-accent rounded-lg">
          <h4 className="text-sm font-semibold">{triggerText}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsDownUp className="h-4 w-4" />
              <span className="sr-only">Toggle form configuration</span>
            </Button>
          </CollapsibleTrigger>
        </Container>
        <CollapsibleContent>
          <pre className="w-full rounded-xl bg-slate-950 p-8 overflow-y-scroll max-h-[600px]">
            <code className="text-white">{content}</code>
          </pre>
        </CollapsibleContent>
      </Collapsible>
    </Container>
  );
};

export default CollapsibleCodeDisplay;
