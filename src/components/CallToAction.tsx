import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import React from "react";
import toast from "react-hot-toast";

const CallToAction = () => {
  function handleNewsLetterSubscribe(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success('Thanks for subscribing', {
          style: {
            background: '#ffffff',
            color: '#18181b',
          },
          iconTheme: {
            primary: '#F9A01B',
            secondary:'#ffffff',
          },
    })
  }

  return (
    <section className="min-h-[40vh] py-20 mt-10 section isolate relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 -z-10 bg-zinc-950">
        <img 
          src={assets.images.ctaImage} 
          className="w-full h-full object-cover opacity-30 grayscale-40" 
          alt="Background"
        />
      </div>

      {/* Content Container */}
      <motion.div 
        className="max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Subscribe for updates from Foodie.co
        </h2>
        
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Join us on our journey at Foodie: we’re expanding our menu every day, 
          sharing new recipes, and creating flavors you’ll fall in love with.
        </p>

        {/* Styled Form */}
        <motion.form 
          onSubmit={(e) => {
            handleNewsLetterSubscribe(e)
          }}
          className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full max-w-lg mx-auto bg-white p-2 rounded-2xl sm:rounded-full shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input 
            type="email" 
            placeholder="Input your email"
            className="w-full rounded-full bg-transparent px-6 py-3 text-stone-800 outline-none placeholder:text-stone-400"
            required
          />
          <button 
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-xl sm:rounded-full text-white font-bold transition-all"
            style={{ backgroundColor: '#F9A01B' }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Subscribe
            </motion.span>
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default CallToAction;