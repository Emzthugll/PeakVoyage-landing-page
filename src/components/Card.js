import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ image, imageAlt, rating, title, location, price }) => {
  return (
    <figure className="group relative flex flex-col h-fit w-fit mx-auto my-1 md:my-3 hover:cursor-pointer bg-white shadow-lg rounded-xl overflow-clip">
      {/* Insert src image here from JSON */}
      <img
        className="w-[250px] h-[250px]  md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] scale-110 md:group-hover:scale-100 transition-all duration-500 object-cover object-center pointer-events-none rounded-t-xl -z-0"
        src={image}
        alt={imageAlt}
        loading="lazy"
      />
      <div className="absolute flex flex-row justify-center items-center top-0 right-0 px-2 py-1 mr-1 mt-2 rounded-full bg-gray-600/60 text-white hover:cursor-pointer select-none text-sm">
        <AiFillStar className="text-yellow-400" />
        <p className="pl-1">{rating}</p>
      </div>
      <figcaption className="flex flex-row justify-between w-full p-2  rounded-b-lg text-black z-50 backdrop-blur-sm backdrop-saturate-150 bg-white/80">
        <div>
          {/* Insert title here from JSON */}
          <h2 className="ml-1 font-medium sm:text-sm text-left">{title}</h2>
          <div className="flex flex-row items-center py-1 text-xs">
            <svg
              fill="#FF0000"
              height="20"
              viewBox="0 0 24 24"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2s.5-.1.7-.2c.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zm0-13.7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                fill="##FF0000"
              />
            </svg>
            {/* Insert location here from JSON */}
            <p className="font-medium pl-[2px]">{location}</p>
          </div>
        </div>
        {/* Insert price here from JSON */}
        <div className="flex flex-col">
          <p className="text-xs text-right">starts at</p>
          <p className="text-green-600 py-1 ml-6 font-bold text-sm">{price}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
