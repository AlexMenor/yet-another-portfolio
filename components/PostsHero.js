export default function PostsHero({ className = '' }) {
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
        <p className="pb-1 inline text-gray-600 text-lg font-light fancy-underline-animation">
          Writing is a powerful tool to clarify thoughts and lessons
        </p>
      </div>
    </div>
  );
}
