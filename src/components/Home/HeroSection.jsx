"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
const HeroSection = () => {
  const courses = [
  {
    title: "Mastering Python for Data Science",
    instructor: "Dr. Elena Thorne",
    rating: 4.9,
    students: "12.5k",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1600&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    title: "Advanced UI/UX Design Trends",
    instructor: "Marcus Sterling",
    rating: 4.8,
    students: "8.9k",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1600&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    title: "Full-Stack Web Development 2026",
    instructor: "Md Yeamin",
    rating: 5.0,
    students: "15k",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&auto=format&fit=crop",
    tag: "Popular",
  },
];
  return (
    <div className="w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper h-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              {/* Background Image */}
              <Image
                width={100}
                height={100}
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Course Details Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white space-y-4">
                <span className="bg-[#ff8c00] text-white text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-wider">
                  {course.tag}
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight">
                  {course.title}
                </h2>

                <div className="flex items-center gap-4 text-sm md:text-base text-gray-200">
                  <span className="font-medium">
                    Instructor: {course.instructor}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400">
                    <FaStar /> {course.rating}
                  </span>
                  <span>({course.students} Students)</span>
                </div>

                <p className="text-gray-300 max-w-lg text-sm md:text-base hidden md:block">
                  Build industry-ready projects and master the latest tools with
                  hands-on training from world-class experts.
                </p>

                <div className="pt-4">
                  <button className="flex items-center gap-2 bg-white text-[#7a3f00] px-8 py-3 rounded-xl font-bold hover:bg-[#ff8c00] hover:text-white transition-all transform active:scale-95">
                    Enroll Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles for Buttons */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(5px);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #ff8c00 !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
