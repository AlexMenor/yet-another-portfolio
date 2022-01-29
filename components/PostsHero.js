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
        <p className="text-gray-600 text-lg font-light">
          Writing is a powerful tool to clarify thoughts and lessons
        </p>
        <svg
          className="pt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0.5 0.5 303 5"
        >
          <path
            className="stroke-primary fill-transparent opacity-0"
            style={{
              transitionProperty: 'stroke-dashoffset',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '500ms',
            }}
            ref={pathRef}
            strokeLinecap="round"
            strokeWidth="2"
            d="M-2 3h309"
          ></path>
        </svg>
      </div>
    </div>
  );
}
