import { motion } from "framer-motion";
import { steps } from "../assets/assets";
import { BsInstagram } from "react-icons/bs";
const Work = () => {

  return (
    <section className="section w-full py-20 bg-white" id="services">
      <div className="container px-6 mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            className="text-primary font-bold uppercase tracking-widest text-sm"
            style={{ color: '#F9A01B' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            services
          </motion.span>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-extrabold text-stone-800 mt-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            className="text-stone-500 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We've simplified healthy eating. Follow these three easy steps to get 
            premium, nutritious meals delivered without the stress of meal prep.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white lg:p-5 transition-colors hover:border-primary p-8 rounded-3xl shadow-xl flex flex-col items-center text-center border border-stone-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon Circle */}
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner"
                style={{ backgroundColor: '#F9A01B' }}
              >
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                {step.title}
              </h3>
              
              <p className="text-stone-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}

          <motion.div
              className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center transition-colors hover:border-primary lg:hidden text-center border border-stone-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon Circle */}
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner"
                style={{ backgroundColor: '#F9A01B' }}
              >
                <BsInstagram size={25} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                Contact us
              </h3>
              
              <p className="text-stone-500 leading-relaxed">
                reach us and place an order easily on instagram. Your interest is our priority
              </p>
            </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Work;