import React from "react";
import Hero from "../components/Hero";
import img from '../assets/12.jpg'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trip from "../components/Trip";


const Service=()=>{
    return(
        <>
        <Header />
         <Hero 
        cName="hero-mid"
        HeroImage={img}
        title="Service"
        />

        <Trip />
        <Footer />
        </>
    )
}

export default Service;
