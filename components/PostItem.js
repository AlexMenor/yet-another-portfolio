import Link from 'next/link';
import Image from 'next/image';

export default function PostItem({
  title,
  coverImage,
  readingTimeMinutes,
  id,
  blurCoverImage,
}) {
  return (
    <div data-aos="fade-up">
      <Link href={`/posts/${id}`} passHref>
        <div className="cursor-pointer transform hover:scale-102 transition-transform ease-in-out overflow-hidden rounded-lg">
          <div>
            <Image
              layout="responsive"
              width={1000}
              height={420}
              src={coverImage}
              alt="Post cover image"
              blurDataURL={blurCoverImage}
              placeholder="blur"
            />
          </div>
          <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
            <p className="uppercase text-xs tracking-widest text-gray-500">
              {readingTimeMinutes} min read
            </p>
            <h2 className="font-display text-lg lg:text-xl mt-2">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
