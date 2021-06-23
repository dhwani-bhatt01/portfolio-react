import React from "react";
import HeroSection from "./_components/HeroSection/HeroSection";
import Services from "./_components/Services/Services";
import BlogSection from "./_components/BlogSection/BlogSection";
import MyStory from "./_components/MyStory/MyStory";
import ReachMe from "./_components/ReachMe/ReachMe";
import Skills from "./_components/Skills/Skills";
import ProjectsSection from "./_components/ProjectsSection/ProjectsSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <MyStory />
      <Services />
      <ProjectsSection />
      <Skills />
      <BlogSection />
      <ReachMe />
    </>
  );
};

export default Homepage;
