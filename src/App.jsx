import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Courses from './components/Courses.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Performances from './components/Performances.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Courses />
        <About />
        <Gallery />
        <Performances />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
