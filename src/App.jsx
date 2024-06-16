import Header from "./component/header/header";
import Hero from "./component/HERO/content/Content";
import Navbar from "./component/HERO/navbar/Navbar";
import Card from "./component/PORTOFOLIO/card/card";
import TitlePorto from "./component/PORTOFOLIO/title/title";
import Library from "./component/SKILL/card/card";
import TackStack from "./component/SKILL/tackStack/TackStack";
import Title from "./component/SKILL/title/title";
import "./index.css";

function App() {
  return (
    <div className="bg-background">
      <section id="main-container" className="text-center">
        <Header />
        <Hero />
        <Navbar />
      </section>
      <section
        id="skill"
        className="h-svh text-center mt-[100px] overflow-hidden"
      >
        <Title />
        <TackStack />
        <Library />
      </section>
      <section id="portofolio" className="h-svh mt-[-100px]">
        <TitlePorto />
        <Card />
      </section>
      <section id="contact" className="h-svh">
        contact
      </section>
    </div>
  );
}

export default App;
