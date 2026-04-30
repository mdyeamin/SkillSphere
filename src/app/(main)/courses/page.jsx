
import CourseCard from "@/components/shared/CourseCard";
import { getCOurse } from "@/data";
import React from "react";



const AllCourse = async() => {
    const popularCourse = await getCOurse();
    
    return (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
     {popularCourse.map(course=> <CourseCard key={course.id} course={course}/>)}
     
    </div>
    );
};

export default AllCourse;