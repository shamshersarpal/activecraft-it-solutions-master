import AboutCompany from "@/components/AboutCompany";
import About from "@/components/AboutCompany";
import Achievements from "@/components/Achievements";
import ContactFormHome from "@/components/ContactFormHome";
import Feedback from "@/components/feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/> 
    <AboutCompany/>
    <RecentWork/>
    <Services/>
    <TestimonialSlider/>
    <Achievements/>
    <ContactFormHome/>
    <Footer/>
    </>
  );
}
