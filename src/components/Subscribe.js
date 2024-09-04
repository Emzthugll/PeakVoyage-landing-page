import React from "react";
import { Link } from "react-scroll";

const Subscribe = () => {
  return (
    <footer id="contact" class=" font-sans bg-indigo-300">
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
          <div class="sm:col-span-2">
            <h1 class="max-w-lg text-xl font-semibold tracking-tight md:text-2xl   text-black mb-2">
              Don’t Miss Out on Your Next Adventure!
            </h1>
            <p>
              Be the first to discover amazing offers and breathtaking
              destinations. Subscribe to get the hottest travel deals delivered
              right to your inbox.
            </p>

            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                class="px-4 py-2 text-gray-700 bg-white border rounded-md   border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:ml-10">
            <p class="font-semibold text-black ">Quick Link</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black"
              >
                Home
              </Link>
              <Link
                to="destinations"
                smooth={true}
                duration={500}
                className="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black"
              >
                Destinations
              </Link>
              <Link
                to="deals"
                smooth={true}
                duration={500}
                className="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black"
              >
                Deals & Offers
              </Link>
            </div>
          </div>

          <div>
            <p class="font-semibold text-black ">Destinations</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <Link
                to=""
                smooth={true}
                duration={500}
                className="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black"
              >
                Countries/Territories
              </Link>
              <Link
                to=""
                smooth={true}
                duration={500}
                className="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black"
              >
                All Flight Routes
              </Link>
            </div>
          </div>

          <div>
            <p class="font-semibold text-black ">About us</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <p class="text-gray-500 transition-colors duration-300  -400 hover:underline hover:cursor-pointer hover:text-black">
                Careers
              </p>
              <p class="text-gray-500  transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-black">
                Press
              </p>
              <p class="text-gray-500  transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-black">
                Contact us
              </p>
              <p class="text-gray-500  transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-black">
                Resources and Policies
              </p>
              <p class="text-gray-500  transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-black">
                Accessibility Statement
              </p>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2 " />

        <div className="px-4 md:px-11 w-full">
          <div className="flex flex-wrap sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 hover:cursor-pointer mb-4 sm:mb-0">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt="Google Play"
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt="App Store"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="Facebook"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="Twitter"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="Instagram"
              />
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                width="30"
                height="30"
                alt="GitHub"
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="LinkedIn"
              />
              <img
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                width="30"
                height="30"
                alt="Dribbble"
              />
            </div>
          </div>
        </div>

        <p class="font-sans p-8  text-center md:text-lg md:p-4">
          © 2024{" "}
          <span className="font-montserrat font-semibold">
            Peak<span className="text-indigo-500">Voyage</span>
          </span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Subscribe;
