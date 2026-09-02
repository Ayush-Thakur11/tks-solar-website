import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const sanitizeText = (value: unknown) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return value.trim();
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const interest = sanitizeText(payload.interest);
    const capacity = sanitizeText(payload.capacity);
    const city = sanitizeText(payload.city);
    const state = sanitizeText(payload.state);
    const fullName = sanitizeText(payload.fullName);
    const phone = normalizePhone(sanitizeText(payload.phone));
    const email = sanitizeText(payload.email);
    const message = sanitizeText(payload.message);
    const honeypot = sanitizeText(payload.website);

    if (honeypot) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (!interest || !capacity || !city || !state || !fullName || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!/^(?:\+91)?[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please set RESEND_API_KEY and RESEND_FROM_EMAIL." },
        { status: 503 },
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const subject = `New Solar Project Enquiry | ${interest}`;
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const emailBody = `
NEW TKS SOLAR PROJECT ENQUIRY

Project Type:
${interest}

Requested Capacity:
${capacity}

Project Location:

City:
${city}

State:
${state}

Customer Details:

Full Name:
${fullName}

Phone Number:
${phone}

Email Address:
${email}

Message:
${message || "No additional message provided."}

Submitted through:
TKS Solar Website

Submission date/time:
${timestamp}
`;

    const result = await resend.emails.send({
      from: fromEmail,
      to: ["tkscompany522@gmail.com"],
      subject,
      text: emailBody,
      html: `<h2>NEW TKS SOLAR PROJECT ENQUIRY</h2>
        <p><strong>Project Type:</strong> ${interest}</p>
        <p><strong>Requested Capacity:</strong> ${capacity}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || "No additional message provided."}</p>
        <p><strong>Submitted through:</strong> TKS Solar Website</p>
        <p><strong>Submission date/time:</strong> ${timestamp}</p>`,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message || "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again in a moment." },
      { status: 500 },
    );
  }
}
