import { createClient } from '@libsql/client/web';
export { renderers } from '../../renderers.mjs';

const turso = createClient({
  url: "libsql://comments-abdullahsoulat.aws-ap-south-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTI5NDA3NTksImlkIjoiNGIyZjcxNjUtNTExMy00NDZiLThjYmEtMzIzYzRjN2M1MTM1IiwicmlkIjoiM2RiODc1Y2MtOTkwOC00YmMzLTk1YzMtNmI1NTdkYzEzZWRmIn0.tsc8RZiTK7kEOoZDTgQQODB5_AocK0BK9TDyljUZKdOsKiLneEXZ9EOM9CUNSb87Qb_12G2yfeVDxFz_6rNRAQ"
});

async function GET({ url }) {
  const post_id = url.searchParams.get("post_id");
  if (!post_id) return new Response("Missing post_id", { status: 400 });
  const { rows } = await turso.execute(
    "SELECT * FROM comments WHERE post_id = ? AND is_approved = 1 ORDER BY id DESC",
    [post_id]
  );
  return new Response(JSON.stringify(rows), { status: 200 });
}
async function POST({ request }) {
  const data = await request.json();
  const { post_id, author_name, content } = data;
  if (!post_id || !author_name || !content) {
    return new Response("Missing fields", { status: 400 });
  }
  await turso.execute(
    "INSERT INTO comments (post_id, author_name, content, is_approved) VALUES (?, ?, ?, 1)",
    [post_id, author_name, content]
  );
  return new Response("Comment submitted for approval", { status: 201 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
