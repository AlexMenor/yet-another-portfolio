import { useEffect } from 'react';

import Image from 'next/image';
import { GetAllPosts, GetPost } from '../../services/post';

import MetaWrapper from '../../components/MetaWrapper';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import Container from '../../components/Container';

export default function Post({ post }) {
  const date = new Date(post.publishedAt);

  const readableDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const meta = {
    title: post.title,
    description: post.description,
    image: post.coverImage,
    path: `/${post.id}`,
  };

  return (
    <MetaWrapper {...meta}>
      <div className="min-h-screen pt-10 md:pt-14 lg:pt-20">
        <Container className="mt-16 lg:mt-24">
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
        </Container>
      </div>
    </MetaWrapper>
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
