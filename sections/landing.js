import Div100vh from 'react-div-100vh';

import me from '../public/assets/avatar.png';

import Arrow from '../components/Arrow';
import ArrowDown from '../components/ArrowDown';

export default function Landing() {
  return (
    <Div100vh className="flex flex-col justify-around xl:justify-between items-stretch relative landing pt-24 md:pt-32 lg:pt-52">
      <div className="2xl:w-3/4 flex flex-col-reverse xl:flex-row items-center justify-center mx-auto xl:space-x-28 lg:px-20">
        <div className="font-display text-white mt-8 sm:mt-14 xl:mt-0 tracking-wide">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{ lineHeight: 1.25 }}
          >
            I&apos;m a{' '}
            <span className="underline decoration-primary">
              Full Stack <br /> Developer
            </span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:mt-6"
            style={{ lineHeight: 1.4 }}
          >
            that loves to work on <br />
            <span className="text-transparent bg-gradient-to-r from-accent/70 to-accent bg-clip-text">
              impactful
            </span>{' '}
            projects
          </p>
        </div>
        <img className="landing-img" src={me.src}></img>
      </div>
      <div className="flex flex-col items-center pb-20 md:pb-14 relative z-10 bottom-landing-links">
        <a href="#stack">
          <h2 className="font-display sm:text-xl lg:text-2xl text-white">
            Go to my <span className="text-primary">skills & stack</span>{' '}
            <Arrow className="fill-current text-primary" size="20"></Arrow>
          </h2>
        </a>
        <a href="#story">
          <h3 className="font-display text-sm sm:text-lg lg:text-xl text-white mt-4 md:mt-10 animate-bounce">
            Or go through my <span className="text-accent">story</span>
            <ArrowDown
              className="fill-current text-accent ml-2"
              size="15"
            ></ArrowDown>
          </h3>
        </a>
      </div>
      <div className="custom-shape-divider-bottom-1631354411">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Div100vh>
  );
}
