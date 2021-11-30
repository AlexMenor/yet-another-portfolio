import Link from 'next/link';

export default function PostItem({
  title,
  coverImage,
  readingTimeMinutes,
  id,
}) {
  return (
    <Link href={`/posts/${id}`} passHref>
      <div className="py-2 cursor-pointer" data-aos="fade-up">
        <p className="uppercase text-xs tracking-widest text-gray-500">
          {readingTimeMinutes} min read
        </p>
        <h2 className="font-display text-lg lg:text-2xl mt-2">{title}</h2>
        <img className="rounded mt-2" src={coverImage} alt="Post cover image" />
      </div>
    </Link>
  );
}
