
import { getCOurse } from "@/data";
import React from "react";
import CourseCard from "../shared/CourseCard";


const PopularCourse = async() => {
    const popularCourse = await getCOurse();
    
    return (
        <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-50">
     {popularCourse.slice(0,3).map(course=> <CourseCard key={course.id} course={course}/>)}
     
    </div>
    );
};

export default PopularCourse;