import { ShoppingCart } from "lucide-react"
import { navLinks } from "../assets/assets"
import { cn } from "../utils/cn"

const Navigation = ( {scrolled} : {scrolled: boolean} ) => {
  return (
    <nav className="flex items-center gap-4 px-3">
      <menu className={cn("flex px-2 text-slate-950 text-sm gap-x-6", scrolled && 'text-slate-50')}>
        {navLinks.map((link, index) => (
          <li key={index} className="group relative">
            <a href={`#${link.toLowerCase()}`}>
              {link}
            </a>
            <span className={cn("absolute top-[105%] left-0 w-full h-0.75 rounded bg-slate-900 transition-transform scale-0 group-hover:scale-100 duration-300", scrolled && 'bg-white')}></span>
          </li>
        ))}
      </menu>
      <ShoppingCart size={18} className={cn("max-md:hidden max-lg:mr-4 hover:text-slate-500", scrolled && 'text-slate-50')} />
      <button className={cn("text-sm bg-white rounded-full hidden lg:block whitespace-nowrap px-3 py-1.5")} >
        Book Now
      </button>
    </nav>
  )
}

export default Navigation