import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import Background from "../minor-components/Background";

const Hero = () => {
  return (
    <section className="section w-full relative" id="home">
      <Background />
      <div className="foodie-logo inline-block h-5 max-sm:h-8 absolute z-10 left-1/2 -translate-x-1/2 top-4 bg-stone-900  p-2 px-5 rounded-lg sm:hidden">
          <img
            src={assets.logos.foodie}
            alt="Foodie Logo"
            className="h-full top-0 left-0 "
          />
      </div>

      <div className="relative flex flex-col lg:grid grid-cols-[42%_58%] xl:grid-cols-[46%_55%] pt-16 max-sm:pt-4">
        
        {/* Text Content - Fly in from left */}
        <motion.div
          className="hero-text sm:px-10 max-lg:flex flex-col items-center z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="title lg:text-left max-md:text-stone-900 mb-4 lg:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Favourite Food Delivered Hot & Fresh
          </motion.h1>

          <motion.p
            className="subtitle lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Healthy swither chefs do all the prep work, like peeling, chopping
            and marinating, so you can eat a proper meal
          </motion.p>

          <motion.button
            className="lg:bg-primary bg-stone-950 text-white flex items-center gap-2 px-4 mt-4 lg:mt-8 py-2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileTap={{ scale: 0.95 }}
          >
            Order now <ArrowRight />
          </motion.button>
        </motion.div>

        {/* Image - Fly in from right */}
        <motion.div
          className="dishImage w-full max-lg:px-20 lg:px-2 lg:scale-125 scale-110 max-lg:-translate-y-2 select-none pointer-events-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src={assets.images.homeBanner} className="rotate-image" alt="Food Banner " />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
