import PostItem from '../../components/PostItem';
import { GetAllPosts } from '../../services/post';

import metaImage from '../../public/meta-image.png';
import MetaWrapper from '../../components/MetaWrapper';
import Container from '../../components/Container';
import PostsHero from '../../components/PostsHero';

export default function Posts({ posts }) {
  const meta = {
    title: 'My most recent posts | Alejandro Menor',
    description:
      'I believe that writing is a powerful tool to clarify thoughts and lessons',
    image: metaImage.src,
    path: '/posts',
  };
  return (
    <MetaWrapper {...meta}>
      <div className="min-h-screen pt-10 md:pt-14 lg:pt-20 md:pb-14">
        <Container>
          <PostsHero className="mt-16 lg:mt-24" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
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
