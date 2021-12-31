import Social from './Social';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black/90 to-black">
      <div className="footer-wave"></div>
      <div className="w-full flex items-center justify-center space-x-12 py-8">
        <h1 className="font-display text-lg md:text-xl bg-gradient-to-r text-transparent bg-clip-text from-primary/80 to-primary">
          Alejandro Menor
        </h1>
        <Social />
      </div>
    </footer>
  );
}
