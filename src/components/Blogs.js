import React, { useState } from "react";

const Blogs = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleToggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div>
      <div className="min-h-screen w-full  p-4 text-center">
        <h2
          className=" mb-8  text-2xl lg:text-3xl font-Makeba rounded-l-full rounded-t-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-white "
          style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
        >
          Blogs
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-4">
          {/* Blog Post 1 */}
          <li className="flex flex-col items-start">
            <img
              src="https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/APOSTLE-ISLANDS-1024x744.jpg"
              alt="Apostle Islands"
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-64 object-cover"
              width="1200"
              height="640"
            />
            <div>
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className=" text-left block text-md leading-6 text-indigo-400">
                  Exploring the Magic of Salar de Uyuni: Bolivia's Dazzling Salt
                  Flats
                </span>
              </h3>
              <div className="prose prose-slate text-left prose-sm text-slate-600">
                <p>
                  Salar de Uyuni, located in southwestern Bolivia, is the
                  world’s largest salt flat, covering over 10,000 square
                  kilometers.
                </p>
              </div>
              {visibleIndex === 0 && (
                <div className=" text-left prose-slate prose-sm text-slate-600 mt-4">
                  <p>
                    This stunning landscape creates a surreal experience,
                    especially after rain when it transforms into a giant
                    mirror, perfectly reflecting the sky and clouds. During the
                    dry season, the salt crust forms a geometric mosaic,
                    offering a striking contrast against the expansive, flat
                    horizon. The salt flats, combined with the isolated islands
                    dotted with giant cacti, make Salar de Uyuni a must-see
                    destination for travelers seeking both natural beauty and a
                    sense of otherworldliness.
                  </p>
                </div>
              )}
              <button
                onClick={() => handleToggle(0)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-400 text-white hover:bg-blue-500 hover:text-white focus:ring-slate-500 mt-6"
              >
                {visibleIndex === 0 ? "Show Less" : "Show More"}
                <svg
                  className="overflow-visible ml-3 text-white group-hover:text-white"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </li>
          {/* Blog Post 2 */}
          <li className="flex flex-col items-start">
            <img
              src="https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/tropea-italy.jpg"
              alt="Tropea Italy"
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-64 object-cover"
              width="1216"
              height="640"
            />
            <div>
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="block text-left text-md leading-6 text-indigo-400">
                  Monastery of Santa Maria dell’Isola: A Cliffside Jewel of
                  Tropea
                </span>
              </h3>
              <div className="prose prose-slate prose-sm text-left text-slate-600">
                <p>
                  Perched atop a rocky promontory overlooking the crystal-clear
                  waters of the Tyrrhenian Sea, the Monastery of Santa Maria
                  dell’Isola is a breathtaking sight in Tropea, Italy.
                </p>
              </div>
              {visibleIndex === 1 && (
                <div className="text-left prose prose-slate prose-sm text-slate-600 mt-4">
                  <p>
                    This historic monastery, with its origins dating back to the
                    6th century, offers visitors a serene escape and panoramic
                    views of the stunning coastline. The iconic whitewashed
                    structure, accessible via a picturesque staircase, is a
                    testament to both religious devotion and architectural
                    splendor. It’s a must-visit for anyone seeking a blend of
                    natural beauty, historical depth, and tranquil ambiance.
                  </p>
                </div>
              )}
              <button
                onClick={() => handleToggle(1)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  bg-indigo-400 text-white hover:bg-blue-500 hover:text-white focus:ring-slate-500 mt-6"
              >
                {visibleIndex === 1 ? "Show Less" : "Show More"}
                <svg
                  className="overflow-visible ml-3 text-white group-hover:text-white"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </li>

          <li className="flex flex-col items-start">
            <img
              src="https://media.cntraveler.com/photos/62e15abc95f3e76d1ca1001b/master/w_1920,c_limit/Aurora%20Village%20-%20Yellowknife,%20Northwest%20Territories_DSC03124.JPG"
              alt="Apostle Islands"
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-64 object-cover"
              width="1200"
              height="640"
            />
            <div>
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="text-left block text-md leading-6 text-indigo-400">
                  Chasing the Northern Lights: A Spectacular Natural Light Show
                </span>
              </h3>
              <div className="prose prose-slate prose-sm text-left text-slate-600">
                <p>
                  Imagine standing under a dark, starry sky as vibrant colors
                  start to dance across the heavens. This is the mesmerizing
                  experience of witnessing the Northern Lights, also known as
                  the Aurora Borealis.
                </p>
              </div>
              {visibleIndex === 2 && (
                <div className="text-left prose prose-slate prose-sm text-slate-600 mt-4">
                  <p>
                    The Northern Lights are a stunning natural light show that
                    occurs in the Arctic regions. They are created when charged
                    particles from the sun collide with Earth's atmosphere,
                    producing a dazzling display of green, purple, pink, and red
                    lights that shimmer and swirl in the sky. The best time to
                    see this incredible spectacle is during the long winter
                    nights, when the skies are darkest and the auroras are most
                    visible. Prime locations for viewing the Northern Lights
                    include Norway, Iceland, Canada, and Alaska. Whether you're
                    exploring remote wilderness areas or cozying up in a glass
                    igloo, the sight of the Northern Lights is sure to be a
                    highlight of your trip. These lights have fascinated people
                    for centuries and are surrounded by various myths and
                    legends. For many, catching a glimpse of the auroras is a
                    dream come true—a chance to experience one of nature's most
                    awe-inspiring wonders. If you're planning a trip to see the
                    Northern Lights, remember to check the weather forecast and
                    solar activity reports for the best chances of witnessing
                    this spectacular show. And don't forget to dress warmly and
                    bring your camera to capture the magic!
                  </p>
                </div>
              )}
              <button
                onClick={() => handleToggle(2)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-400 text-white hover:bg-blue-500 hover:text-white focus:ring-slate-500 mt-6"
              >
                {visibleIndex === 2 ? "Show Less" : "Show More"}
                <svg
                  className="overflow-visible ml-3 text-white group-hover:text-white"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </li>
          {/* Blog Post 2 */}
          <li className="flex flex-col items-start">
            <img
              src="https://www.travelandleisure.com/thmb/LrRPOL02yLrcupBNPKARdCwyANU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chocolate-hills-PHIL0116-3a853dd3c6704d84bb5162bb37404279.jpg"
              alt="Tropea Italy"
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-64 object-cover"
              width="1216"
              height="640"
            />
            <div>
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="text-left block text-md leading-6 text-indigo-400">
                  Chocolate Hills: Bohol’s Sweet Natural Wonder
                </span>
              </h3>
              <div className="text-left prose prose-slate prose-sm text-slate-600">
                <p>
                  The Chocolate Hills rise from the landscape like a surreal,
                  natural phenomenon. These unique geological formations,
                  consisting of over 1,200 conical hills, create an enchanting
                  and otherworldly vista that captivates visitors from around
                  the world.
                </p>
              </div>
              {visibleIndex === 3 && (
                <div className="text-left prose prose-slate prose-sm text-slate-600 mt-4">
                  <p>
                    The Chocolate Hills are characterized by their perfectly
                    symmetrical, dome-shaped hills that vary in height, creating
                    a picturesque and undulating landscape. During the dry
                    season, the hills turn a rich brown color, resembling
                    chocolate mounds, which is how they got their name. This
                    transformation adds to their allure, making the hills look
                    like a vast, natural candyland. The lush green of the hills
                    during the rainy season provides a striking contrast,
                    offering a different yet equally beautiful view.
                  </p>
                </div>
              )}
              <button
                onClick={() => handleToggle(3)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  bg-indigo-400 text-white hover:bg-blue-500 hover:text-white focus:ring-slate-500 mt-6"
              >
                {visibleIndex === 3 ? "Show Less" : "Show More"}
                <svg
                  className="overflow-visible ml-3 text-white group-hover:text-white"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </li>
          {/* Blog Post 3 */}
          <li className="flex flex-col items-start">
            <img
              src="https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2016/04/ipiales.jpg"
              alt="Hero Patterns"
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-64 object-cover"
              width="1216"
              height="640"
            />
            <div>
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="text-left block text-md leading-6 text-indigo-400">
                  Las Lajas Sanctuary: Colombia's Architectural Marvel
                </span>
              </h3>
              <div className="text-left prose prose-slate prose-sm text-slate-600">
                <p>
                  Nestled in a picturesque canyon near Ipiales, Colombia, the
                  Las Lajas Sanctuary is a stunning example of neo-Gothic
                  architecture and a site of deep spiritual significance.
                </p>
              </div>
              {visibleIndex === 4 && (
                <div className="text-left prose prose-slate prose-sm text-slate-600 mt-4">
                  <p>
                    Perched on a bridge spanning the Guáitara River, this
                    extraordinary basilica appears to be a natural extension of
                    the surrounding rugged landscape. Built between 1916 and
                    1949, the sanctuary is renowned for its striking façade and
                    intricate stained glass windows. Its setting amidst lush
                    green hills and dramatic cliffs enhances its ethereal charm,
                    making it a remarkable destination for visitors seeking both
                    architectural wonder and serene beauty.
                  </p>
                </div>
              )}
              <button
                onClick={() => handleToggle(4)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  bg-indigo-400 text-white hover:bg-blue-500 hover:text-white focus:ring-slate-500 mt-6 ml-auto"
              >
                {visibleIndex === 4 ? "Show Less" : "Show More"}
                <svg
                  className="overflow-visible ml-3 text-white group-hover:text-white"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
