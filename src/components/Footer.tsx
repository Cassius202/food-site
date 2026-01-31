import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 flex flex-col items-center border-t pt-2 border-zinc-700 max-sm:pb-12">
      <div className="w-full py-6 flex flex-col lg:flex-row justify-center items-center gap-6 px-6">
        
        {/* Mobile-Only Logo (Visible below 640px) */}
        <div className="sm:hidden mb-2">
          <img src={assets.logos.foodie} alt="Foodie Logo" className="h-8 w-auto" />
        </div>

        {/* Responsive Card: Row on Large, Column on Small */}
        <div 
          className="w-full text-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          style={{ backgroundColor: '#F9A01B' }}
        >
          <div>
            <h2 className="text-lg font-bold">Ready to get started?</h2>
            <p className="text-sm opacity-90">Order now and enjoy delicious meals delivered to your door.</p>
          </div>
          
          <button className="bg-white text-stone-900 font-bold px-6 py-2 rounded-lg flex items-center whitespace-nowrap">
            Order Now <ArrowRight className="ml-2" size={18} />
          </button>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-sm text-stone-500 min-w-fit whitespace-nowrap">
          &copy; {new Date().getFullYear()} Foodie.co All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;