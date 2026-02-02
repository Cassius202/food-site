import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Aside from "./components/Aside";
import Hamburger from "./minor-components/Hamburger";

const App = () => {
  // Prop name as requested
  const [btmBarOpen, setBtmBarOpen] = useState(true);
  return (
    <div className="app bg-slate-100 overflow-x-hidden h-screen w-screen relative">
      <Toaster />
      <Hamburger btmBarOpen={btmBarOpen} setBtmBarOpen={setBtmBarOpen} />
      <Header />
      
      {/* Passing the prop to Aside */}
      <Aside btmBarOpen={btmBarOpen} setBtmBarOpen={setBtmBarOpen} />

      <main className="w-screen overflow-x-hidden min-h-screen relative bg-slate-100">
        <Hero />
        <Contact />
        <About />
        <Work />
        <Reviews />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default App;