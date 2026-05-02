import CategoryFilterAndSearch from "@/components/shared/CategoryFilterAndSearch";
import CourseCard from "@/components/shared/CourseCard";
import { getCourse } from "@/data";
import React, { Suspense } from "react";
import { ClockLoader } from "react-spinners";

export async function generateMetadata({ params,  }, parent) {
  



  return {
    title: "SkillSphere - Course"  ,
    description: "Discover your next milestone from our curated expert library.",
  };
}
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

  return (
    <section>
      <CategoryFilterAndSearch
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <Suspense
        fallback={
          <div className="w-12 h-screen mx-auto">
            <ClockLoader size={100} />
          </div>
        }
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 mb-20 lg:grid-cols-4 gap-5 ">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default AllCourse;
