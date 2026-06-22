import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: store in Supabase newsletter_subscribers table
    // const supabase = createAdminClient();
    // await supabase.from("newsletter_subscribers").upsert({ email });

    console.log("Newsletter signup:", email);

    return NextResponse.redirect(new URL("/", req.url));
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
