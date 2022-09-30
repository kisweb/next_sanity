// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();
import sgMail from '@sendgrid/mail';

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: 'Next Contact Form',
    html: `<p><strong>Name : </strong>${name}</p>
        <p><strong>Email : </strong>${email}</p>
        <p><strong>Message : </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  res.json({ success: true });
}
