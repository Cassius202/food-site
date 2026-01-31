import { useEffect, useState } from "react";
import { navLinksAlternate } from "../assets/assets"
import { cn } from "../utils/cn"
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@uidotdev/usehooks";

const Aside = ({btmBarOpen, setBtmBarOpen}: {btmBarOpen: boolean, setBtmBarOpen: React.Dispatch<React.SetStateAction<boolean>>} ) => {
  const sm = useMediaQuery('(max-width: 640px)');

const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
      // Always show at the very top
      setBtmBarOpen(true);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling Down
      setBtmBarOpen(false);
    } else {
      // Scrolling Up
      setBtmBarOpen(true);
    }

    // Update the position for the next scroll event
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, setBtmBarOpen]); 

  return (
      <AnimatePresence>
      {btmBarOpen && sm && <motion.nav
      initial={{y: "100%"}}
      animate={{y: "0"}}
      exit={{y: "100%"}}
      transition={{duration: 0.4}}
      className="fixed h-13 bg-stone-950 rounded-t-2xl backdrop-blur backdrop-grayscale-50 flex items-center z-50 bottom-0 left-0 w-screen px-6">
        <menu className="flex justify-between w-full items-center px-4">
          {
            navLinksAlternate.map((item, index) => {
              return <li key={index} className={cn("text-white")}>
                <a className="flex flex-col gap-px items-center hover:text-primary cursor-pointer" href={`#$`}>
                  <div className="text-sm">{item.icon}</div>
                  <span className="text-xs">{item.name}</span>
                </a>
              </li>
            })
          }
        </menu>
      </motion.nav> }
      </AnimatePresence>
  )
}

export default Aside