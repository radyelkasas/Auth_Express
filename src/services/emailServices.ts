import nodemailer from "nodemailer";
import { getEnv } from "../utils/validateEnv";

export class EmailServices {
  private transporter!: nodemailer.Transporter;

  constructor() {
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = getEnv();

    console.log(
      "Email configuration:",
      `Host: ${EMAIL_HOST}`,
      `Port: ${EMAIL_PORT}`,
      `User: ${EMAIL_USER}`,
      `Pass: ${EMAIL_PASS}`
    );

    if (EMAIL_HOST && EMAIL_PORT && EMAIL_USER && EMAIL_PASS) {
      this.transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: Number(EMAIL_PORT),
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });
    }
  }

  sendEmail = async ({
    email,
    token,
    expiryHours
  }: {
    email: string;
    token: string;
    expiryHours: number;
  }) => {
    if (!this.transporter) {
      throw new Error("Email transporter is not initialized.");
    }
    const { EMAIL_USER, PORT } = getEnv();

    const mailOptions = {
      from: `Auth App ${EMAIL_USER}`,
      to: `${email}`,
      subject: `Email Confirmation - Valid for ${expiryHours} Hours`,
      text: `Please confirm your email address within ${expiryHours} hours to complete your registration`,
      html: `
            <p>If you cannot view the AMP email content, please click the link below to confirm your email address:</p>
            <p><strong>This confirmation link will expire in ${expiryHours} hours.</strong></p>
            <a href="https://localhost:${PORT}/confirm?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Confirm Email</a>
          `,
      amp: `<!doctype html>
            <html ⚡4email>
              <head>
                <meta charset="utf-8">
                <style amp4email-boilerplate>body{visibility:hidden}</style>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
                <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
                <style amp-custom>
                  .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                  }
                  .header {
                    text-align: center;
                    margin-bottom: 20px;
                  }
                  .button {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    margin: 20px 0;
                  }
                  .expiration {
                    font-weight: bold;
                    color: #ff4500;
                    margin: 15px 0;
                  }
                  .footer {
                    margin-top: 30px;
                    font-size: 12px;
                    color: #777;
                    text-align: center;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <amp-img src="https://yourwebsite.com/logo.png" width="150" height="50" alt="Your Logo"></amp-img>
                    <h1>Email Confirmation</h1>
                  </div>
                  
                  <p>Hello,</p>
                  <p>Thank you for registering! To complete your registration and verify your email address, please click the button below:</p>
                  
                  <div class="expiration">
                    <p>⏰ This confirmation link will expire in ${expiryHours} hours.</p>
                  </div>
                  
                  <div style="text-align: center;">
                    <a href="https://localhost:${PORT}/confirm?token=${token}" class="button">Confirm Email Address</a>
                  </div>
                  
                  <p>If you did not request this confirmation, please ignore this email.</p>
                  
                  <div class="footer">
                    <p>© 2025 Auth App. All rights reserved.</p>
                    <p>123 Main Street, City, Country</p>
                  </div>
                </div>
              </body>
            </html>`
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.response);
      return info;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };
}
