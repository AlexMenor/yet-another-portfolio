import Github from '../public/assets/github.svg';
import Linkedin from '../public/assets/linkedin.svg';
import Twitter from '../public/assets/twitter.svg';

export default function Social({ className, mode = 'dark' }) {
  const links = [
    {
      href: 'https://github.com/AlexMenor',
      icon: Github,
    },
    {
      href: 'https://www.linkedin.com/in/alejandro-menor-molinero-a34595176',
      icon: Linkedin,
    },
    {
      href: 'https://twitter.com/Alex4Menor',
      icon: Twitter,
    },
  ];

  return (
    <div
      className={`space-x-4 md:space-x-5 flex ${
        mode === 'dark' ? 'text-white' : 'text-black'
      } ${className}`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: 'inherit' }}
        >
          <link.icon className={`relative z-10 fill-current`} />
        </a>
      ))}
    </div>
  );
}
