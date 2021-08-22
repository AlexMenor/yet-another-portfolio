import Head from "next/head";
import Landing from "../sections/landing";
import Story from "../sections/story";

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
      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
