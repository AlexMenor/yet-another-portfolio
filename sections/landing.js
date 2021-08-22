import Image from "next/image";

import me from "../public/assets/me.png";
import blob from "../public/assets/blob.svg";

import Arrow from "../components/Arrow";
import ArrowDown from "../components/ArrowDown";
import Social from "../components/Social";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-stretch relative">
      <img
        className="hidden xl:block"
        style={{
          position: "absolute",
          right: 0,
          width: "50vw",
          height: "105vh",
        }}
        src={blob.src}
      />
      <div>
        <header className="px-7 py-7 md:px-14 md:py-7 flex justify-between">
          <h1 className="font-display text-2xl md:text-3xl">Alejandro Menor</h1>
          <Social />
        </header>

        <div className="flex flex-wrap-reverse flex-row items-center md:pt-20 lg:pt-40 2xl:pt-72 md:pb-20 justify-center md:px-20">
          <h1
            className="font-display text-4xl md:text-6xl leading-relaxed md:leading-relaxed mt-5 md:mt-0 xl:mr-20 underline"
            style={{
              textDecorationColor: "#FFB800",
              textDecorationThickness: "4px",
            }}
          >
            I'm a Full Stack
            <br /> Developer
          </h1>
          <Image src={me} alt="Picture of myself"></Image>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10 md:pb-14 mt-10 relative">
        <a href="#stack">
          <h2 className="font-display text-xl md:text-2xl text-black">
            Go to my <span className="text-primary">skills & stack</span>{" "}
            <Arrow className="fill-current text-primary" size="20"></Arrow>
          </h2>
        </a>
        <a href="#story">
          <h3 className="font-display text-lg md:text-xl text-black mt-4 md:mt-10 animate-bounce">
            Or go through my <span className="text-accent">story</span>
            <ArrowDown
              className="fill-current text-accent ml-2"
              size="15"
            ></ArrowDown>
          </h3>
        </a>
      </div>
    </div>
  );
}
