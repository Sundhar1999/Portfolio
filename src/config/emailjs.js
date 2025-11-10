// EmailJS Configuration
// To set up EmailJS for real email functionality:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key from the dashboard
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_5b216in',
  TEMPLATE_ID: 'template_b1ygn39',
  PUBLIC_KEY: 'IHyxdWIn6zsilWIOM'
};

// Email template variables that will be sent:
// - from_name: Sender's name
// - from_email: Sender's email
// - subject: Email subject
// - message_type: Type of inquiry
// - message: Message content
// - to_email: Your email (sundhark603@gmail.com)

// Example EmailJS template:
/*
Subject: New Portfolio Contact: {{subject}}

Hello Sundhar,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Type: {{message_type}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/