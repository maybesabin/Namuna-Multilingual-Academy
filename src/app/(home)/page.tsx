"use client"

import AboutUs from "@/app/(home)/components/AboutUs";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Container from "@/components/Container";
import PrincipalMessage from "./components/PrincipalMessage";
import Statistics from "./components/Statistics";
import NewsContainer from "./components/NewsContainer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start lg:gap-24 md:gap-18 gap-10">

      <Hero />
      <Container>
        <FeaturesSection />
        {/* <AboutUs /> */}
        <PrincipalMessage />
        <Statistics />
        <NewsContainer />
      </Container>
    </div >
  );
}
