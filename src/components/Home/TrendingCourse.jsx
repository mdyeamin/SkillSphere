import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TrendingCourse = () => {
    const trendingData = [
    {
      id: "01",
      title: "Python for Data Science",
      students: "12.5k Students enrolled",
      bgColor: "bg-[#ff9500]", 
    },
    {
      id: "02",
      title: "AI-Driven UI Design",
      students: "8.9k Students enrolled",
      bgColor: "bg-[#80aaff]", 
    },
    {
      id: "03",
      title: "Web3 Fundamentals",
      students: "5.2k Students enrolled",
      bgColor: "bg-[#1c2a39]", 
    }
  ];
    return (
       <section className="py-12 px-6 max-w-7xl mx-auto font-sans">
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1d1f]">
          Trending Courses
        </h2>
        
        <div className="flex gap-3">
          <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
            <FiChevronLeft size={24} />
          </button>
          <button className="p-2 rounded-full bg-[#914c00] text-white hover:bg-[#7a3f00] transition-colors">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingData.map((course) => (
          <div 
            key={course.id} 
            className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer"
          >
            
            <div className={`${course.bgColor} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-sm`}>
              {course.id}
            </div>

            
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#1c1d1f] leading-tight">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {course.students}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TrendingCourse;