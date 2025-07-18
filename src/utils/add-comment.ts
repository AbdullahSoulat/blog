// netlify/functions/add-comment.js
import { getStore } from "@netlify/blobs";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const { postSlug, name, comment } = data;

    if (!postSlug || !name || !comment) {
      return { statusCode: 400, body: "Missing required fields" };
    }

    const commentsStore = getStore({
      name: "blog-comments", // Name your store
      consistency: "strong", // Ensure immediate visibility of new comments
    });

    // Generate a unique key for each comment
    const timestamp = new Date().toISOString();
    const commentKey = `${postSlug}/${timestamp}_${Math.random().toString(36).substring(7)}`;

    await commentsStore.setJSON(commentKey, {
      postSlug,
      name,
      comment,
      createdAt: timestamp,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Comment added successfully!" }),
    };
  } catch (error) {
    console.error("Error adding comment:", error);
    return { statusCode: 500, body: "Failed to add comment." };
  }
}