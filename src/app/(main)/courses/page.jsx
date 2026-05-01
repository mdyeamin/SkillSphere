import CategoryFilterAndSearch from "@/components/shared/CategoryFilterAndSearch";
import CourseCard from "@/components/shared/CourseCard";
import { getCourse } from "@/data";
import React from "react";

const AllCourse = async ({ searchParams }) => {
  const params = await searchParams;
  const popularCourse = await getCourse();

  const selectedCategory = params?.category || "All";

  const searchQuery = params?.search?.toLowerCase() || "";

  const filteredCourses = popularCourse
    .filter((course) =>
      selectedCategory === "All"
        ? true
        : course.category.toLowerCase() === selectedCategory.toLowerCase(),
    )
    .filter((course) =>
      searchQuery ? course.title.toLowerCase().includes(searchQuery) : true,
    );
  console.log(filteredCourses, 555);

  return (
    <section>
      <CategoryFilterAndSearch
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 mb-20 lg:grid-cols-4 gap-5 ">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default AllCourse;
