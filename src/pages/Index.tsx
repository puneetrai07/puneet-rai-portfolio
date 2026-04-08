import Navigation from "@/components/Navigation";
import Landing from "@/components/Landing";
import SystemMap from "@/components/SystemMap";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Landing />
      <SystemMap />
      <CaseStudy />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
