import { useEffect, useRef } from 'react';

export default function PostsHero({ className = '' }) {
  const pathRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    path.setAttribute('stroke-dasharray', path.getTotalLength());
    path.setAttribute('stroke-dashoffset', path.getTotalLength());
    setTimeout(() => {
      path.style.opacity = 1;
      path.setAttribute('stroke-dashoffset', 0);
    }, 700);
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="600"
      className={`text-center py-6 md:py-12 ${className}`}
    >
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-secondary/80 to-secondary/90 bg-black">
        <span className="text-black">📝&nbsp;</span>My most recent posts
      </h1>
      <div className="w-fit mx-auto px-10 mt-5">
        <p className="text-gray-600 text-base md:text-lg font-light">
          Writing is a powerful tool to clarify thoughts and lessons
        </p>
        <svg
          className="pt-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-1.57 0.98 524.6 36.86"
        >
          <path
            className="stroke-primary fill-transparent opacity-0"
            style={{
              transitionProperty: 'stroke-dashoffset',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '500ms',
            }}
            strokeWidth="4"
            strokeLinecap="round"
            d="M.425 34.01c33.8-2.5 66.4-11.9 99.1-19.8 34-8.3 68.1-13.8 103.2-10 35.4 3.8 69.7 14.5 104.4 22.1 33.4 7.4 67.3 10.8 101.5 9.1 38.5-1.9 76.5-10 112.4-23.8"
            ref={pathRef}
          ></path>
        </svg>
      </div>
    </div>
  );
}
