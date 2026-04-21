import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed nav */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <Projects />

      <div className="section-divider" />
      <Skills />

      <div className="section-divider" />
      <Experience />

      <div className="section-divider" />
      <Achievements />

      <div className="section-divider" />
      <Contact />

      <Footer />
    </main>
  );
}
