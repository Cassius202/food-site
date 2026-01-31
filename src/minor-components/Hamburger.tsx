import { Sidebar, SidebarClose } from 'lucide-react'
import {motion} from 'motion/react'

interface Props {
  btmBarOpen: boolean,
  setBtmBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Hamburger = ( {btmBarOpen, setBtmBarOpen}: Props ) => {
  return (
    <>
    {/* Sidebar Toggle Icon - Fixed Top Right for < 640px */}
      <motion.button 
        onClick={() => setBtmBarOpen(!btmBarOpen)}
        className="fixed top-2 right-5 z-100 sm:hidden bg-stone-100/20 text-stone-900 p-3 rounded-full group"
        whileTap={{ scale: 0.9 }}
      >
        {!btmBarOpen ? <Sidebar className='rotate-270' size={24} /> : <SidebarClose className='rotate-270' size={24} />}
        <span className='absolute text-sm whitespace-nowrap bg-slate-200 px-2 rounded -translate-x-22 translate-y-4 scale-0 origin-top-right transition-transform group-hover:scale-100'>
          {btmBarOpen ? "close navbar" : "open navbar"}
        </span>
      </motion.button>
    </>
  )
}

export default Hamburger