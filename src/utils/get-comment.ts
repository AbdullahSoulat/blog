// netlify/functions/get-comments.js
import { getStore } from "@netlify/blobs";

export async function handler(event, context) {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const postSlug = event.queryStringParameters.postSlug;

    if (!postSlug) {
      return { statusCode: 400, body: "Missing postSlug parameter" };
    }

    const commentsStore = getStore({ name: "blog-comments" });

    // List all blobs with the prefix of the current postSlug
    const { blobs } = await commentsStore.list({ prefix: `${postSlug}/` });

    const comments = await Promise.all(
      blobs.map(async (blob) => {
        return await commentsStore.getJSON(blob.key);
      })
    );

    // Sort comments by creation date (newest first)
    comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
      statusCode: 200,
      body: JSON.stringify(comments),
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return { statusCode: 500, body: "Failed to fetch comments." };
  }
}