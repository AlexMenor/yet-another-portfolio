import { getPlaiceholder } from 'plaiceholder';

export async function GetAllPosts() {
  const body = await fetch('https://dev.to/api/articles/me', {
    headers: {
      'api-key': process.env.DEV_TO_API_KEY,
    },
  }).then((res) => res.json());

  const posts = [];

  for (const post of body) {
    posts.push({
      title: post.title,
      coverImage: post.cover_image,
      pusblishedAt: post.published_at,
      readingTimeMinutes: post.reading_time_minutes,
      slug: post.slug,
      tags: post.tag_list,
      id: post.id,
      blurCoverImage: (await getPlaiceholder(post.cover_image)).base64,
    });
  }

  return posts;
}

export async function GetPost(id) {
  const {
    title,
    cover_image: coverImage,
    published_at: publishedAt,
    tags,
    body_html: html,
    reading_time_minutes: readingTimeMinutes,
    description,
  } = await fetch(`https://dev.to/api/articles/${id}`, {
    headers: {
      'api-key': process.env.DEV_TO_API_KEY,
    },
  }).then((res) => res.json());

  const { base64 } = await getPlaiceholder(coverImage);

  return {
    title,
    coverImage,
    publishedAt,
    tags,
    html,
    readingTimeMinutes,
    description,
    blurCoverImage: base64,
  };
}
