import React from "react";
import img from '../assets/night.jpg'
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUs";



const About=()=>{
    return(
        <>  
        <Header />
         <Hero 
        cName="hero-mid"
        HeroImage={img}
        title="About"
        />
        <AboutUS />
        <Footer />
        </>
        
    )
}

export default About;
