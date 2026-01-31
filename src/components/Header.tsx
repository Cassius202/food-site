import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Navigation from "../minor-components/Navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const body = document.body;
      const html = document.documentElement;
      const fullHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const windowHeight = window.innerHeight;

      setScrolled(window.scrollY + 50 > (fullHeight - windowHeight));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen z-40 items-center h-16 py-2 px-3 sm:px-4 md:px-6 lg:px-10 max-sm:hidden">
      <div className="w-full h-full flex items-center justify-between bg-stone-50/10 backdrop-blur rounded-full">
        <div className="logo flex items-center">
          <div className="foodie-logo inline-block h-5 max-sm:h-6 ml-6">
            <img
              src={assets.logos.foodie}
              alt="Foodie Logo "
              className="max-sm:hidden h-full"
            />
            <img
              src={assets.logos.food}
              alt="Foodie Logo"
              className="sm:hidden h-full"
            />
          </div>
        </div>
        <Navigation scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
