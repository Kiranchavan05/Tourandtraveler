import React from "react";
import Hero from "../components/Hero";
import img from '../assets/kailas1.jpeg'
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home=()=>{
    return(
        <>
        <Header />
        <Hero 
        cName="hero"
        HeroImage={img}
        title="Your Journey Your Story"
        text="choose your Fovourite Destination"
        buttonText="Travel plan"
        url='/'
        btnClass='show'
        />
        <Destination />
        <Trip />
        <Footer />
        
        </>
    )
}

export default Home;
