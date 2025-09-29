import nodemailer from 'nodemailer'

export interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

// Create transporter with Gmail service
// You'll need to set up app-specific password for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'kasasatrevor25@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || '' // You need to set this
    }
  })
}

export async function sendEmail(options: EmailOptions) {
  const transporter = createTransporter()
  
  const mailOptions = {
    from: options.from || '"Kilagala Escape Safaris" <noreply@kilagalaescapesafaris.com>',
    to: options.to,
    subject: options.subject,
    html: options.html
  }
  
  try {
    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' }
  }
}

// Template for contact form email
export function contactEmailTemplate(data: {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2D5016; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2D5016; }
        .value { margin-left: 10px; }
        .footer { background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          ${data.phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${data.phone}</span>
          </div>
          ` : ''}
          ${data.subject ? `
          <div class="field">
            <span class="label">Subject:</span>
            <span class="value">${data.subject}</span>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Message:</span>
            <div style="margin-top: 10px; padding: 15px; background: white; border-left: 3px solid #F4C842;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Kilagala Escape Safaris website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template for booking form email
export function bookingEmailTemplate(data: {
  name: string
  email: string
  phone: string
  destination: string
  tourDate: string
  numberOfGuests: number
  package?: string
  specialRequests?: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2D5016; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 3px; }
        .label { font-weight: bold; color: #2D5016; display: inline-block; width: 150px; }
        .value { margin-left: 10px; }
        .highlight { background: #F4C842; color: #2D5016; padding: 10px; border-radius: 3px; margin: 15px 0; }
        .footer { background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎉 New Safari Booking Request</h2>
        </div>
        <div class="content">
          <div class="highlight">
            <strong>New booking request received!</strong> Please follow up within 24 hours.
          </div>
          
          <h3 style="color: #2D5016;">Customer Details</h3>
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${data.phone}</span>
          </div>
          
          <h3 style="color: #2D5016;">Booking Details</h3>
          <div class="field">
            <span class="label">Destination:</span>
            <span class="value">${data.destination}</span>
          </div>
          <div class="field">
            <span class="label">Tour Date:</span>
            <span class="value">${data.tourDate}</span>
          </div>
          <div class="field">
            <span class="label">Number of Guests:</span>
            <span class="value">${data.numberOfGuests}</span>
          </div>
          ${data.package ? `
          <div class="field">
            <span class="label">Package:</span>
            <span class="value">${data.package}</span>
          </div>
          ` : ''}
          ${data.specialRequests ? `
          <div class="field">
            <span class="label">Special Requests:</span>
            <div style="margin-top: 10px; padding: 15px; background: white; border-left: 3px solid #F4C842;">
              ${data.specialRequests.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>This booking request was submitted via Kilagala Escape Safaris website.</p>
          <p>Please respond to the customer as soon as possible.</p>
        </div>
      </div>
    </body>
    </html>
  `
}