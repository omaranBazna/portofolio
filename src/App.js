import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import ReactProto from "./components/ReactPorto";
import Email from "./components/Email";
import PopUp from "./components/PopUp";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
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
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      {/*
      
    <ReactProto scroll={scrollPosition} />
      <Timeline scroll={scrollPosition} />
  */}
      <PopUp />
      {showEmailForm && <Email setShow={setShowEmailForm} />}
      <Footer setShow={setShowEmailForm} />
    </div>
  );
}

export default App;
