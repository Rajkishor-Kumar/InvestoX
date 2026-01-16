import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./stats";

export default function HomePage(){
    return (
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        

        </>
    )
}