import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaganImage from "./images/Bagan.jpg";
import TAJ from "./images/Taj-mahal.jpg";
import GC from "./images/Grand canyon.jpg";
import Santorini from "./images/santorini.jpg";
import Eiffel from "./images/Eiffel-tower.jpg";
import El from "./images/El nido.jpg";
import Sanctuary from "./images/Sanctuary.jpg";
import Gardens from "./images/gardens.jpg";
import BG from "./images/BGG.jpg";

const wonders = [
  {
    name: "Bagan Temple",
    location: "Myanmar",
    price: "$100",
    image: BaganImage,
    rating: 4.5,
  },
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh, India",
    price: "$150",
    image: TAJ,
    rating: 5,
  },
  {
    name: "Grand Canyon",
    location: "Arizona, United States",
    price: "$200",
    image: GC,
    rating: 4.8,
  },
  {
    name: "Oia Village",
    location: "Santorini, Greece",
    price: "$80",
    image: Santorini,
    rating: 4.7,
  },
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    price: "$120",
    image: Eiffel,
    rating: 4.9,
  },
  {
    name: "El Nido",
    location: "El Nido, Philippines",
    price: "$120",
    image: El,
    rating: 4.6,
  },
  {
    name: "The Sanctuary of Truth ",
    location: "Bangkok, Thailand",
    price: "$120",
    image: Sanctuary,
    rating: 4.4,
  },
  {
    name: "Gardens by the Bay",
    location: "Singapore",
    price: "$120",
    image: Gardens,
    rating: 4.7,
  },
];

const FamousDestinations = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="destinations"
      className="min-h-[60vh] flex flex-col justify-center p-4 md:p-8 lg:p-12 bg-gray-100 bg-cover  bg-no-repeat bg-top-left lg:bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="text-center mb-6 slanted-container">
        <h2 className="text-3xl sm:text-5xl mb-2  font-Makeba text-indigo-400">
          Famous Destinations
        </h2>
      </div>
      <div className="flex justify-center mb-4 min-w-full">
        <div className="mr-3">
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full  gap-3 hover:bg-blue-500 hover:text-white  transition-colors duration-300 ease-in-out   p-4 ">
            All locations
          </button>
        </div>
        <div className="mr-3">
          <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white  transition-colors duration-300 ease-in-out">
            Near me
          </button>
        </div>
        <div className="mr-4">
          <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white  transition-colors duration-300 ease-in-out">
            New
          </button>
        </div>
      </div>
      <div className="flex-grow mx-10">
        <Slider ref={sliderRef} {...settings}>
          {wonders.map((wonder, index) => (
            <div key={index} className="p-3 ">
              <div className="relative p-0 shadow-md rounded-xl text-center h-full overflow-hidden">
                <img
                  src={wonder.image}
                  alt={wonder.name}
                  className="h-[370px] md:h-100  w-full object-cover  rounded-md md:transform md:transition-transform md:duration-500 md:ease-in-out md:hover:scale-105 cursor-pointer"
                />

                <div className="absolute top-2 right-2 flex items-center px-3  space-x-1 backdrop-blur-sm backdrop-saturate-150 bg-white/20 p-1 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 14.72 22 9.27 15.81 8.63 12 2 8.19 8.63 2 9.27 7.46 14.72 5.82 21z" />
                  </svg>
                  <span className="text-sm font-bold">
                    {wonder.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex flex-row justify-between w-full p-2 rounded-b-lg text-black z-50 bg-white/70 cursor-pointer ">
                  <div className="ml-2 mt-3">
                    <h2 className="font-medium sm:text-sm text-left ml-1 mb-1">
                      {wonder.name}
                    </h2>
                    <div className="flex flex-row items-center py-1 text-xs">
                      <svg
                        fill="#FF0000"
                        height="22"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2s.5-.1.7-.2c.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zm0-13.7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                          fill="##FF0000"
                        />
                      </svg>
                      <p className="text-sm">{wonder.location}</p>
                    </div>
                  </div>
                  <div className="mr-2 mt-3">
                    <p className="">Starts at</p>
                    <p className="text-green-600 py-1 ml-6 font-bold text-sm">
                      {wonder.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FamousDestinations;
