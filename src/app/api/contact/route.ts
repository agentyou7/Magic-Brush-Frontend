import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    // Validate required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send notification email to Magic Brush
    // NOTE: For production, verify your domain in Resend dashboard and use:
    // from: 'Magic Brush Ltd <noreply@magicbrushltd.co.uk>'
    // Until domain is verified, use Resend's onboarding address:
    await resend.emails.send({
      from: 'Magic Brush Ltd <onboarding@resend.dev>',
      to: ['magicbrushltd@gmail.com'],
      replyTo: 'info@magicbrushltd.co.uk',
      subject: `New Quote Request: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 32px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                        New Quote Request
                      </h1>
                      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                        A potential customer has submitted a quote request
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <!-- Customer Info Card -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fff7ed; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #ea580c;">Customer Name</p>
                            <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1e293b;">${name}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Details -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Phone Number</p>
                            <p style="margin: 0; font-size: 16px; color: #1e293b;">
                              <a href="tel:${phone}" style="color: #f97316; text-decoration: none; font-weight: 600;">${phone}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Service Required</p>
                            <p style="margin: 0; font-size: 16px; color: #1e293b; font-weight: 500;">${service}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 16px 0;">
                            <p style="margin: 0 0 8px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Message</p>
                            <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6; background-color: #f1f5f9; padding: 16px; border-radius: 8px;">${message}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                        <tr>
                          <td align="center">
                            <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 14px;">
                              Call Customer Now
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1e293b; padding: 24px 40px; text-align: center;">
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        Magic Brush Ltd · Renovation Excellence
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Send confirmation email to customer (optional - only if we have their email)
    // For now, we don't collect email, only phone

    return NextResponse.json(
      { success: true, message: 'Your quote request has been submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
