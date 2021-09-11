import YearSummary from "../components/YearSummary";

import ideasFactory from "../public/assets/ideasfactory.jpeg";
import routeleo from "../public/assets/routeleo.jpeg";
import pantala from "../public/assets/pantala.jpg";
import bounsel from "../public/assets/bounsel.png";
import internxt from "../public/assets/internxt.jpeg";

import lightbulb from "../public/assets/lightbulb.png";
import backpack from "../public/assets/backpack.png";
import allnighter from "../public/assets/allnighter.png";
import circle from "../public/assets/circle.png";
import tech from "../public/assets/tech.png";

export default function Story() {
  const items = [
    {
      year: "2018",
      title: "An entrepreneur spark",
      paragraph:
        "After my first year of degree I realized that theory alone was not enough and that <strong>I needed to get real world experience ASAP.</strong> <br/><br/>So I started going to entrepreneurship events such as <a href='https://www.ideasfactory.es/'>Ideas Factory</a> where I met amazing people and <strong>got to put some of my ideas in practice.</strong> <br/><br/>One of them was <a href='https://github.com/alexmenor/heroes'>Héroes</a>, an app to fight insecurity in the streets.",
      picture: ideasFactory,
      icon: lightbulb,
    },
    {
      year: "2019",
      title: "Many adventures",
      paragraph:
        "Being around people better than me pushed me to learn a lot by myself. <strong>Web development became my #1 obsession</strong> and I got to apply these new skills in many projects.<br/> <br/>For example <a href='https://www.vodafonecampuslab.es/'>Vodafone Campus Lab</a>, in which our goal was to help palliate the loneliness of elderly people.<br/>Another project was <em>Kanuki</em>, a content platform where we provided the space and tools for the creators to share their talent with the world.<br/>To end the year, in <em>Routeleo</em> we worked to allow travellers on a budget get to the best places in the world for less money.<br/><br/> <strong>I learnt a lot working on all these projects with people from very different backgrounds.</strong>",
      picture: routeleo,
      icon: backpack,
    },
    {
      year: "2020",
      title: "My first job",
      paragraph:
        "My prior experience allowed me to get a position in an early-stage startup called <a href='https://pantala.es'>Pantala</a>, an unlimited closet as a service. In a world where fast fashion is a thing, we wanted our customers to have great clothes while being friendly to our planet.<br/><br/>We had three months to get a seed round and we needed to build a system from scratch that allowed us to operate. <br/><br/>After that, I remained working as a Full Stack Developer there. <strong>It was a very important experience for me as I had to take decisions and work under pressure many times.</strong>",
      picture: pantala,
      icon: allnighter,
    },
    {
      year: "2021",
      title: "Closing the circle",
      paragraph:
        "In the middle of my last year of college <strong>I got an offer to move to Valencia and join <a href='https://bounsel.com'>Bounsel</a></strong>, an ambitious project that aims to end every pain in contract management with an all-in-one platform.<br/><br/>I got to <strong>expand my technical skills</strong> as it is a hard product to build, and had the luck of working with brilliant people.<br/><br/><strong>I also finished my degree</strong>, having <a href='https://github.com/alexmenor/heroes'>Héroes</a> as the final project.",
      picture: bounsel,
      icon: circle,
    },
    {
      year: "",
      title: "What am I doing now?",
      paragraph:
        "I've always believed that <strong>privacy should be in the core of every product.</strong> Software built to steal our attention and that we pay with our data is harmful. <br/><br/>\
        For that, I'm so happy to work at <a href='https://internxt.com'>Internxt</a>, where we build <strong>privacy-first software in which you can trust</strong> and that serves you (and not the other way around). <br/><br/>\
        I'm also investing time <strong>learning about complementary disciplines to mine,</strong> such as Bussiness and Design.",
      picture: internxt,
      icon: tech,
    },
  ];
  return (
    <div
      className="pt-16 mb-8 lg:pt-32 lg:mb-16 flex flex-col space-y-12"
      id="story"
    >
      {items.map((item) => (
        <YearSummary {...item}></YearSummary>
      ))}
    </div>
  );
}
