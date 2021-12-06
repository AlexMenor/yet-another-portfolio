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
    <Link href={`/posts/${id}`} passHref>
      <div className="py-2 cursor-pointer" data-aos="fade-up">
        <p className="uppercase text-xs tracking-widest text-gray-500">
          {readingTimeMinutes} min read
        </p>
        <h2 className="font-display text-lg lg:text-2xl mt-2">{title}</h2>
        <div className="rounded mt-2">
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
      </div>
    </Link>
  );
}
