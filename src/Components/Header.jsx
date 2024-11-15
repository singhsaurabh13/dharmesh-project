import { useState, useEffect } from 'react';
import { Menus } from "../utils.js";
import Logo from "../assets/logo2.png";


import DesktopMenu from './DekstopMenu.jsx';
import MobMenu from './MobMenu.jsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <header
          className={`h-16 text-[16px] fixed inset-x-0 flex-center bg-[#800000] z-[999] transition-all duration-300 ${
            isScrolled ? 'top-0 backdrop-blur-md bg-opacity-70' : 'top-[32px]'
          }`}
        >
          <nav className="flex-center-between w-full max-w-7xl mx-auto">
            <div className="flex-center gap-x-3 z-[999] relative">
              <img src={Logo} alt="Logo" className="w-24" />
            </div>

            <ul className="gap-x-1 lg:flex-center ">  
              {/* hidden   menu items for desktop view */} 

              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>

            <div className="flex-center gap-x-5">
              <div className="lg:hidden">
                <MobMenu Menus={Menus} />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
