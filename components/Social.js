import Github from "../public/assets/github.svg";
import Linkedin from "../public/assets/linkedin.svg";
import Twitter from "../public/assets/twitter.svg";

export default function Social() {
  return (
    <div className={`space-x-4 md:space-x-5 flex`}>
      <a
        href="https://github.com/AlexMenor"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github className={`relative z-10 fill-current text-white`} />
      </a>
      <a
        href="https://www.linkedin.com/in/alejandro-menor-molinero-a34595176"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Linkedin className={`relative z-10 fill-current text-white`} />
      </a>
      <a
        href="https://twitter.com/Alex4Menor"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter className={`relative z-10 fill-current text-white`} />
      </a>
    </div>
  );
}
