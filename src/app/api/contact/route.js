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
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Create lead in database
    const lead = await Lead.create({
      name,
      email,
      phone,
      message: message || '',
      package: 'simple',
    })
    
    // Send email notification to business owner
    try {
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>', // Free testing domain
        to: [process.env.ADMIN_EMAIL],
        subject: `New Estimate Request from ${name}`,
        replyTo: email,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <title>New Estimate Request</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .card { background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
              .header { background: #0F766E; color: white; padding: 25px; text-align: center; }
              .header h2 { margin: 0; font-size: 24px; }
              .content { padding: 25px; }
              .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
              .label { font-weight: bold; color: #0F766E; font-size: 14px; margin-bottom: 5px; }
              .value { color: #334155; font-size: 16px; }
              .value a { color: #F97316; text-decoration: none; }
              .actions { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
              .actions h4 { margin: 0 0 10px 0; color: #0F766E; }
              .button { display: inline-block; background: #F97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-top: 10px; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h2>🔔 New Estimate Request!</h2>
                  <p style="margin: 5px 0 0; opacity: 0.9;">From your website contact form</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Customer Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone Number</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  ${message ? `
                  <div class="field">
                    <div class="label">Message</div>
                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  ` : ''}
                  
                  <div class="actions">
                    <h4>📋 Quick Actions</h4>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                      <li><strong>Reply to this email</strong> to respond directly to ${name}</li>
                      <li>Call the customer: <strong>${phone}</strong></li>
                      <li>View all leads: <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin">Admin Panel</a></li>
                    </ul>
                  </div>
                </div>
                <div class="footer">
                  <p>This lead was generated from your website's contact form.<br>
                  PureFlow Air | <a href="${process.env.NEXT_PUBLIC_APP_URL}">Visit Website</a></p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      })
      
      console.log('✅ Admin email sent successfully')
    } catch (emailError) {
      console.error('❌ Error sending admin email:', emailError)
      // Continue - data is still saved
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
            <meta charset="UTF-8">
            <title>Thank You for Your Inquiry</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .card { background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
              .header { background: #0F766E; color: white; padding: 30px; text-align: center; }
              .header h2 { margin: 0; }
              .content { padding: 30px; }
              .thank-you { font-size: 18px; color: #0F766E; margin-bottom: 20px; }
              .info-box { background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F97316; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; background: #f9f9f9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="card">
                <div class="header">
                  <h2>✨ Thank You, ${name}!</h2>
                </div>
                <div class="content">
                  <div class="thank-you">
                    We've received your estimate request!
                  </div>
                  <p>Thank you for choosing PureFlow Air. Our team will review your request and get back to you within <strong>24 hours</strong>.</p>
                  
                  <div class="info-box">
                    <strong>📋 Here's what you requested:</strong><br>
                    • Name: ${name}<br>
                    • Phone: ${phone}<br>
                    ${message ? `• Message: ${message}` : ''}
                  </div>
                  
                  <p><strong>Need immediate assistance?</strong><br>
                  Call us at <strong style="color: #F97316;">(813) 555-8267</strong> and reference your request.</p>
                  
                  <p style="margin-top: 25px;">Best regards,<br>
                  <strong>PureFlow Air Team</strong><br>
                  <span style="font-size: 12px; color: #888;">NADCA Certified | Licensed & Insured</span></p>
                </div>
                <div class="footer">
                  <p>© 2024 PureFlow Air. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      })
      
      console.log('✅ Auto-reply sent to customer')
    } catch (emailError) {
      console.error('❌ Error sending auto-reply:', emailError)
    }
    
    return NextResponse.json(
      { success: true, data: lead },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}