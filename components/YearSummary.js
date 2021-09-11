import Image from "next/image";

export default function YearSummary({ year, title, picture, paragraph, icon }) {
  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-32 2xl:px-52">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-display">{year}</p>
          <h2
            className="font-display text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <img src={icon.src} style={{ height: "100px", width: "auto" }}></img>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-5">
        <div className="flex-1">
          <Image className="rounded w-full" src={picture} />
        </div>
        <p
          className="mt-10 lg:mt-0 lg:ml-10 lg:text-lg flex-1 text-justify"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>
    </div>
  );
}
