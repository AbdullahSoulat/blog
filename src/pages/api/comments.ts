import { turso } from '../../turso';
import { APIContext } from 'astro';

export async function GET({ url } : APIContext) {
  const post_id = url.searchParams.get('post_id');
  if (!post_id) return new Response('Missing post_id', { status: 400 });

  const { rows } = await turso.execute(
    'SELECT * FROM comments WHERE post_id = ? AND is_approved = 1 ORDER BY id DESC',
    [post_id]
  );
  return new Response(JSON.stringify(rows), { status: 200 });
}

export async function POST({ request } : APIContext) {
  const data = await request.json();
  const { post_id, author_name, content } = data;
  if (!post_id || !author_name || !content) {
    return new Response('Missing fields', { status: 400 });
  }
  await turso.execute(
    'INSERT INTO comments (post_id, author_name, content, is_approved) VALUES (?, ?, ?, 1)',
    [post_id, author_name, content]
  );
  return new Response('Comment submitted for approval', { status: 201 });
}