import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Send email using Resend
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.RESEND_CONTACT_TO || 'hello@kefistudio.com',
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FCFBF9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #3D2C2E; font-family: Georgia, serif; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px; color: #6B5D5A; font-size: 14px;"><strong style="color: #3D2C2E;">From:</strong> ${name}</p>
              <p style="margin: 0 0 5px; color: #6B5D5A; font-size: 14px;"><strong style="color: #3D2C2E;">Email:</strong> ${email}</p>
              <p style="margin: 0; color: #6B5D5A; font-size: 14px;"><strong style="color: #3D2C2E;">Subject:</strong> ${subject}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #E5E1DD; margin: 20px 0;" />
            
            <div style="margin-top: 20px;">
              <p style="margin: 0 0 10px; color: #3D2C2E; font-weight: 600;">Message:</p>
              <p style="margin: 0; color: #6B5D5A; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <p style="text-align: center; color: #6B5D5A; font-size: 12px; margin-top: 20px;">
            This email was sent from the Kefi Studio contact form
          </p>
        </div>
      `,
        })

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending contact email:', error)
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        )
    }
}
