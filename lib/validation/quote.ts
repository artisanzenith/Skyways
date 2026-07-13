import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  freightType: z.string().min(1, "Select a freight type"),
  pickup: z.string().min(2, "Please enter a pickup location"),
  delivery: z.string().min(2, "Please enter a delivery location"),
  details: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
