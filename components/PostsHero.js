import Image from 'next/image';
import writingPicture from '../public/assets/writing.png';

export default function PostsHero({ className = '' }) {
  return (
    <div className={`flex items-center justify-between relative ${className}`}>
      <div className="relative">
        <h1 className="font-display text-xl md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary/80 to-secondary/90 bg-black">
          My most recent posts
        </h1>
        <p className="mt-5 text-gray-600 text-sm md:text-base font-medium">
          Writing is a powerful tool to clarify thoughts and lessons
        </p>
      </div>
      <div className="ml-6 sm:ml-12">
        <Image
          src={writingPicture}
          width={200}
          height={200}
          alt="Illustration of someone writing with a laptop"
        ></Image>
      </div>
    </div>
  );
}
