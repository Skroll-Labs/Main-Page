import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Invalid form data" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (resend) {
      await resend.emails.send({
        from: "Skroll <hello@skroll.lk>",
        to: process.env.CONTACT_TO_EMAIL || "hello@skroll.lk",
        subject: `New Skroll Inquiry — ${data.projectType} (${data.companyName})`,
        text: `
          Name: ${data.fullName}
          Email: ${data.workEmail}
          Company / Organization: ${data.companyName}
          Project Type: ${data.projectType}
          Message: ${data.message || "No message provided."}
        `,
      });
    } else {
      console.log("[api/contact] Received lead:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}

