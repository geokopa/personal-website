import { About } from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";
import Skills from "./components/pages/Skills";
import Testimonials from "./components/pages/Testimonial";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
