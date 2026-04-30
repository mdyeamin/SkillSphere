import React from "react";

import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineDownload, HiOutlineLightBulb } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaArrowUpZA } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

const MasterArt = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#1c1d1f] mb-12">
          Master the Art of Learning
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center group">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-10 bg-[#fdf2e9] rounded-lg flex items-center justify-center">
                <HiOutlineLightBulb className="text-[#b4690e] w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#1c1d1f]">
                Advanced Study Techniques
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Learn how to retain information 4x faster using active recall
                and spaced repetition methods designed by cognitive scientists.
              </p>
              <button className="flex items-center gap-2 text-[#b4690e] font-bold text-sm hover:gap-3 transition-all">
                Read Guide <FaArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex-1">
              <Image
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600"
                alt="Study"
                className="rounded-xl object-cover h-44 w-full shadow-sm"
              />
            </div>
          </div>

          <div className="bg-[#eff2f6] rounded-2xl p-8 space-y-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <MdOutlineTimer className="text-[#3b82f6] w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#1c1d1f]">
              Time Management
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Block your time effectively and eliminate distractions with our
              proven flow-state framework.
            </p>
          </div>

          <div className="bg-[#5c3106] rounded-2xl p-8 space-y-4 text-white">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <FaArrowUpZA className="text-white w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Daily Productivity</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Small habits lead to big results. Build a routine that keeps your
              momentum high every single day.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-1 order-2 md:order-1">
              <Image
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600"
                alt="Goal Setting"
                className="rounded-xl object-cover h-44 w-full shadow-sm"
              />
            </div>
            <div className="flex-1 space-y-4 order-1 md:order-2">
              <div className="md:hidden w-10 h-10 bg-[#f0fdf4] rounded-lg flex items-center justify-center mb-2">
                <GoGoal className="text-[#16a34a] w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#1c1d1f]">
                Goal Setting Frameworks
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Don't just learn, progress. Use our SMART goal templates to
                track your learning journey from beginner to expert.
              </p>
              <button className="flex items-center gap-2 text-[#b4690e] font-bold text-sm group">
                Download Template{" "}
                <HiOutlineDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterArt;
