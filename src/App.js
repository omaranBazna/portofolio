import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import ReactProto from "./components/ReactPorto";
import Email from "./components/Email";
import PopUpSucc from "./components/PopUpSucc";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [popUpSuc, setPopUpSuc] = useState(false);
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
      {popUpSuc && <PopUpSucc setPop={setPopUpSuc} />}
      {showEmailForm && (
        <Email setShow={setShowEmailForm} setPopSuc={setPopUpSuc} />
      )}
      <Footer setShow={setShowEmailForm} />
    </div>
  );
}

export default App;
