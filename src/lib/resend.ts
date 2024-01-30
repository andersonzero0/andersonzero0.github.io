/*import { Resend } from "resend";

const resend = new Resend(import.meta.env.VITE_RESEND_APIKEY);

type PropsSendEmail = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail({ name, email, message }: PropsSendEmail) {
  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["anderson11viana@gmail.com"],
      subject: "🔥 Contact via Portfolio",
      html: `<div>
                <strong>Name: ${name}</strong><br/>
                <small>Email: ${email}<small/><br/>
                <p>Message: ${message}<p/>
            <div/>`,
    });

    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
    return error;
  }
}
*/
