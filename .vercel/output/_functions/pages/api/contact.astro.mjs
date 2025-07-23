import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_5cFER9Bn_25HFcXTatTjWgwUvcnW5TnUW");
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: "79fe0c23-208c-45c9-b269-145f5a962036"
    });
    const { data, error } = await resend.emails.send({
      from: "Abdullah Bin Soulat <signup@abdullahsoulat.com>",
      // Replace with your verified domain
      to: [email],
      subject: "Welcome to our newsletter!",
      html: `
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive updates and news from us soon.</p>
      `
    });
    console.log(data);
    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Successfully subscribed!"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
