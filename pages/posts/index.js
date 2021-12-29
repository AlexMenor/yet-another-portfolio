import PostItem from '../../components/PostItem';
import { GetAllPosts } from '../../services/post';

import Image from 'next/image';

import metaImage from '../../public/meta-image.png';
import writingPicture from '../../public/assets/writing.png';
import MetaWrapper from '../../components/MetaWrapper';
import Container from '../../components/Container';

export default function Posts({ posts }) {
  const meta = {
    title: 'My most recent posts | Alejandro Menor',
    description:
      'I believe writing is a powerful tool to clarify thoughts and lessons',
    image: metaImage.src,
    path: '/posts',
  };
  return (
    <MetaWrapper {...meta}>
      <div className="min-h-screen pt-10 md:pt-14 lg:pt-20 pb-14 md:pb-20">
        <Container>
          <div className="flex items-center justify-between mt-16 lg:mt-24">
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
        </Container>
      </div>
    </MetaWrapper>
  );
}

export async function getStaticProps() {
  const posts = await GetAllPosts();

  return {
    props: { posts },
  };
}
