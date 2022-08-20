import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import ReactProto from "./components/ReactPorto";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset / window.outerHeight;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <HeroSection />
      <ReactProto />
      <Timeline scroll={scrollPosition} />
      <Footer />
    </div>
  );
}

export default App;
