import React, { useState, useEffect } from "react";
import Logo from "../components/images/WanderMe Logo.png";
import Modal from "../components/Modal"; // Import the Modal component
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show the navbar if at the top of the page
      if (currentScrollPos === 0) {
        setShowNavbar(true);
      } else {
        // Hide the navbar when scrolling down, show when scrolling up
        if (prevScrollPos > currentScrollPos) {
          setShowNavbar(true); // Scrolling up
        } else {
          setShowNavbar(false); // Scrolling down
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-3 overflow-hidden">
          <div className="flex shrink-0">
            <a
              aria-current="page"
              className="flex  flex-row items-center"
              href="/"
            >
              <img className="h-10 w-15" src={Logo} alt="PeakVoyage Logo" />
              <p className="ml-1 text-base sm:text-lg font-montserrat font-extrabold md:text-xl">
                | Peak<span className="text-indigo-500">Voyage</span>
              </p>
            </a>
          </div>

          {/* Navigation Items for Larger Screens */}
          <div className="hidden lg:flex flex-grow items-center justify-center space-x-6 rtl:space-x-reverse">
            <ul className="flex font-medium flex-row space-x-6 rtl:space-x-reverse">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="py-2 px-3 rounded hover:bg-blue-500"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="py-2 px-3 rounded hover:bg-blue-500"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("deals")}
                  className="py-2 px-3 rounded hover:bg-blue-500"
                >
                  Deals & Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="py-2 px-3 rounded hover:bg-blue-500"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Buttons for Larger Screens */}
          {/* Buttons for Larger Screens */}
          <div className="hidden md:flex items-center justify-end   lg:gap-0 ml-auto">
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center justify-center mr-3 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
            >
              Sign in
            </button>
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </button>
          </div>

          {/* Toggle Button and Icons */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn and GitHub Icons */}
            <div className="hidden sm-custom:flex space-x-4 ">
              <a
                target="blank"
                href="https://www.linkedin.com/in/marc-jairus-gacula-76b511262/"
              >
                <FaLinkedin className="h-6 w-5" />
              </a>
              <a target="blank" href="https://github.com/Emzthugll">
                <FaGithub className="h-6 w-5" />
              </a>
            </div>

            {/* Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar Menu (Toggle Menu) */}
        <div
          className={`fixed z-50 top-0 right-0 h-screen w-full bg-white transform overflow-hidden ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
          id="navbar-default"
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-blue-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNav}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <ul className="font-medium h-full flex flex-col p-4 mt-10 rounded-lg">
            <li>
              <div className="flex border-gray-200 dark:border-gray-700 mt-5 mb-4">
                <div className="flex mt-4 mx-3 gap-3">
                  <a target="blank" href="https://www.facebook.com/Emzthug/">
                    <FaFacebookSquare className="h-6 w-5" />
                  </a>
                  <a target="blank" href="https://www.instagram.com/emzthugll/">
                    <FaInstagram className="h-6 w-5" />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/marc-jairus-gacula-76b511262/"
                  >
                    <FaLinkedin className="h-6 w-5" />
                  </a>
                  <a target="blank" href="https://github.com/Emzthugll">
                    <FaGithub className="h-6 w-5" />
                  </a>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("home")}
                className="block py-2 px-3 rounded hover:bg-blue-500"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("destinations")}
                className="block py-2 px-3 rounded hover:bg-blue-500"
              >
                Destinations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("deals")}
                className="block py-2 px-3 rounded hover:bg-blue-500"
              >
                Deals & Offers
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block py-2 px-3 rounded hover:bg-blue-500"
              >
                Contact Us
              </button>
            </li>
            <div className="flex flex-col mt-4">
              <button
                onClick={openModal}
                className="mb-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
              >
                Sign in
              </button>
              <button
                onClick={openModal}
                className="rounded-xl bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Login
              </button>
            </div>
          </ul>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
