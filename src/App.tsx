import { MotionConfig } from "framer-motion";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { About } from "./components/sections/About";
import { Facilities } from "./components/sections/Facilities";
import { Hero } from "./components/sections/Hero";
import { LocationContact } from "./components/sections/LocationContact";
import { Promotion } from "./components/sections/Promotion";
import { SignatureMenu } from "./components/sections/SignatureMenu";
import { Testimonials } from "./components/sections/Testimonials";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <SignatureMenu />
        <Facilities />
        <Promotion />
        <LocationContact />
        <Testimonials />
      </main>

      <Footer />
    </MotionConfig>
  );
}
