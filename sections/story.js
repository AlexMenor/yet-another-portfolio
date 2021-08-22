import YearSummary from "../components/YearSummary";

import ideasFactory from "../public/assets/ideasfactory.jpeg";
import routeleo from "../public/assets/routeleo.jpeg";
import pantala from "../public/assets/pantala.jpg";
import bounsel from "../public/assets/bounsel.png";
import internxt from "../public/assets/internxt.jpeg";

export default function Story() {
  const items = [
    {
      year: "2018",
      title: "An entrepreneur spark",
      paragraph:
        "After my first year of degree I realized that theory alone was not enough and that I needed to get real world experience ASAP. <br/><br/>So I started going to entrepreneurship events such as “Ideas Factory” where I met amazing people and got to put some of my ideas in practice. <br/><br/>One of them was “Héroes”, an app to fight insecurity in the streets.",
      picture: ideasFactory,
    },
    {
      year: "2019",
      title: "Many adventures",
      paragraph:
      "Being around people better than me pushed me to learn a lot by myself. Web development became my #1 obsession and I got to apply these new skills in many projects.<br/> <br/>For example Vodafone Campus Lab, in which our goal was to help palliate the loneliness of elderly people.<br/>Other project was Kanuki, a content platform where we provided the space and tools for the creators to share their talent with the world.<br/>To end the year, in Routeleo we worked to allow travellers on a budget get to the best places in the world for less money.<br/><br/> I learnt a lot working on all these projects with people from very different backgrounds.",
      picture: routeleo,
    },
    {
      year: "2020",
      title: "My first job",
      paragraph:
        "My prior experience allowed me to get a position in an early-stage startup called Pantala, an unlimited closet as a service. In a world where fast fashion is a thing, we wanted our customers to have great clothes while being friendly to our planet.<br/><br/>We had three months to get a seed round and we needed to build a system from scratch that allowed us to operate. <br/><br/>After that, I remained working as a Full Stack Developer there. It was a very important experience for me as I had to take decisions and work under pressure many times.",
      picture: pantala,
    },
    {
      year: "2021",
      title: "Closing the circle",
      paragraph:
        "In the middle of my last year of college I got an offer to move to Valencia and join Bounsel, an ambitious project that aims to end every pain in contract management with an all-in-one platform.<br/><br/>I got to expand my technical skills a lot as it is a hard product to build, and had the luck of working with brilliant people.<br/><br/>I also finished my degree, having “Héroes” as the final project.",
      picture: bounsel,
    },
    {
      year: "",
      title: "What am I doing now?",
      paragraph:
        "I've always believed that privacy should be in the core of every product. Software built to steal our attention and that we pay with our data is harmful. <br/><br/>\
        For that, I'm so happy to work at Internxt, where we build privacy-first software in which you can trust and that serves you (and not the other way around). <br/><br/>\
        I'm also investing time learning about complementary disciplines to mine such as Bussiness and Design.",
      picture: internxt,
    },
  ];
  return (
    <div
      className="mt-8 pt-8 mb-8 lg:mt-16 lg:pt-16 lg:mb-16 flex flex-col space-y-12 lg:space-y-16"
      id="story"
    >
      {items.map((item) => (
        <YearSummary {...item}></YearSummary>
      ))}
    </div>
  );
}
