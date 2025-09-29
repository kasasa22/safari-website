import { sendEmail, contactEmailTemplate } from '../utils/email'

export default defineEventHandler(async (event) => {
  // Parse the request body
  const body = await readBody(event)
  
  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required'
    })
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }
  
  try {
    // Prepare email content
    const emailHtml = contactEmailTemplate({
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message
    })
    
    // Send email to the business owner
    const result = await sendEmail({
      to: 'kasasatrevor25@gmail.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: emailHtml
    })
    
    // Send confirmation email to the user
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2D5016; color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; background: #f9f9f9; }
          .footer { background: #F4C842; color: #2D5016; padding: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Us!</h1>
          </div>
          <div class="content">
            <p>Dear ${body.name},</p>
            <p>We have received your message and appreciate you reaching out to Kilagala Escape Safaris.</p>
            <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
            <p><strong>Your Message:</strong></p>
            <div style="padding: 15px; background: white; border-left: 3px solid #F4C842; margin: 20px 0;">
              ${body.message}
            </div>
            <p>In the meantime, feel free to explore our website for more information about our safari packages.</p>
            <p>Best regards,<br>Kilagala Escape Safaris Team</p>
          </div>
          <div class="footer">
            <p>📧 Kilagalaescapesafaris@gmail.com | 📞 +256 768 461 164</p>
          </div>
        </div>
      </body>
      </html>
    `
    
    // Send confirmation to the customer (the person who filled the form)
    await sendEmail({
      to: body.email,
      subject: 'Thank you for contacting Kilagala Escape Safaris',
      html: confirmationHtml
    })
    
    if (result.success) {
      return {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!'
      }
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email. Please try again later.'
      })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred while sending your message. Please try again.'
    })
  }
})