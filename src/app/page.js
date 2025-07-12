import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Greeting from "@/components/Greeting";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Collab from "@/components/Collab";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <div className="greeting">
        <Greeting />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="collab">
        <Collab />
      </div>
    </>
  );
}
