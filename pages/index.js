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
      <footer className="flex items-end pb-3 justify-center lg:pb-8 w-full relative">
        <p className="mr-5 text-white relative z-10">You can find me on:</p>
        <Social showOnMobile={true} colorClassName="text-white"></Social>
        <div className="custom-shape-divider-bottom-1631355392">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="custom-shape-divider-bottom-1631356239">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </footer>
    </div>
  );
}
