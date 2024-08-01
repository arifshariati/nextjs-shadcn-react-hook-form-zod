import { z } from "zod";

export type ZodMethodType = "string" | "number" | "boolean" | "date";

type ZodMappings = {
  [key in ZodMethodType]: () => any;
};

export const zodMappings: ZodMappings = {
  string: z.string,
  number: z.number,
  boolean: z.boolean,
  date: z.date,
};
