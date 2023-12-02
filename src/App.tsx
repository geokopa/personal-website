import { About } from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonial";
import Projects from "./components/Projects";

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
