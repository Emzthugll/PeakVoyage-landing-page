import React, { useRef } from "react";
import Card from "./Card.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CARD_CONTENT = [
  {
    title: "Bagan Temple",
    location: "Myanmar",
    price: "$341",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1639494617513-364cecc4c44a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Bagan Temple.jpeg",
  },
  {
    title: "Taj Mahal",
    location: "Agra, India",
    price: "$500",
    rating: "4.8",
    image:
      "https://plus.unsplash.com/premium_photo-1697729441569-f706fdd1f71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "oia_village.jpg",
  },
  {
    title: "Grand Canyon",
    location: "Arizona, USA",
    price: "$500",
    rating: "4.4",
    image:
      "https://plus.unsplash.com/premium_photo-1668703335393-a0749dbdd5ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Oia Village",
    location: "Santorini, Greece",
    price: "$500",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1503492313441-f636a15b8a55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "hokanji_temple.jpg",
  },
  {
    title: "Eiffel Tower",
    location: "Paris, France",
    price: "$473",
    rating: "4.8",
    image:
      "https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "padar_island.jpg",
  },
  {
    title: "El Nido",
    location: "Palawan, Philippines",
    price: "$500",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1694672886127-cff2a8b71293?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "san_martino.jpg",
  },
  {
    title: "The Sanctuary of Truth",
    location: "Bangkok, Thailand",
    price: "$500",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1644902617098-45abe72a7445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "shibuya.jpg",
  },
  {
    title: "Gardens by the Bay",
    location: "Singapore",
    price: "$500",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1700525015628-c5d0d8ed8d33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "veligandu.jpg",
  },
  {
    title: "Colosseum",
    location: "Rome, Italy",
    price: "$500",
    rating: "4.7",
    image:
      "https://plus.unsplash.com/premium_photo-1661938399624-3495425e5027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "lake_prags.jpg",
  },
  {
    title: "Balinese Temple",
    location: "Bali, Indonesia",
    price: "$500",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "el_nido.jpg",
  },
  {
    title: "Niagara Falls",
    location: "Ontario, Canada",
    price: "$586",
    rating: "4.9",
    image:
      "https://plus.unsplash.com/premium_photo-1697730069404-280d3289650f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "chureito_pagoda.jpg",
  },
  {
    title: "Pyramid of Giza",
    location: "Giza, Egypt",
    price: "$500",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1710069441986-82759c8a200c?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "siargao.jpg",
  },
];

const DestinationsSlick = () => {
  const slider = useRef();

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
      {
        breakpoint: 1280, // Change settings for viewport width 1280px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 980, // Change settings for viewport width 980px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Change settings for viewport width 7480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider ref={slider} {...settings}>
        {CARD_CONTENT.map((item, index) => {
          return (
            <div className="px-4 pb-4">
              <Card
                key={"carousel-item" + index}
                title={item.title}
                location={item.location}
                image={item.image}
                imageAlt={item.imageAlt}
                price={item.price}
                rating={item.rating}
              />
            </div>
          );
        })}
      </Slider>
      <div className="w-full  flex  justify-end  px-4 mt-[-2px] md:mt-[-20px] ">
        {/* Start of Carousel Control Buttons */}
        <div className="flex gap-1 md:gap-2 text-sm sm:text-base z-40 ease-in-out">
          <button
            className="p-1 h-fit w-fit text-indigo-400 border-2 border-indigo-400 rounded-full hover:text-white hover:bg-indigo-500  transition-colors duration-300 cursor-pointer"
            onClick={() => slider?.current?.slickPrev()}
          >
            <FiArrowLeft />
          </button>
          <button
            className="p-1 h-fit w-fit text-indigo-400 border-2 border-indigo-400 rounded-full hover:text-white hover:bg-indigo-500  transition-colors duration-300 cursor-pointer"
            onClick={() => slider?.current?.slickNext()}
          >
            <FiArrowRight />
          </button>
        </div>
        {/* End of Carousel Control Buttons */}
      </div>
    </div>
  );
};

export default DestinationsSlick;
