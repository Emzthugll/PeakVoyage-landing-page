import React, { useState, useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Navbar from "./components/Navbar";
import FamousDestinations from "./components/FamousDestinations";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Deals from "./components/Deals";
import Subscribe from "./components/Subscribe";
import Modal from "./components/Modal";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <HeroSection />
      <FamousDestinations />
      <FeaturesSection />
      <Deals />
      <Blogs />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default App;
