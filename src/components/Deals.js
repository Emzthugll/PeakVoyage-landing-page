import React from "react";

const Deals = () => {
  return (
    <div id="deals" className=" ">
      <div tabIndex="0" className="focus:outline-none w-full ">
        <div className="mx-auto container px-5 py-8  ">
          <div className="text-center">
            <h2
              className=" mb-10 text-2xl lg:text-3xl  font-Makeba  mt-4 md:mt-10  rounded-l-full rounded-t-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-white "
              style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
            >
              Deals & Offers
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:gap-20 md:grid-cols-2  justify-center">
            {/* Deal 1 */}
            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://maldivesfinest.com/wp-content/uploads/2017/02/velaa-banner2.jpg"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="##FFFF00"
                      fill="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      20% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-blue-500 text-xl font-bold"
                    >
                      Beach and Relaxation Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold text-blue-500">
                          Destination:
                        </span>{" "}
                        Maldives
                      </li>
                      <li>
                        <span className="font-semibold text-blue-500">
                          Highlights:
                        </span>{" "}
                        Relax on white-sand beaches, Indulge in rejuvenating spa
                        treatments, enjoy snorkeling, and take sunset cruises.
                      </li>
                      <li>
                        <span className="font-semibold text-blue-500">
                          Inclusions:
                        </span>{" "}
                        Guided tours, cooking classes, and traditional Japanese
                        accommodation
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">3 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p className="text-sm ml-1 justify-center">5 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $1300
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Deal 2 */}
            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://www.luxurygold.com/media/zjnccs45/20_monaco-port-evening-monaco-monaco-6.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=602&height=354&quality=80"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="##FFFF00"
                      fill="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      20% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-xl font-bold"
                    >
                      Luxury Experience Tour Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold">Destination:</span>{" "}
                        France
                      </li>
                      <li>
                        <span className="font-semibold">Highlights:</span> Stay
                        in luxury hotels, enjoy private tours of Paris, and
                        explore the wine regions of Bordeaux.
                      </li>
                      <li>
                        <span className="font-semibold">Inclusions:</span>{" "}
                        Luxury accommodation, private guided tours, and gourmet
                        dining experiences.
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">3 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">5 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $4000
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/d8/e5/5c.jpg"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      20% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-xl font-bold"
                    >
                      Wildlife Safari Full Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold">Destination:</span>{" "}
                        Kenya
                      </li>
                      <li>
                        <span className="font-semibold">Highlights:</span> Visit
                        the iconic Maasai Mara, Yala National Park, visit local
                        villages, and enjoy luxury tented camps.
                      </li>
                      <li>
                        <span className="font-semibold">Inclusions:</span>{" "}
                        Safari game drives, all entry fees to national parks are
                        included, and cultural experiences.
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">6 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p className="text-sm ml-1 justify-center">5 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $7100
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      30% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-xl font-bold"
                    >
                      Historical and Culinary Tour Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold">Destination:</span>{" "}
                        Japan
                      </li>
                      <li>
                        <span className="font-semibold">Highlights:</span>{" "}
                        Explore ancient temples and shrines in Kyoto, experience
                        the bustling energy of Tokyo, and savor authentic
                        Japanese cuisine.
                      </li>
                      <li>
                        <span className="font-semibold">Inclusions:</span>{" "}
                        Guided tours, Cooking CLasses and traditional Japanese
                        accommodation.
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">4 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p className="text-sm ml-1 justify-center">4 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $4200
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://static.saltinourhair.com/wp-content/uploads/2019/02/23121212/things-to-do-el-nido-island-hopping-tour-2.jpg"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      40% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-xl font-bold"
                    >
                      Enchanting Escape to El Nido Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold">Destination:</span>{" "}
                        Palawan, Philippines
                      </li>
                      <li>
                        <span className="font-semibold">Highlights:</span> Kayak
                        through the breathtaking limestone cliffs of El Nido,
                        discover hidden lagoons, and relax on secluded beaches.
                      </li>
                      <li>
                        <span className="font-semibold">Inclusions:</span>{" "}
                        Island-hopping tours, snorkeling, and comfortable
                        accommodations.
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">2 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">5 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $870
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              tabIndex="0"
              className="group focus:outline-none mx-2 max-w-[500px] xl:mb-0 mb-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  alt="Beach in Maldives"
                  src="https://ipt.imgix.net/199040/x/0/vestrahorn.jpg?auto=format%2Ccompress&crop=faces%2Cedges%2Ccenter&bg=%23fff&fit=crop&q=32&h=800&dpr=1"
                  tabIndex="0"
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      tabIndex="0"
                      className="focus:outline-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-xs text-yellow-700"
                    >
                      20% Off
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-xl font-bold"
                    >
                      Northern Lights and Ice Caves Adventure Package
                    </h2>
                  </div>
                  <div className="border-t border-black mt-3">
                    <ul className="list-disc mt-3 ml-4">
                      <li>
                        <span className="font-semibold">Destination:</span>{" "}
                        Iceland
                      </li>
                      <li>
                        <span className="font-semibold">Highlights:</span> Chase
                        the mesmerizing Aurora Borealis, explore stunning ice
                        caves, and soak in geothermal hot springs surrounded by
                        snow-capped mountains.
                      </li>
                      <li>
                        <span className="font-semibold">Inclusions:</span>{" "}
                        Guided Northern Lights tours, ice cave exploration with
                        experienced guides, comfortable accommodations, and
                        winter gear rental.
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>ionicons-v5-j</title>
                        <path
                          d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "32px",
                          }}
                        />
                        <path
                          d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinecap: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: "32px",
                          }}
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">4 People</p>
                    </div>
                    <div className="flex ml-4">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm ml-1 justify-center">5 Days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 py-4 px-4 rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        tabIndex="0"
                        className="focus:outline-none text-sm font-bold text-gray-700"
                      >
                        From
                      </h3>
                      <h2
                        tabIndex="0"
                        className="focus:outline-none text-2xl font-bold text-gray-900"
                      >
                        $6500
                      </h2>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white focus:outline-none">
                      <p>Book Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
