import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const defaultValues: FormData = {
  email: "",
  password: "",
};

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Not a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password can not be less than 8 character" })
    .max(64, { message: "Password can not be more than 64 characters" }),
});

export type FormData = z.infer<typeof signInFormSchema>;

type SignInFormProps = { form: UseFormReturn<FormData>; onSubmit: SubmitHandler<FormData>; className?: string; title?: string; description?: string };
export const SignInForm = ({ form, onSubmit, title, description, className }: SignInFormProps) => {
  return (
    <Card className={cn("flex flex-col w-full", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
