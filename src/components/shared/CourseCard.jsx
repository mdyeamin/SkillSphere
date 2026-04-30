import { AiOutlineStar } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const {
    title,
    instructor,
    duration,
    rating,
    id,
    image,

    category,
  } = course;

  return (
    <>
      <div className="group relative max-w-[380px] mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col font-sans transition-all duration-300 hover:shadow-lg">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#914C00] z-20 transition-all duration-500 ease-out translate-x-[-100%] group-hover:translate-x-0"></div>

        <div className="relative h-[210px] w-full p-2.5">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <Image
              src={image}
              width={200}
              height={180}
              alt="Course Thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Tag - Transparent Glassmorphism */}
            <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-xs border border-white/30 px-1  rounded-md shadow-sm">
              <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">
                {category}
              </span>
            </div>
          </div>
        </div>

        <div className="px-5 pt-2 pb-6 flex flex-col flex-grow">
          <h3 className="text-[22px] line-clamp-1 font-bold text-[#1a1d23] leading-snug mb-4">
            {title}
          </h3>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              <AiOutlineStar className="text-[#b46d1f] text-xl" />
              <span className="text-sm font-bold text-gray-800">{rating}</span>
              <span className="text-sm text-gray-500 font-medium">
                ({duration})
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <LuClock3 className="text-lg" />
              <span className="text-sm font-semibold">{duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src={instructor.image_url}
              width={20}
              height={20}
              alt={instructor.name}
              className="w-8 h-8 rounded-full object-cover border border-gray-100"
            />
            <span className="text-[14px] font-bold text-gray-700">
              {instructor.name}
            </span>
          </div>

          <div className="flex-1"></div>
          <Link href={`/courses/${id}`}>
            <button className="w-full py-3.5 cursor-pointer bg-[#f3f4f6] hover:bg-[#914C00] hover:text-white transition-all duration-300 rounded-xl text-[#945d1d] font-bold text-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
