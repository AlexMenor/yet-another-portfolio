import Social from './Social';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black/90 to-black">
      <div className="footer-wave"></div>
      <div className="w-full flex items-center justify-center py-8">
        <p className="mr-5 text-white text-sm md:text-base">
          You can find me on:
        </p>
        <Social />
      </div>
    </footer>
  );
}
