import Construction from "@/components/Construction/Construction";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Construction />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
