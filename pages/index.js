import Landing from '../sections/landing';
import Story from '../sections/story';
import Stack from '../sections/stack';

import MetaWrapper from '../components/MetaWrapper';

import metaImage from '../public/meta-image.png';

export default function Home() {
  const meta = {
    title: 'Alejandro Menor',
    description:
      "I'm a Full Stack Developer from Spain that loves to work on impactful projects",
    image: metaImage.src,
    path: '/',
  };
  return (
    <MetaWrapper {...meta}>
      <Landing></Landing>
      <Story></Story>
      <Stack></Stack>
    </MetaWrapper>
  );
}
