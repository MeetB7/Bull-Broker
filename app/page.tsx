import About from "@/components/About";
import Footer from "@/components/Footer";
import { Landing } from "@/components/Landing";
import Nav from "@/components/Nav";
import React from "react";
import Testimonial from "@/components/Testimonial";
import Features from "@/components/Features";
import Searchbar from "@/components/Searchbar";

const page = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Nav/>
      <div className="flex-1">
        <Landing/>
        <Features/>
        <Testimonial/>
        <About/>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
