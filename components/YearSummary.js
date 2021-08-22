import Image from "next/image";

export default function YearSummary({ year, title, picture, paragraph }) {
  return (
    <div className="container mx-auto lg:px-52 px-5">
      <p className="font-display">{year}</p>
      <h2
        className="font-display text-3xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <div className="flex-1">
          <Image className="rounded w-full" src={picture} />
        </div>
        <p
          className="mt-10 lg:mt-0 lg:ml-10 md:text-xl flex-1 text-justify"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>
    </div>
  );
}
