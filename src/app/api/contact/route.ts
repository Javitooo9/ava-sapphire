import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // TODO: store in Supabase and/or send email via Resend
    // const supabase = createAdminClient();
    // await supabase.from("contact_messages").insert({ name, email, phone, subject, message });

    console.log("Contact form:", { name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
