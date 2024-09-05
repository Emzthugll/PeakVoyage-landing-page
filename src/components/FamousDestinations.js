import React from "react";
import DestinationsSlick from "./DestinationsSlick.js";

const FamousDestinations = () => {
  return (
    <div
      id="destinations"
      className="relative w-full h-35 overflow-hidden bg-cover bg-center bg-no-repeat lg:bg-fixed lg:bg-cover"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/landscape-tropical-vacation-palm-summer_1203-5352.jpg?t=st=1725529488~exp=1725533088~hmac=57fd54bda3dbb13a840ed11093e2e3a1bd95f9ad6f13f0cd60f1fbacb69595ba&w=996')`,
      }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto pt-4 md:pt-8 pb-8 md:pb-16">
        <div className="text-center mb-4 mt-4 lg:mt-0 slanted-container justify-center">
          <h2
            className="text-2xl lg:text-3xl mb-2 lg:mt-10 font-Makeba rounded-l-full rounded-t-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-white"
            style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
          >
            Famous Destinations
          </h2>
        </div>
        <div className="md:mb-2 mt-6 lg:mt-0">
          <DestinationsSlick />
        </div>
      </div>
    </div>
  );
};

export default FamousDestinations;
