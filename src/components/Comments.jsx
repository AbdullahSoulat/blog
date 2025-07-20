import React, { useEffect, useState } from 'react';

export default function Comments({ post_id }) {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch comments
  useEffect(() => {
    fetch(`/api/comments?post_id=${post_id}`)
      .then(res => res.json())
      .then(data => {
        setComments(data);
        setLoading(false);
      });
  }, [post_id]);

  // Handle new comment submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id, author_name: author, content }),
    });
    setAuthor('');
    setContent('');
    // Re-fetch comments (or optimistically add)
    fetch(`/api/comments?post_id=${post_id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  };

  return (
    <div class="px-4 flex flex-col gap-4">
      <h3 class="text-lg">Add a New Comment</h3>
      <form onSubmit={handleSubmit} class="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          class="w-full px-4 py-2 border-2"
          required
        />
        <textarea
          placeholder="Add a comment"
          value={content}
          class="w-full px-4 py-2 border-2 h-30"
          onChange={e => setContent(e.target.value)}
          required
        />
        <p><button 
              type="submit" 
              class="bg-neutral-950 text-white px-5 py-3 mb-5 hover:cursor-pointer
                     hover:bg-blue-300 hover:text-neutral-950"
           >Add Comment</button></p>
      </form>
      <h3 class="pt-6 border-t-2 border-neutral-500 text-lg dark:border-neutral-400">Existing Comments</h3>
      {loading ? <p>Loading...</p> : (
        <ul>
          {comments.map((c) => (
            <li key={c.id} className="border-2 p-4 mb-2">
              <p className="text-neutral-500">{c.author_name}</p>
              <p>{c.content}</p>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
