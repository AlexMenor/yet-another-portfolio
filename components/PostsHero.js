export default function PostsHero({ className = '' }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className={`text-center py-6 md:py-12 ${className}`}
    >
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-secondary/80 to-secondary/90 bg-black">
        My most recent posts
      </h1>
      <p className="mt-5 px-10 text-gray-600 text-base md:text-lg font-light">
        Writing is a powerful tool to clarify thoughts and lessons
      </p>
    </div>
  );
}
