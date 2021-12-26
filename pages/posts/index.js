import PostItem from '../../components/PostItem';
import { GetAllPosts } from '../../services/post';
import Head from 'next/head';
import metaImage from '../../public/meta-image.png';

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>My most recent posts | Alejandro Menor</title>
        <meta name="title" content="My most recent posts | Alejandro Menor" />
        <meta
          name="description"
          content="I believe writing is a powerful tool to clarify thoughts and lessons"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alexmenor.es/posts" />
        <meta property="og:title" content="My most recent posts" />
        <meta
          property="og:description"
          content="I believe writing is a powerful tool to clarify thoughts and lessons"
        />
        <meta property="og:image" content={metaImage.src} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.alexmenor.es/posts" />
        <meta property="twitter:title" content="My most recent posts" />
        <meta
          property="twitter:description"
          content="I believe writing is a powerful tool to clarify thoughts and lessons"
        />
        <meta property="twitter:image" content={metaImage.src} />
      </Head>
      <div className="min-h-screen pt-10 md:pt-14 lg:pt-20 pb-14 md:pb-20 lg:pb-32">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-32 2xl:px-52">
          <h1 className="mt-16 lg:mt-24 font-display text-xl md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            My most recent posts
          </h1>
          <p className="mt-5 text-gray-600 text-sm md:text-base">
            Writing is a powerful tool to clarify thoughts and lessons
          </p>
          <div className="mt-10 space-y-5 pb-16">
            {posts.map((post) => (
              <PostItem key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await GetAllPosts();

  return {
    props: { posts },
  };
}
