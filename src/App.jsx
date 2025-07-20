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

const App = () => {
  return (
    <>
     <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App;