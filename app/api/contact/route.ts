import { Resend } from "resend";
import { NextResponse } from "next/server";

const EMAIL_TO =
  process.env.CONTACT_EMAIL_TO ?? "happysolutionsllc354@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Happy Solutions <onboarding@resend.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validate(body: ContactBody) {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2) {
    return "Нэрээ зөв оруулна уу.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "И-мэйл хаягаа зөв оруулна уу.";
  }
  if (subject.length < 3) {
    return "Гарчиг хэт богино байна.";
  }
  if (message.length < 10) {
    return "Мессеж хэт богино байна.";
  }

  return null;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "И-мэйл үйлчилгээ тохируулагдаагүй байна." },
      { status: 500 },
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Хүсэлт буруу байна." },
      { status: 400 },
    );
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const subject = body.subject!.trim();
  const message = body.message!.trim();

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [EMAIL_TO],
    replyTo: email,
    subject: `[Happy Solutions] ${subject}`,
    text: [
      "Шинэ холбоо барих хүсэлт — Happy Solutions",
      "",
      `Нэр: ${name}`,
      `И-мэйл: ${email}`,
      `Гарчиг: ${subject}`,
      "",
      "Мессеж:",
      message,
    ].join("\n"),
    html: buildContactEmailHtml({ name, email, subject, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "И-мэйл илгээхэд алдаа гарлаа. Дахин оролдоно уу." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type ContactEmailFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function buildContactEmailHtml(fields: ContactEmailFields) {
  const { name, email, subject, message } = fields;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const sentAt = new Intl.DateTimeFormat("mn-MN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Ulaanbaatar",
  }).format(new Date());

  const row = (label: string, value: string, isLink = false) => `
    <tr>
      <td style="padding:0 0 14px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#141414;border:1px solid #2a2a2a;border-radius:10px;">
          <tr>
            <td style="padding:14px 16px 6px 16px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#737373;">
              ${label}
            </td>
          </tr>
          <tr>
            <td style="padding:0 16px 14px 16px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:15px;line-height:1.45;color:#f5f5f5;">
              ${
                isLink
                  ? `<a href="mailto:${safeEmail}" style="color:#d4ff4a;text-decoration:none;">${value}</a>`
                  : value
              }
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="mn">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Шинэ холбоо барих хүсэлт</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;-webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;max-width:560px;">
          <!-- Header -->
          <tr>
            <td style="padding:0 0 24px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="font-family:ui-monospace,'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#737373;">
                    Happy Solutions
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:10px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:26px;font-weight:600;line-height:1.2;letter-spacing:-0.02em;color:#f5f5f5;">
                    Шинэ холбоо барих хүсэлт
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:8px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:14px;line-height:1.5;color:#a3a3a3;">
                    Landing page-ийн контакт формоос ирсэн мессеж.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Accent badge -->
          <tr>
            <td style="padding:0 0 20px 0;">
              <span style="display:inline-block;padding:6px 12px;border-radius:999px;background-color:rgba(212,255,74,0.14);border:1px solid rgba(212,255,74,0.35);font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:12px;font-weight:500;color:#d4ff4a;">
                Хариу өгөхөд Reply дарна уу
              </span>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${row("Нэр", safeName)}
                ${row("И-мэйл", safeEmail, true)}
                ${row("Гарчиг", safeSubject)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:6px 0 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background-color:#141414;border:1px solid #2a2a2a;border-radius:10px;">
                <tr>
                  <td style="padding:16px 16px 8px 16px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#737373;">
                    Мессеж
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 16px 16px 16px;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:15px;line-height:1.65;color:#e5e5e5;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 0 0;border-top:1px solid #262626;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;font-size:12px;line-height:1.5;color:#737373;">
                    Илгээсэн цаг: <span style="color:#a3a3a3;">${escapeHtml(sentAt)}</span>
                    <br />
                    Энэ и-мэйлийг автоматаар илгээсэн. Хариу бичихдээ шууд Reply ашиглана уу.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
