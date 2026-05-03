"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "Mastering Python for",
    titleAccent: "Data Science",
    instructor: "Dr. Elena Thorne",
    rating: 4.9,
    totalRating: 24556,
    activeStudents: "10k+",
    tag: "Best Seller",
    description:
      "Learn the industry's most sought-after skills from world-class instructors. Build a professional portfolio and launch your dream career in tech.",
    duration: "22 hours",
    image: "/MasteringPython.jpeg",
  },
  {
    title: "Advanced",
    titleAccent: "UI/UX Design",
    instructor: "Marcus Sterling",
    rating: 4.8,
    totalRating: 18923,
    activeStudents: "8k+",
    tag: "Trending",
    description:
      "Master modern design principles, Figma workflows, and user research techniques to craft beautiful, conversion-focused interfaces.",
    duration: "14 hours",
    image: "/AdvancedUIUX.jpeg",
  },
  {
    title: "Full-Stack Web",
    titleAccent: "Development 2026",
    instructor: "Md Yeamin",
    rating: 5.0,
    totalRating: 31204,
    activeStudents: "12k+",
    tag: "Popular",
    description:
      "From HTML to React and Node.js — build production-ready full-stack apps and launch your career as a professional web developer.",
    duration: "30 hours",
    image: "/Full-StackWeb.jpeg",
  },
  
  {
    title: "The Ultimate Guide to",
    titleAccent: "Cyber Security",
    instructor: "Sarah Jenkins",
    rating: 4.7,
    totalRating: 12450,
    activeStudents: "5k+",
    tag: "Security",
    description:
      "Protect networks and data from hackers. Learn ethical hacking, encryption, and network security from scratch.",
    duration: "18 hours",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mastering Mobile Apps with",
    titleAccent: "React Native",
    instructor: "David Chen",
    rating: 4.9,
    totalRating: 9840,
    activeStudents: "6k+",
    tag: "Hot & New",
    description:
      "Build high-performance native iOS and Android apps using a single JavaScript codebase with React Native.",
    duration: "25 hours",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Machine Learning &",
    titleAccent: "Artificial Intelligence",
    instructor: "Dr. Aris Vogt",
    rating: 4.9,
    totalRating: 15200,
    activeStudents: "9k+",
    tag: "Advanced",
    description:
      "Dive deep into neural networks, deep learning, and predictive modeling using TensorFlow and PyTorch.",
    duration: "40 hours",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    titleAccent: "Masterclass 2026",
    instructor: "Laura Knight",
    rating: 4.6,
    totalRating: 21000,
    activeStudents: "15k+",
    tag: "Marketing",
    description:
      "Grow any business with SEO, Social Media Marketing, and Google Ads. Learn to drive traffic and convert sales.",
    duration: "12 hours",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-7xl mx-auto overflow-hidden relative group">
      
      {/* ── Animated Background Blobs ── */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-swiper z-10"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            {/* Height Adjusted to min-h and increased for responsiveness */}
            <div className="flex  flex-row items-center justify-between gap-3 md:gap-8 px-4 sm:px-10 lg:px-20 py-8  min-h-30 sm:min-h-[250px] lg:min-h-[450px]">

              {/* ── Left Content ── */}
              <div className="w-[55%] sm:w-1/2 flex flex-col gap-2 md:gap-4 text-left items-start z-10">

                {/* Tag badge */}
                <div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-100 text-[9px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  <FaStar className="text-[#914C00]" size={10} />
                  {course.tag}
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-sm sm:text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    {course.title}
                  </h1>
                  <h1 className="text-sm sm:text-2xl lg:text-4xl font-extrabold text-[#914C00] leading-tight tracking-tight">
                    {course.titleAccent}
                  </h1>
                </div>

                {/* Description */}
                <p className="hidden sm:block text-xs lg:text-sm text-gray-600 leading-relaxed max-w-md">
                  {course.description}
                </p>

                {/* CTA buttons */}
                <div className="flex items-center gap-2 flex-wrap mt-1 md:mt-2">
                  <Link
                    href="/categories"
                    className="inline-flex items-center gap-1.5 bg-[#914C00] hover:bg-[#7a3f00] text-white px-3 py-1.5 sm:px-5 sm:py-2.5 font-bold text-[10px] sm:text-xs lg:text-sm rounded-md transition-all active:scale-95"
                  >
                    Enroll Now <FaArrowRight size={10} />
                  </Link>
                  <Link
                    href="/categories"
                    className="hidden lg:inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 font-semibold text-sm rounded-md transition-all"
                  >
                    Explore Courses
                  </Link>
                </div>

                {/* Stats */}
                <div className="hidden md:flex items-center gap-4 pt-2">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={11}
                          className={
                            i < Math.floor(course.rating)
                              ? "text-[#914C00]"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500 mt-0.5 font-medium">
                      {course.rating}/5 Rating
                    </span>
                  </div>
                  <div className="w-px h-6 bg-gray-300" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold text-gray-900 leading-none">
                      {course.activeStudents}
                    </span>
                    <span className="text-[10px] text-gray-500 mt-0.5">
                      Active Students
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right Image ── */}
              <div className="w-[45%] sm:w-1/2 flex justify-end items-center relative z-10">
                <div className="relative w-full max-w-[420px] rounded-lg sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video flex items-center justify-center bg-gray-50">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={440}
                    height={248}
                    className="object-cover w-full h-full"
                  />

                  {/* Accredited badge */}
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-md border border-gray-100">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#914C00]/10 flex items-center justify-center">
                      <MdVerified className="text-[#914C00] text-[10px] sm:text-sm" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[10px] font-bold text-gray-900 leading-none">
                        Accredited
                      </p>
                      <p className="text-[9px] text-gray-400 leading-none mt-0.5">
                        Global Certification
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Hover Navigation Buttons ── */}
      <button
        ref={prevRef}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 active:scale-95 disabled:hidden"
      >
        <FiChevronLeft size={18} strokeWidth={2.5} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 active:scale-95 disabled:hidden"
      >
        <FiChevronRight size={18} strokeWidth={2.5} />
      </button>

      <style jsx global>{`
        .blob {
          position: absolute;
          filter: blur(45px);
          z-index: 0;
          opacity: 0.5;
          animation: shapeShift 12s infinite ease-in-out alternate;
        }
        .blob-1 { top: -20%; left: -10%; width: 350px; height: 350px; background: #fde68a; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        .blob-2 { bottom: -20%; right: -5%; width: 300px; height: 300px; background: #ffedd5; border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; animation-delay: -4s; }
        .blob-3 { top: 10%; left: 35%; width: 250px; height: 250px; background: #fef08a; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; animation-delay: -8s; }

        @keyframes shapeShift {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -30px) scale(1.1) rotate(15deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(-10deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #914C00 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;