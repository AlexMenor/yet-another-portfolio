import Head from "next/head";
import Landing from "../sections/landing";
import Story from "../sections/story";
import Stack from "../sections/stack";
import Social from "../components/Social";
import metaImage from "../public/meta-image.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="bg-white">
      <Head>
        <title>Alejandro Menor</title>
        <meta name="title" content="Alejandro Menor" />
        <meta
          name="description"
          content="I'm a Full Stack Developer from Spain that loves to work on impactful projects"
        />
        <meta name="theme-color" content="#0a1723" />


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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>

        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Martel:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Landing></Landing>
      <Story></Story>
      <Stack></Stack>
      <footer className="flex items-end pb-3 justify-center lg:pb-8 w-full relative">
        <p className="mr-5 text-white relative z-10 text-sm md:text-base">
          You can find me on:
        </p>
        <Social></Social>
        <div className="custom-shape-divider-bottom-1631355392">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1631356239">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </footer>
    </div>
  );
}
