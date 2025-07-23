import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Uncomment these lines to see your audiences, then comment them back out
    // const audiences = await resend.audiences.list();
    // console.log('Your audiences:', audiences.data?.data);

    const formData = await request.formData();
    const email = formData.get('email') as string;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Add to contact form
   resend.contacts.create({
    email: email,
    unsubscribed: false,
    audienceId: import.meta.env.RESEND_AUDIENCE_ID!,
   }); 

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: "Abdullah Bin Soulat <signup@abdullahsoulat.com>", // Replace with your verified domain
      to: [email],
      subject: 'Welcome to our newsletter!',
      html: `
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive updates and news from us soon.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Here you might also want to save the email to a database
    // For now, we'll just return success

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};