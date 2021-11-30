export async function GetAllPosts() {
  const body = await fetch('https://dev.to/api/articles/me', {
    headers: {
      'api-key': process.env.DEV_TO_API_KEY,
    },
  }).then((res) => res.json());

  const posts = body.map(
    ({
      title,
      cover_image: coverImage,
      published_at: publishedAt,
      reading_time_minutes: readingTimeMinutes,
      slug,
      tag_list: tags,
      id,
    }) => ({
      title,
      coverImage,
      publishedAt,
      readingTimeMinutes,
      slug,
      tags,
      id,
    })
  );
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
  return {
    title,
    coverImage,
    publishedAt,
    tags,
    html,
    readingTimeMinutes,
    description,
  };
}
