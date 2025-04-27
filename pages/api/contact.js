import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,  // Use environment variable for email
        pass: process.env.MAIL_PASS,  // Use environment variable for password
      },
    });

    const mailOptions = {
      from: email,
      to: 'muzammalm092@gmail.com', // Your email address
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):

${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
