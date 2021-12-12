import Head from 'next/head';
import Image from 'next/image';
import { GetAllPosts, GetPost } from '../../services/post';

export default function Post({ post }) {
  const date = new Date(post.publishedAt);

  const readableDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.description} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.alexmenor.es/posts/${post.id}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.coverImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.alexmenor.es/posts/${post.id}`}
        />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.description} />
        <meta property="twitter:image" content={post.coverImage} />
      </Head>
      <div className="min-h-screen pt-10 md:pt-14 lg:pt-20 pb-14 md:pb-20 lg:pb-32">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-32 2xl:px-52 mt-16 lg:mt-24">
          <h1 className="font-display text-xl md:text-2xl lg:text-3xl">
            {post.title}
          </h1>
          <div className="mt-6">
            <Image
              className="rounded"
              width={1000}
              height={420}
              layout="responsive"
              src={post.coverImage}
              placeholder="blur"
              blurDataURL={post.blurCoverImage}
              alt="Post cover image"
            />
          </div>
          <div className="flex items-center space-x-2 mt-2 text-gray-500">
            <p className="text-xs tracking-wide">Published on {readableDate}</p>
            <p>•</p>
            <p className="uppercase text-xs tracking-widest">
              {post.readingTimeMinutes} min read
            </p>
          </div>
          <article
            className="mt-10 pb-16"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await GetAllPosts();
  const paths = posts.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await GetPost(params.id);
  return { props: { post } };
}
