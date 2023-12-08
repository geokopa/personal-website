import { About } from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";
// import Skills from "./components/pages/Skills";
import Testimonials from "./components/pages/Testimonial";
import Clients from "./components/pages/Clients";
import Timeline from "./components/pages/Timeline";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Clients />
      {/* <Skills /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
