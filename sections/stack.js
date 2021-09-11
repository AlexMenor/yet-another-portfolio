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
        "I've worked a lot with <a href='https://vuejs.org'>Vue</a> and <a href='https://reactjs.org'>React</a> as SPA's and server rendered. I also like to develop mobile apps, for what I've used <a href='https://reactnative.dev'>React Native</a> and <a href='https://flutter.dev'>Flutter.</a> <br/><br/> \
				Strong <strong>HTML/CSS/JS knowledge is also important to me</strong>, and for medium and large projects I usually setup <a href='https://www.typescriptlang.org/'>Typescript.</a> <br/>",
      picture: frontPic,
    },
    {
      name: "Backend",
      description:
        "In the server side of things, <strong>robust and clean code</strong> is the main thing for me, applying <em>Domain Driven Design & Clean Architecture</em> when it's necessary. <br/><br/> \
				Language-wise I like <a href='https://www.typescriptlang.org/'>Typescript</a> a lot but I've also worked with <a href='https://www.python.org/'>Python</a> and <a href='https://www.golang.org/'>Go.</a> In all of them I've used opinionated and unopinionated frameworks.",
      picture: backPic,
    },
    {
      name: "Databases",
      description:
        "I've been in projects of all sorts with different data needs. <a href='https://www.postgresql.org/'>PostgreSQL</a> has never let me down but I've also used <a href='https://www.mongodb.com/'>MongoDB</a> for some domains with no relational data. <br/><br/>\
				<a href='https://redis.io/'>Redis</a> has also been an important tool in my belt for caching and scaling <em>websockets</em>, for example.",
      picture: dbPic,
    },
    {
      name: "Cloud",
      description:
        "I try not to make things hard at deployment time if it's not necessary, but I do consider important to have a proper <em>CI/CD pipeline</em> for most projects. <a href='https://github.com/actions'>Github Actions</a> is my favourite for this\
				but I've used <a href='https://circleci.com/'>CircleCI</a> and <a href='https://travis-ci.org/'>Travis</a> too. <br/><br/>In many of the projects I've worked in I had to configure the infraestructure in cloud providers such as <a href='https://aws.amazon.com/'>AWS</a> or <a href='https://cloud.google.com/'>GCP</a>. When maximum \
				flexibility and scalability is required, <a href='https://kubernetes.io'>Kubernetes</a> has been helpful for me.",
      picture: cloudPic,
    },
  ];
  return (
    <div
      className="container mx-auto lg:px-12 xl:px-52 px-5 mt-8 pt-8 mb-8 lg:mt-16 lg:pt-16 lg:mb-16"
      id="stack"
    >
      <h1 className="font-display text-3xl md:text-5xl">My Stack</h1>
      <p className="md:text-xl my-5 md:my-10 text-justify">
        I've always tried to be stack agnostic and spend more time learning
        about fundamentals and patterns that make great applications.
        <br />
        <br />{" "}
        <strong>
          These are the technologies I have more experience with, but I don't
          advocate for specific ones and choose the right tool for the job
          instead.
        </strong>
      </p>
      <div className="space-y-12">
        {subStacks.map((s, i) => (
          <SubStack {...s} inverse={i % 2 != 0}></SubStack>
        ))}
      </div>
    </div>
  );
}
