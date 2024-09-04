import React from "react";
import { Link } from "react-scroll";
import Logo from "../components/images/WanderMe Logo.png";

const Navbar = ({ onOpenModal }) => {
  return (
    <header className="fixed inset-x-0 top-3 z-30 mx-auto w-[90%] rounded-full max-w-screen py-3 shadow backdrop-blur-sm backdrop-saturate-150 bg-white/90 md:top-2 md:rounded-3xl md:max-w-screen-lg lg:max-w-screen-2xl">
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img className="h-10 w-15 " src={Logo} alt="PeakVoyage Logo" />
              <p className="ml-1    font-montserrat font-bold  md:text-xl justify-center">
                | Peak<span className="text-indigo-500">Voyage</span>
              </p>
            </a>
          </div>
          <div className="hidden lg:flex md:items-center md:justify-center md:gap-5 cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-blue-400 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="destinations"
              smooth={true}
              duration={500}
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-blue-400 hover:text-white"
            >
              Destinations
            </Link>
            <Link
              to="deals"
              smooth={true}
              duration={500}
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-blue-400 hover:text-white"
            >
              Deals & Offers
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-blue-400 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3 md:gap-4">
            <button
              onClick={onOpenModal}
              className="items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              Sign in
            </button>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
