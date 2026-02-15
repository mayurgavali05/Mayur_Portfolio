import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Patent from './components/Patent';
import Certifications from './components/Certifications';
import PhotoResume from './components/PhotoResume';
import GuestLectures from './components/GuestLectures';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-neon-blue/30 selection:text-neon-blue">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Patent />
      <Certifications />
      <GuestLectures />
      <PhotoResume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
