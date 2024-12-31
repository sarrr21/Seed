import Appointment from "../components/Appointment";
import Blog from "../components/Blog";
import BusinessHours from "../components/BusinessHours";
import ContactInfo from "../components/Contact";
import TestimonialSlider from "../components/Emonia";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Midea from "../components/midea";
import Products from "../components/Products";
import QRDisplay from "../components/QR";
import Services from "../components/Services";
import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <div className=" min-h-screen bg-black">
      <div className="max-w-3xl mx-auto min-h-screen" 
       style={{
        backgroundImage: "url('./image/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}>
        <div>
        <Slideshow/>
        <Midea />
        <ContactInfo />
        <Gallery />
        <Services />
        <Appointment />
        <Products />
        <TestimonialSlider />
        <BusinessHours />
        <Blog />
        <QRDisplay />
       
        </div>
        <Footer />
      </div>
    </div>
  )
}

