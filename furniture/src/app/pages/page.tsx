
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Scroll from "../components/Scroll";

const Homepage = () => {
  return (
    <div className="w-full h-full bg-[#ebebeb] overflow-hidden">
  
      <Nav />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Homepage;
