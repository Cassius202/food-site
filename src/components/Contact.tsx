import { ArrowRight, LocationEditIcon, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"; // Added for animations
import { uberEatsLink } from "../assets/assets";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  const [location, setLocation] = useState('');

  return (
    <section id="contact" className="z-10 relative section bg-slate-50 min-h-[60vh] my-8 py-20 px-6"> {/* Added px-6 for mobile breathing room */}
      <motion.h1 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Order Now
      </motion.h1>
      <motion.p 
        className="subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Get your order in minutes with door dash, our official partner
      </motion.p>

      <form onSubmit={handleSubmit} className="mt-10 lg:mt-15 flex gap-y-5 flex-col items-center">
        
        {/* Input 1 - Animation added + w-full on small screens */}
        <motion.div 
          className="w-full sm:w-100 lg:w-120 p-2 h-14 border rounded-full flex border-stone-500 focus-within:border-primary items-center bg-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-full w-full relative group">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              <User className="text-stone-400 group-focus-within:text-primary transition-colors" />
            </span>
            <input 
              type="text" 
              className="h-full w-full px-11 outline-0 border-0 bg-transparent" 
              placeholder="What is your name" 
            />
          </div>
        </motion.div>
        
        {/* Input 2 - Animation added + w-full on small screens */}
        <motion.div 
          className="w-full sm:w-100 lg:w-120 p-2 h-14 border rounded-full flex border-stone-500 focus-within:border-primary items-center bg-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-full w-full relative group">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
              <LocationEditIcon className="text-stone-400 group-focus-within:text-primary transition-colors" />
            </span>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-full w-full px-11 outline-0 border-0 bg-transparent" 
              placeholder="input your location" 
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-primary text-white h-full aspect-square grid place-content-center hover:scale-105 active:scale-95 transition-transform">
              <ArrowRight />
            </button>
          </div>
        </motion.div>

        <motion.button 
          className="bg-stone-950 text-white px-5 py-3 rounded-xl hover:text-purple-200 mt-5 flex items-center justify-center gap-2 w-full sm:w-auto transition-all"
          onClick={() => window.open(uberEatsLink, '_blank', 'noreferrer')}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          Or continue with Uber Eats <ArrowRight size={18} />
        </motion.button>
      </form>

    </section>
  )
}

export default Contact