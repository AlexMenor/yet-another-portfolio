import Head from "next/head";
import Landing from "../sections/landing";
import Story from "../sections/story";
import Stack from "../sections/stack";
import Social from "../components/Social";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Alejandro Menor</title>
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
      <footer className="flex items-center justify-center w-full bg-black h-20">
        <p className="mr-5 text-white">You can find me on:</p>
        <Social showOnMobile={true}></Social>
      </footer>
    </div>
  );
}
