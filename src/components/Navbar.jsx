import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  function showMenu() {
    setShowMobile(true);
  }
  function hideMenu() {
    setShowMobile(false);
  }

  useEffect(() => {
    if (showMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobile]);

  return (
    <div className="w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-20 lg:px-32 bg-transparent ">
        <a href="#Header">
          <img src={assets.logo} alt="" className="w-14" />
        </a>
        <ul className="hidden md:flex gap-7 text-[#0F0B00]">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Features" className="cursor-pointer hover:text-gray-400">
            Features
          </a>
          <a href="#FAQ" className="cursor-pointer hover:text-gray-400">
            FAQs
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contact Us
          </a>
        </ul>
        <button className="hidden md:block border border-black  text-black py-2 px-4 rounded hover:bg-[#FDC73E] hover:text-white hover:border-none">
          Download Now
        </button>
        <img
          onClick={showMenu}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer "
          alt=""
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden ${
          showMobile ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={hideMenu}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={hideMenu}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={hideMenu}
            href="#Features"
            className="px-4 py-2 rounded-full inline-block"
          >
            Features
          </a>
          <a
            onClick={hideMenu}
            href="#FAQ"
            className="px-4 py-2 rounded-full inline-block"
          >
            FAQs
          </a>
          <a
            onClick={hideMenu}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
