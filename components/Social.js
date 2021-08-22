import gh from "../public/assets/github.svg";
import ln from "../public/assets/linkedin.svg";
import tw from "../public/assets/twitter.svg";

export default function Social() {
  return (
    <div className="space-x-5 hidden lg:flex">
      <a
        href="https://github.com/AlexMenor"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="relative z-10 fill-current"
          src={gh.src}
          height="30"
          width="30"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alejandro-menor-molinero-a34595176"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="relative z-10 fill-current"
          src={ln.src}
          height="30"
          width="30"
        />
      </a>
      <a
        href="https://twitter.com/Alex4Menor"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="relative z-10 fill-current"
          src={tw.src}
          height="30"
          width="30"
        />
      </a>
    </div>
  );
}
