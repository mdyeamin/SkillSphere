import { getCourse } from "@/data";
import React from "react";
import CourseCard from "../shared/CourseCard";
import Link from "next/link";

const PopularCourse = async () => {
  const popularCourse = await getCourse();

  return (
    <section className="py-12 bg-gray-50 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section based on image_d7a753.jpg */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1d1f]">
              Popular Courses
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Pick up where the world is heading.
            </p>
          </div>

          <Link href={"/courses"}>
            <button className="cursor-pointer group flex items-center gap-2 text-[#914c00] font-bold transition-all duration-300">
              <span className="">View all courses</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {popularCourse.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
