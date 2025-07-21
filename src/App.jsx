/**
 * @copyright 2025 Karim Nassif
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { ReactLenis, useLenis } from 'lenis/react';


/**
 * Compoents
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
     <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App;