import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(2, "Company or organization name is required"),
  projectType: z.enum(
    [
      "Event Ticketing & Check-in",
      "Business Systems & Automation",
      "Both / Custom Project",
    ],
    {
      error: "Please select what we are making better",
    }
  ),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

