"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaGlobe, FaHistory, FaStar, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  const courses = [
    {
      title: "Mastering Python for Data Science",
      instructor: "Dr. Elena Thorne",
      rating: 4.9,
      tag: "Best Seller",
      image: "/MasteringPython.jpeg", 
    },
    {
      title: "Advanced UI/UX Design Trends",
      instructor: "Marcus Sterling",
      rating: 4.8,
      tag: "Trending",
      image: "/AdvancedUIUX.jpeg",
    },
    {
      title: "Full-Stack Web Development 2026",
      instructor: "Md Yeamin",
      rating: 5.0,
      tag: "Popular",
      image: "/Full-StackWeb.jpeg",
    },
  ];

  return (
    <section className="w-full bg-[#1c1d1f] overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[450px] md:min-h-[550px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#2d2f31] to-[#1c1d1f] px-6 sm:px-12 md:px-24 py-12 gap-8">
              
              
              <div className="w-full lg:w-3/5 flex flex-col text-white z-10 text-left items-start">
                
                
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="bg-[#eceb98] text-[#3d3c0a] text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[#f3ca8c] font-bold text-xs md:text-sm">
                    <FaStar className="mb-0.5" />
                    <span>{course.rating}</span>
                    <span className="text-gray-400 font-normal underline ml-1 hidden sm:inline">(12,403 ratings)</span>
                  </div>
                </div>

                
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 tracking-tight max-w-2xl">
                  {course.title}
                </h1>

                
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                  Master the full stack from HTML to React and Node.js. Build real-world projects and launch your career as a professional web developer.
                </p>

                
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] md:text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-1.5">
                    <FaUserCircle className="text-gray-500" />
                    <span>Created by <span className="text-[#a1d1ff] underline cursor-pointer">{course.instructor}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden md:flex">
                    <FaHistory className="text-gray-500" />
                    <span>Last updated 11/2024</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaGlobe className="text-gray-500" />
                    <span>English [Auto]</span>
                  </div>
                </div>

                
                <div className="flex">
                  <button className="bg-white text-black hover:bg-[#ff8c00] hover:text-white transition-all px-6 md:px-10 py-3 md:py-4 font-bold text-sm md:text-base flex items-center gap-2 rounded-sm transform active:scale-95">
                    Enroll Now <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>

              
              <div className="w-full lg:w-2/5 flex justify-center items-center relative mt-8 md:mt-0">
                
                <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-[#ff8c00]/10 rounded-full blur-[80px]"></div>
                
                <div className="relative group w-full max-w-[320px] md:max-w-[400px]">
                  <div className="bg-white/5 backdrop-blur-sm  rounded-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-white/10">
                    <div className="bg-[#1c1d1f] rounded-lg overflow-hidden flex items-center justify-center p-4 aspect-video">
                       <Image 
                        src={course.image} 
                        alt={course.title} 
                        width={350} 
                        height={200}
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                       />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: none !important;
        }
        @media (min-width: 1024px) {
          .swiper-button-next, .swiper-button-prev {
            display: flex !important;
          }
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ff8c00 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;