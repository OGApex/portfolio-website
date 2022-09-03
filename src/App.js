import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socials />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
