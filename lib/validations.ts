import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(2, "Company/Event name is required"),
  audienceType: z.enum(["Event Organizer", "Marketing Team", "Ops Team", "Enterprise"], {
    message: "Please select an audience type",
  }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
