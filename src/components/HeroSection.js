import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "../components/Videos/BG.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover sm:bg-right-top"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4 md:p-8 lg:p-12">
        <motion.h1
          className="text-5xl font-bold md:text-8xl mb-5 font-Makeba tracking-wide md:tracking-wider text-green-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the World with Us
        </motion.h1>
        <motion.p
          className="font-serif text-md md:text-2xl mb-10 md:mb-20 max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover amazing destinations and experiences with our travel
          services.
        </motion.p>
        <motion.div
          className="flex w-full md:w-2/3 mx-10 rounded-full backdrop-blur-lg backdrop-saturate-150 bg-white/70"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <input
            className="w-full border-none bg-transparent px-4 py-2 text-gray-800 outline-none focus:outline-none"
            type="search"
            name="search"
            placeholder="Search a destination now..."
            aria-label="Search destinations"
          />
          <button
            type="submit"
            className="m-2 px-4 py-2 bg-indigo-400  text-white rounded-full"
            aria-label="Search"
          >
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              width="24"
              height="24"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
