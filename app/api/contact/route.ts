import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

// We mock the email sending for the sake of the exercise if RESEND_API_KEY is missing.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    if (resend) {
      await resend.emails.send({
        from: "TicketFlow <onboarding@resend.dev>", // replace with verified domain
        to: "sales@ticketflow.com", // replace with actual destination
        subject: `New Contact Inquiry from ${data.fullName}`,
        text: `
          Name: ${data.fullName}
          Email: ${data.workEmail}
          Company: ${data.companyName}
          Audience Type: ${data.audienceType}
          Message: ${data.message || "No message provided."}
        `,
      });
    } else {
      // Mock successful email delivery
      console.log("Mock email sent:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request." },
      { status: 400 }
    );
  }
}
