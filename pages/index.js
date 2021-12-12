import Head from 'next/head';
import Landing from '../sections/landing';
import Story from '../sections/story';
import Stack from '../sections/stack';
import Social from '../components/Social';
import metaImage from '../public/meta-image.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <Head>
        <title>Alejandro Menor</title>
        <meta name="title" content="Alejandro Menor" />
        <meta
          name="description"
          content="I'm a Full Stack Developer from Spain that loves to work on impactful projects"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alexmenor.es/" />
        <meta property="og:title" content="Alejandro Menor" />
        <meta
          property="og:description"
          content="I'm a Full Stack Developer from Spain that loves to work on impactful projects"
        />
        <meta property="og:image" content={metaImage.src} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.alexmenor.es/" />
        <meta property="twitter:title" content="Alejandro Menor" />
        <meta
          property="twitter:description"
          content="I'm a Full Stack Developer from Spain that loves to work on impactful projects"
        />
        <meta property="twitter:image" content={metaImage.src} />
      </Head>

      <Landing></Landing>
      <Story></Story>
      <Stack></Stack>
    </div>
  );
}
