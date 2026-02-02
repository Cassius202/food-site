'use client';

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoaderProps {
  children: React.ReactNode;
}

const Loader = ({ children }: LoaderProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      
      const timeout = setTimeout(() => setLoading(false), 3000);
      
      return () => {
        window.removeEventListener('load', handleComplete);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoaderFrame key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoaderFrame = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-primary font-bold text-6xl md:text-7xl tracking-wide"
      >
        FOODIE
      </motion.h1>
    </motion.div>
  );
};

export default Loader;