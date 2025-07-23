import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_5cFER9Bn_25HFcXTatTjWgwUvcnW5TnUW");
const GET = async () => {
  const { data, error } = await resend.emails.send({
    from: "slothsama <signup@abdullahsoulat.com>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html: "something"
  });
  if (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
