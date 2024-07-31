import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(1, { message: "min 1 character" }),
  email: z.string().email({ message: "Not a valid email address" }),
  country: z.string().min(1, { message: "Please select your country" }),
  dob: z.date({ required_error: "Please select your date of birth" }),
  marketingEmails: z.boolean().default(false).optional(),
  securityEmails: z.boolean(),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters" }).max(160, { message: "Bio must not be longer than 30 characters" }),
  notificationType: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export type FormData = z.infer<typeof formSchema>;
