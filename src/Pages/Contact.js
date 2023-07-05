import React from "react";
import Hero from "../components/Hero";
import img from '../assets/img3.webp'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactform from "../components/ContactForm";


const Contact=()=>{
    return(
        <>
        <Header />
        <Hero 
         cName="hero-mid"
         HeroImage={img}
         title="Contact"
        />

        <Contactform />
        <Footer />
        </>
    )
}

export default Contact;
