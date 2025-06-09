import "./App.css";
import SplashCursor from "./Components/SplashCursor/SplashCursor";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import WorkExperience from "./Sections/WorkExperience/WorkExperience";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <div className="app-container">
      <div className="background-container">
        <SplashCursor />
      </div>
      <div className="content-container">
        <Navbar />
      </div>

      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;
