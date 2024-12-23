import BusinessHours from "./components/BusinessHours";
import ContactInfo from "./components/Contact";
import ContactForm from "./components/contact-form";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Products from "./components/Products";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import TestimonialSlider from "./components/emonia";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import QRDisplay from "./components/QR";
export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto min-h-screen" 
       style={{
        backgroundImage: "url('./image/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}>
        <div>
        <Header />
        <ContactInfo />
        <Gallery />
        <Services/>
        <Appointment />
        <Products />
        <TestimonialSlider />
        <BusinessHours />
        <Blog />
        <QRDisplay />
        <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  )
}

