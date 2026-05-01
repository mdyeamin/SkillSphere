"use client";
import { getCategory } from "@/data";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { ClockLoader } from "react-spinners";

const CategoryFilterAndSearch = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Courses");

  useEffect(() => {
    getCategory().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);
 

  console.log(categories);

  return (
    <section className="w-full py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Search Field Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          {/* Left Side: Title and Description */}
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Course Catalog
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Discover your next milestone from our curated expert library.
            </p>
          </div>

          {/* Right Side: Search Field */}
          <div className="relative w-full md:w-80 lg:w-[400px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for courses, skills..."
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#914C00] focus:ring-4 focus:ring-[#914C00]/5 focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Categories Filter - Smaller & Compact Buttons */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {loading ? (
            <div className="w-full md:w-6/12 mx-auto">
              <ClockLoader size={20}/>
            </div>
          ) : (
            categories.map((cat) => {
              const Icon = FaIcons[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all border whitespace-nowrap ${
                    activeCategory === cat.name
                      ? "bg-[#613400] text-white border-[#613400] shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#914C00] hover:text-[#914C00] hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon size={20} />}
                  {cat.name}
                </button>
              );
            })
          )}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CategoryFilterAndSearch;
