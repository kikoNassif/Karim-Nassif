/**
 * @copyright 2025 Karim Nassif
 * @license Apache-2.0
 */


/**
 * Compoents
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";

const App = () => {
  return (
    <>
     <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
      </main>
    </>
  )
}

export default App;