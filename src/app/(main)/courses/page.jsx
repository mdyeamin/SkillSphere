import CategoryFilterAndSearch from "@/components/shared/CategoryFilterAndSearch";
import CourseCard from "@/components/shared/CourseCard";
import { getCourse } from "@/data";
import React from "react";

const AllCourse = async () => {
  const popularCourse = await getCourse();

  return (
    <section>
      <CategoryFilterAndSearch />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 mb-20 lg:grid-cols-4 gap-5 ">
        {popularCourse.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default AllCourse;
