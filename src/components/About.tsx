import { Play } from "lucide-react";
import { assets, videoLink } from "../assets/assets";
import { motion } from "framer-motion";
import MarkdownText from "./Markdown";

const About = () => {

  return (
    <section className="section w-full overflow-x-hidden py-16" id="about">
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-10">
        
        {/* Left Side: Image with Decorative Shape */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Orange Background Shape */}
          <div className="absolute -left-20 w-100 h-100 bg-primary rounded-full -z-10 opacity-90 hidden lg:block" 
               style={{ backgroundColor: '#F9A01B' }} />
          
          <img 
            src={assets.images.aboutBanner} 
            alt="Healthy Balanced Diet Bowl" 
            className="w-full max-w-125 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          className="about-text px-6 sm:px-10 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2" style={{ color: '#F9A01B' }}>
            About
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-stone-800 leading-tight mb-6">
            Food Is An Important <br /> Part Of A Balanced Diet
          </h2>
          
          <div className="space-y-4 text-stone-600 leading-relaxed max-w-lg">
            <p>
              <MarkdownText text={'At the heart of a healthy lifestyle is the belief that **food should be as vibrant as it is nourishing**. We focus on whole, plant-forward ingredients that provide a perfect harmony of complex carbohydrates, lean proteins, and healthy fats.'} />
            </p>
            <p>
              <MarkdownText text='Every bowl is crafted to fuel your body and delight your senses. From crisp, farm-fresh greens to nutrient-dense superfoods, we ensure that eating well is never a compromise on flavor or satisfaction.' />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10">
            {/* Learn More Button */}
            <motion.button 
              className="bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg"
              style={{ backgroundColor: '#F9A01B' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>

            {/* Watch Video Button */}
            <motion.a 
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-bold text-stone-800 group"
              whileHover={{ x: 5 }}
            >
              <div className="bg-stone-700 p-3 rounded-full text-white group-hover:bg-stone-900 transition-colors">
                <Play fill="white" size={20} />
              </div>
              Watch Video
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;