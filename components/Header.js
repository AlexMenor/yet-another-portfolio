import Social from './Social';

import Link from 'next/link';

export default function Header({ mode = 'dark' }) {
  return (
    <header
      className={`px-5 md:px-8 pt-5 md:pt-7 lg:px-14 flex justify-between w-full absolute top-0 z-10`}
    >
      <div className="flex items-center justify-between md:space-x-8 md:justify-start w-full">
        <Link href="/" passHref>
          <a>
            <h1
              className={`transform hover:scale-105 active:scale-95 transition-transform font-display text-lg sm:text-xl lg:text-2xl ${
                mode === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              Alejandro Menor
            </h1>
          </a>
        </Link>
        <Link href="/posts" passHref>
          <a
            className={`transform hover:scale-110 active:scale-90 transition-transform sm:text-lg lg:text-xl ${
              mode === 'dark' ? 'text-white' : 'text-primary'
            }`}
          >
            Blog
          </a>
        </Link>
      </div>
      <Social mode={mode} className="hidden md:flex" />
    </header>
  );
}
