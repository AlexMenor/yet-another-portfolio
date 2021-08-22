import frontPic from "../public/assets/front-stack.png";
import backPic from "../public/assets/back-stack.png";
import dbPic from "../public/assets/db-stack.png";
import cloudPic from "../public/assets/cloud-stack.png";

import SubStack from "../components/SubStack";

export default function Stack() {
  const subStacks = [
    {
      name: "Frontend",
      description:
        "I've worked a lot with Vue and React as SPA's and server rendered. I also like to develop mobile apps, for what I've used React Native and Flutter. <br/><br/> \
				Strong HTML/CSS/JS knowledge is also important for me, and for medium and large projects I usually setup Typescript. <br/>",
      picture: frontPic,
    },
    {
      name: "Backend",
      description:
        "In the server side of things, robust and clean code is the most important thing for me, applying DDD & clean architecture when it's necessary. <br/><br/> \
				Language-wise I like Typescript a lot but I've also worked with Python and Go. In all of them I've used opinionated and unopinionated frameworks.",
      picture: backPic,
    },
    {
      name: "Databases",
      description:
        "I've been in projects of all sorts with different data needs. PostgreSQL has never let me down but I've also used MongoDB for some domains with no relational data. <br/><br/>\
				Redis has also been an important tool in my belt for caching and scaling websockets, for example.",
      picture: dbPic,
    },
    {
      name: "Cloud",
      description:
        "I try not to make things hard at deployment time if it's not necessary, but I do consider important to have a proper CI/CD pipeline for most projects. Github actions is my favourite for this\
				but I've used CircleCI and travis too. <br/><br/>In many of the projects I've worked in I had to configure the infraestructure in cloud providers such as AWS or GCP. When maximum \
				flexibility and scalability is required, Kubernetes has been helpful for me.",
      picture: cloudPic,
    },
  ];
  return (
    <div
      className="container mx-auto lg:px-52 px-5 mt-8 pt-8 mb-8 lg:mt-16 lg:pt-16 lg:mb-16"
      id="stack"
    >
      <h1 className="font-display text-5xl">My Stack</h1>
      <p className="text-xl my-5">
        I've always tried to be stack agnostic and spend more time learning
        about fundamentals and patterns that make great applications.
        <br />
        <br /> These are the technologies I have more experience with, but I
        don't advocate for specific ones and choose the right tool for the work
        instead.
      </p>
      <div className="space-y-12">
        {subStacks.map((s, i) => (
          <SubStack {...s} inverse={i % 2 != 0}></SubStack>
        ))}
      </div>
    </div>
  );
}
