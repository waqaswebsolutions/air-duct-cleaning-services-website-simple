import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    console.log('📝 Form submission received')
    
    // Connect to database with timeout
    await dbConnect()
    console.log('✅ Database connected')
    
    const body = await request.json()
    const { name, email, phone, message } = body
    
    console.log('📋 Form data:', { name, email, phone })
    
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
    
    console.log('✅ Lead saved! ID:', lead._id)
    
    // Send emails (optional - won't break if fails)
    try {
      // Send to admin
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>',
        to: [process.env.ADMIN_EMAIL],
        subject: `New Estimate Request from ${name}`,
        replyTo: email,
        html: `
          <h2>New Estimate Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <hr>
          <p>Reply to this email to respond directly to the customer.</p>
        `,
      })
      console.log('✅ Admin email sent')
      
      // Send auto-reply to customer
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>',
        to: [email],
        subject: `Thank you for contacting PureFlow Air!`,
        html: `
          <h2>Thank You, ${name}!</h2>
          <p>We've received your estimate request and will get back to you within 24 hours.</p>
          <p>If you need immediate assistance, call us at (813) 555-8267.</p>
          <br>
          <p>Best regards,<br>PureFlow Air Team</p>
        `,
      })
      console.log('✅ Auto-reply sent')
    } catch (emailError) {
      console.error('⚠️ Email error (but data was saved):', emailError.message)
      // Don't fail the request - data is already saved
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you soon.' 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('❌ Error details:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Something went wrong',
        details: error.message
      },
      { status: 500 }
    )
  }
}