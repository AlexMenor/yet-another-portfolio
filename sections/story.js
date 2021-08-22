import YearSummary from "../components/YearSummary";

import ideasFactory from "../public/assets/ideasfactory.jpeg";
import routeleo from "../public/assets/routeleo.jpeg";
import pantala from "../public/assets/pantala.jpg";
import bounsel from "../public/assets/bounsel.png";

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
        "Being around people better than me pushed me to learn a lot by myself. Web development became my #1 obsession.<br/><br/>I also got to apply these new skills to many projects: <br/>Our goal in Vodafone Campus Lab was to help palliate the loneliness of elderly people.<br/>Kanuki was a content platform, we provide the space and tools so the creators can share their talent with the world.<br/>In Routeleo we fulfill the dream of travellers on a budget. Discover the way to get more for less and be able to get to the best places in the world.",
      picture: routeleo,
    },
    {
      year: "2020",
      title: "My first job",
      paragraph:
        "My prior experience allowed me to get a position in an early-stage startup called Pantala, which is an unlimited closet as a service. <br/>In a world where fast fashion is a thing, we wanted our customers to have choice and joy for what they wear while being friendly to our planet.<br/><br/>We had three months to get a seed round and we needed to build a system from scratch that allowed us operate. <br/><br/>After that, I remained working as Full Stack Developer.",
      picture: pantala,
    },
    {
      year: "2021",
      title: "Closing the circle",
      paragraph:
        "In the middle of my last year in college I got an offer to move to Valencia and join Bounsel, an ambitious project that aims to end every pain in contract management with an all-in-one platform.<br/><br/>I also finished my degree, having “Héroes” as the final project. <br/><br/>Finally, I decided to join another startup called Internxt, that makes great privacy-first software.",
      picture: bounsel,
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
