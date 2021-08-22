import Image from "next/image";

export default function SubStack({
  name,
  description,
  picture,
  inverse = false,
}) {
  return (
    <div
      className={`flex items-center flex-col md:flex-row ${
        inverse ? "md:flex-row-reverse" : ""
      } mt-10`}
    >
      <div className="flex-1">
        <h2 className={`text-xl md:text-3xl font-display mb-5`}>{name}</h2>
        <p
          className="md:text-xl text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div
        className={`${
          inverse ? "md:mr-14 lg:mr-28" : "md:ml-14 lg:ml-28"
        } flex-1 stack-blobs mt-5 md:mt-0`}
      >
        <Image className="w-full" src={picture} />
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .stack-blobs {
            max-width: 30%;
          }
        }
        .stack-blobs {
          max-width: 90%;
        }
      `}</style>
    </div>
  );
}
