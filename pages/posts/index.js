import PostItem from '../../components/PostItem';
import { GetAllPosts } from '../../services/post';

import Head from 'next/head';
import Image from 'next/image';

import metaImage from '../../public/meta-image.png';
import writingPicture from '../../public/assets/writing.png';

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
          <div className="flex items-center justify-between mt-16 lg:mt-24 bg-black/5 p-5 sm:p-7 rounded">
            <div>
              <h1 className="font-display text-xl md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary/80 to-secondary/90 bg-black">
                My most recent posts
              </h1>
              <p className="mt-5 text-gray-600 text-sm md:text-base font-medium">
                Writing is a powerful tool to clarify thoughts and lessons
              </p>
            </div>
            <div className="ml-6 sm:ml-12">
              <Image
                src={writingPicture}
                width={200}
                height={200}
                alt="Illustration of someone writing with a laptop"
              ></Image>
            </div>
          </div>
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
