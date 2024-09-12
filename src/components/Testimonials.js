import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

// Sample testimonials data
const testimonials = [
  {
    text: "PeakVoyage turned our dream vacation into reality! Their personalized service and expert advice made planning our trip a breeze. Highly recommend!",
    image:
      "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.6435-9/88253800_2009764199170189_7342843515656732672_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_ohc=4LZYioclnGYQ7kNvgGVQksv&_nc_ht=scontent.fcrk2-2.fna&oh=00_AYB2kfOL_wuqQGjGRdYt8-a8nQYr10qXiK6jUE2VcuL3Dw&oe=66F4D478",
    name: "Jenny D.",
    position: "Accountant",
  },
  {
    text: "I was impressed by the attention to detail and the seamless travel arrangements made by PeakVoyage. Their dedication to customer satisfaction is unparalleled.",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/457518516_27548517708080581_338373357538863094_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=7ZZggFCPwu8Q7kNvgF149Wo&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AgJzklkpcqG1RG2fvb4qKN0&oh=00_AYAJcYh9B_Fy8Ka0y1_2JlBdX66ZJ1uB-S5LUfh3Uxxoig&oe=66E85B0B",
    name: "Lorraine J.",
    position: "Graphic Designer",
  },
  {
    text: "PeakVoyage helped us find the perfect getaway. Their recommendations were spot on, and their customer service was top-notch. Will definitely use them again!.",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/406601420_1401295450741967_6207674409089284902_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NUrC81xFjEwQ7kNvgH2o6om&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AogyO6Ihwkwu90_jh6N_8Pb&oh=00_AYCOqskE4pOZm4sZ4po2QVECEu0eKsT2k6ZFGPYPalg0pw&oe=66E8509D",
    name: "Mark alvin C.",
    position: "CEO",
  },
  {
    text: "PeakVoyage understands the meaning of true luxury travel. My island getaway in the Maldives was beyond compare. I was pampered with impeccable service and exclusive experiences. It was a trip of a lifetime.",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/371878605_321957273682733_1876070716289116427_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=UCy9QesgbU4Q7kNvgGEYc2e&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=A6Gt53yQF94_c9UCFNUsb1K&oh=00_AYAS17h4OR-O1BtfdeSedmTu0Gv5hxBFi5NyCvuvkuWVYA&oe=66E83291",
    name: "Louegie B.",
    position: "Doctor",
  },
  {
    text: "Thanks to PeakVoyage, our trip was flawlessly organized and stress-free. Their knowledge and personalized approach made a huge difference in our travel experience.",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/73230763_219185225757690_1006655985319673856_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D9tx5Qt7jhsQ7kNvgGNbK0u&_nc_ht=scontent.fcrk4-1.fna&oh=00_AYApnwJrr93HOGxe-IGBQYRQBcvpNnOzYX0P5L1aM4rk8Q&oe=66F4D600",
    name: "Anthony S.",
    position: "Lawyer",
  },
  {
    text: "The attention to detail and personalized service provided by PeakVoyage were outstanding. They ensured every aspect of our trip was perfect, from start to finish.",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/448439888_3655575298041007_1808401809486641029_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kXMmszE8UNwQ7kNvgFjte89&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AfD4gvnWBnAuw8o_H-5jl-G&oh=00_AYB9bSPbodGvoEiAPrfb9vNHbSrXXp4oOCFLywUTzBOciw&oe=66E845B8",
    name: "Queennie D.",
    position: "Teacher",
  },
  {
    text: "Our trip with PeakVoyage was nothing short of magical. The personalized itinerary and seamless coordination made it an experience we'll cherish forever. Highly recommend their services!",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.6435-9/81313998_2462014794053074_3149648600766611456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2O9TzQ9oVggQ7kNvgFgQ8uI&_nc_ht=scontent.fcrk4-1.fna&oh=00_AYD_ZG0sqjQsxikb04dX4-fqpDUp05SDRgfTGkwxKShkdw&oe=66FF57EB",
    name: "Jeofrey C.",
    position: "Professor X",
  },
];

const Testimonials = () => {
  return (
    <section
      className="pb-10 bg-cover bg-center bg-no-repeat  "
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/flat-design-travel-background_23-2149193475.jpg?t=st=1725529229~exp=1725532829~hmac=714edea8658df6222ee7116c26e5b051f6a1c3e931bd26408142fc8895a2e2f7&w=996')`,
      }}
    >
      <div className="relative mx-auto max-w-8xl  px-6 md:px-8  bg-opacity-80 p-8 rounded-lg">
        <div className="text-center mb-16">
          <h2
            className="text-2xl lg:text-3xl mb-3  font-Makeba rounded-l-full rounded-t-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-white "
            style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
          >
            Testimonials
          </h2>
          <span className="text-sm text-gray-500 font-medium block mb-2">
            What People Say About Us
          </span>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between p-6   border-l-4 border-indigo-400 bg-white/80  mb-4 rounded-lg shadow-md cursor-pointer  transition-shadow duration-300"
            >
              <div className="relative">
                <svg
                  height="30"
                  viewBox="0 0 8 8"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2z"
                    transform="translate(0 1)"
                  />
                </svg>
                <p className="pl-10 text-base text-gray-700 leading-6 pb-8">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-5 border-t-2  border-indigo-300 pt-5">
                <img
                  className="rounded-full h-10 w-10"
                  src={testimonial.image}
                  alt="avatar"
                />
                <div>
                  <h5 className="text-gray-900 font-medium mb-1">
                    {testimonial.name}
                  </h5>
                  <span className="text-sm text-gray-500">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
