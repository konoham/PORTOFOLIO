import CardPlay from "./component/CARDPLAY/cardPlay";
import Form from "./component/CONTACT/form/form";
import Header from "./component/header/header";
import Hero from "./component/HERO/content/Content";
import Navbar from "./component/HERO/navbar/Navbar";
import Card from "./component/SKILL/card/card";
import TackStack from "./component/SKILL/tackStack/TackStack";
import Title from "./component/title/title";
import "./index.css";

function App() {
  return (
    <div className="bg-background overflow-x-hidden">
      <section id="main-container" className="text-center">
        <Header />
        <Hero />
        <Navbar />
      </section>
      <section id="skill" className=" h-fit text-center mt-[100px] skill">
        <Title title={"skill & PORTOFOLIO"} id={"title"} />
        <TackStack />
        <Card />
      </section>
      {/* <section id="portofolio" className="h-svh mt-[-100px]">
        <Title title={"portofolio"} id={"Title-portofolio"} />
        <CardPlay />
      </section> */}
      <section id="contact" className="h-svh ">
        <Title title={"contact"} id={"Title-contact"} />
        <Form />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[15%] left-[75%]"
        >
          <path
            fill="#686D76"
            d="M35.6,-43C44.3,-35.1,48.4,-22.2,54.7,-6.7C61,8.8,69.5,26.9,63.6,36.3C57.7,45.6,37.4,46.3,20.2,50.3C3,54.3,-11.1,61.7,-17.6,56C-24.1,50.3,-23,31.5,-30.1,18C-37.2,4.5,-52.4,-3.7,-56.3,-14.8C-60.2,-25.9,-52.7,-39.9,-41.4,-47.4C-30.1,-54.8,-15.1,-55.7,-0.8,-54.7C13.4,-53.8,26.8,-50.9,35.6,-43Z"
            transform="translate(100 100)"
          />
        </svg>
      </section>
    </div>
  );
}

export default App;
