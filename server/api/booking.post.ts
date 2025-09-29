import { sendEmail, bookingEmailTemplate } from '../utils/email'

export default defineEventHandler(async (event) => {
  // Parse the request body
  const body = await readBody(event)
  
  // Validate required fields
  const requiredFields = ['name', 'email', 'phone', 'destination', 'tourDate', 'numberOfGuests']
  const missingFields = requiredFields.filter(field => !body[field])
  
  if (missingFields.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `Missing required fields: ${missingFields.join(', ')}`
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
  
  // Validate phone number (basic validation)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  if (!phoneRegex.test(body.phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid phone number format'
    })
  }
  
  // Validate number of guests
  if (isNaN(body.numberOfGuests) || body.numberOfGuests < 1) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Number of guests must be at least 1'
    })
  }
  
  // Validate tour date (should be in the future)
  const tourDate = new Date(body.tourDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  if (tourDate < today) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Tour date must be in the future'
    })
  }
  
  try {
    // Format tour date for display
    const formattedDate = tourDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    // Prepare email content for admin
    const adminEmailHtml = bookingEmailTemplate({
      name: body.name,
      email: body.email,
      phone: body.phone,
      destination: body.destination,
      tourDate: formattedDate,
      numberOfGuests: body.numberOfGuests,
      package: body.package,
      specialRequests: body.specialRequests
    })
    
    // Send email to the business owner (all booking details go to kasasatrevor25@gmail.com)
    const result = await sendEmail({
      to: 'kasasatrevor25@gmail.com',
      subject: `🎯 New Booking Request - ${body.name} - ${body.destination}`,
      html: adminEmailHtml
    })
    
    // Send confirmation email to the customer (person who made the booking)
    const customerConfirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2D5016 0%, #5A8030 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 30px; background: #ffffff; border: 1px solid #e0e0e0; border-top: none; }
          .booking-details { background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
          .detail-label { font-weight: bold; color: #2D5016; flex: 1; }
          .detail-value { flex: 2; }
          .cta-button { display: inline-block; padding: 15px 30px; background: #F4C842; color: #2D5016; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          .footer { background: #2D5016; color: white; padding: 30px; text-align: center; border-radius: 0 0 10px 10px; }
          .social-links { margin-top: 20px; }
          .social-links a { color: white; text-decoration: none; margin: 0 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🦁 Booking Confirmation</h1>
            <p style="font-size: 18px; margin-top: 10px;">Your Safari Adventure Awaits!</p>
          </div>
          <div class="content">
            <p>Dear ${body.name},</p>
            <p>Thank you for choosing <strong>Kilagala Escape Safaris</strong> for your African adventure!</p>
            <p>We have received your booking request and our team is reviewing the details. You can expect a response from us within <strong>24 hours</strong> with:</p>
            <ul>
              <li>Confirmation of availability</li>
              <li>Detailed itinerary</li>
              <li>Payment information</li>
              <li>Preparation guidelines</li>
            </ul>
            
            <div class="booking-details">
              <h3 style="color: #2D5016; margin-top: 0;">Your Booking Details</h3>
              <div class="detail-row">
                <div class="detail-label">Destination:</div>
                <div class="detail-value">${body.destination}</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Tour Date:</div>
                <div class="detail-value">${formattedDate}</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Number of Guests:</div>
                <div class="detail-value">${body.numberOfGuests}</div>
              </div>
              ${body.package ? `
              <div class="detail-row">
                <div class="detail-label">Package:</div>
                <div class="detail-value">${body.package}</div>
              </div>
              ` : ''}
              ${body.specialRequests ? `
              <div class="detail-row">
                <div class="detail-label">Special Requests:</div>
                <div class="detail-value">${body.specialRequests}</div>
              </div>
              ` : ''}
            </div>
            
            <h3 style="color: #2D5016;">What Happens Next?</h3>
            <ol>
              <li><strong>Review:</strong> Our safari experts will review your request</li>
              <li><strong>Confirmation:</strong> We'll confirm availability and send you a detailed quote</li>
              <li><strong>Payment:</strong> Secure your booking with our easy payment options</li>
              <li><strong>Preparation:</strong> Receive your complete safari guide and packing list</li>
            </ol>
            
            <p style="background: #FFF9E6; padding: 15px; border-left: 4px solid #F4C842; margin: 20px 0;">
              <strong>Need immediate assistance?</strong><br>
              Call us at: <a href="tel:+256768461164">+256 768 461 164</a><br>
              Email: <a href="mailto:Kilagalaescapesafaris@gmail.com">Kilagalaescapesafaris@gmail.com</a>
            </p>
            
            <p>We're excited to help you create unforgettable memories in the Pearl of Africa!</p>
            
            <p>Warm regards,<br>
            <strong>The Kilagala Escape Safaris Team</strong></p>
          </div>
          <div class="footer">
            <p style="font-size: 20px; margin-bottom: 10px;">🌍 Journey into the Heart of the Wilderness</p>
            <p>📍 Kansanga, Opp UK Mall | Kampala, Uganda</p>
            <p>📧 Kilagalaescapesafaris@gmail.com | 📞 +256 768 461 164</p>
            <div class="social-links">
              <a href="#">Facebook</a> |
              <a href="#">Instagram</a> |
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
    
    // Send confirmation to customer's email (the person who filled the booking form)
    await sendEmail({
      to: body.email,
      subject: `Booking Confirmation - ${body.destination} Safari Adventure`,
      html: customerConfirmationHtml
    })
    
    if (result.success) {
      return {
        success: true,
        message: 'Your booking request has been submitted successfully! Check your email for confirmation.'
      }
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to process booking. Please try again later.'
      })
    }
  } catch (error) {
    console.error('Booking form error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred while processing your booking. Please try again or contact us directly.'
    })
  }
})