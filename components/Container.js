export default function Container({ className, children }) {
  return (
    <div
      className={`container mx-auto px-5 md:px-8 lg:px-12 xl:px-32 2xl:px-52 ${className}`}
    >
      {children}
    </div>
  );
}
