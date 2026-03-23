import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    await dbConnect()
    
    const body = await request.json()
    const { name, email, phone, message } = body
    
    console.log('📝 Form submission received:', { name, email, phone })
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Save to database
    const lead = await Lead.create({
      name,
      email,
      phone,
      message: message || '',
      package: 'simple',
    })
    
    console.log('✅ Lead saved successfully! ID:', lead._id)
    
    // Send email to admin
    try {
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>',
        to: [process.env.ADMIN_EMAIL],
        subject: `🔔 New Estimate Request from ${name}`,
        replyTo: email,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0F766E; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0F766E; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🔔 New Estimate Request!</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Customer Name:</div>
                  <div>${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div><a href="tel:${phone}">${phone}</a></div>
                </div>
                ${message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div>${message.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Submitted:</div>
                  <div>${new Date().toLocaleString()}</div>
                </div>
                <hr>
                <p><strong>Quick Actions:</strong></p>
                <ul>
                  <li>Reply to this email to respond directly to ${name}</li>
                  <li>Call the customer: ${phone}</li>
                </ul>
              </div>
              <div class="footer">
                <p>PureFlow Air | NADCA Certified | Licensed & Insured</p>
              </div>
            </div>
          </body>
          </html>
        `,
      })
      console.log('✅ Admin email sent to:', process.env.ADMIN_EMAIL)
    } catch (emailError) {
      console.error('❌ Admin email error:', emailError.message)
    }
    
    // Send auto-reply to customer
    try {
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>',
        to: [email],
        subject: `Thank you for contacting PureFlow Air, ${name}!`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0F766E; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>✨ Thank You, ${name}!</h2>
              </div>
              <div class="content">
                <p>We've received your estimate request and will get back to you within <strong>24 hours</strong>.</p>
                <p><strong>Your request summary:</strong></p>
                <ul>
                  <li>Name: ${name}</li>
                  <li>Phone: ${phone}</li>
                  ${message ? `<li>Message: ${message}</li>` : ''}
                </ul>
                <p>If you need immediate assistance, please call us at <strong>(813) 555-8267</strong>.</p>
                <br>
                <p>Best regards,<br><strong>PureFlow Air Team</strong></p>
                <p style="font-size: 12px; color: #888;">NADCA Certified | Licensed & Insured</p>
              </div>
              <div class="footer">
                <p>© 2024 PureFlow Air. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      })
      console.log('✅ Auto-reply sent to:', email)
    } catch (emailError) {
      console.error('❌ Auto-reply error:', emailError.message)
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you soon.' 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('❌ Error saving lead:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Something went wrong' 
      },
      { status: 500 }
    )
  }
}