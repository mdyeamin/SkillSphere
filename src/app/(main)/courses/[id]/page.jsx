import { getCOurseDetails } from '@/data';
import Image from 'next/image';
import React from 'react';
import { BiCheckCircle, BiChevronDown, BiPlayCircle } from 'react-icons/bi';
import { BsInfinity, BsPlayCircle, BsPlayCircleFill } from 'react-icons/bs';
import { CgSmartphone } from 'react-icons/cg';
import { FaPlayCircle } from 'react-icons/fa';
import { LuAward, LuClock3, LuFileText, LuGift, LuLock, LuShare2, LuUser } from 'react-icons/lu';


const CourseDetails =async ({params}) => {
    const {id} = await params;
    // console.log(id);
    const courseDetails =await  getCOurseDetails(id)
   const {title,image,badge,details,rating,discount_price,category,long_description,what_you_will_learn,price,level,instructor} = courseDetails
    
  return (
    <div className="min-h-screen bg-white font-sans text-[#1c1d1f]">
      
      {/* Header / Hero Section */}
      <section className="relative bg-[#1c1d1f] text-white py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block bg-[#f28e2b] text-[#1c1d1f] text-[10px] font-bold px-2 py-1 uppercase rounded-sm">
              {badge}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
             {long_description}
            </p>
          </div>
        </div>
      </section>

      
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12 relative">
        
        
        <div className="lg:col-span-2 space-y-12">
          
          
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
              <LuFileText className="text-gray-600" /> Course Overview
            </h2>
            <div className="border border-gray-200 rounded-xl p-6 md:p-8 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {details.long_description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {details.what_you_will_learn.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <BiCheckCircle className="text-[#a435f0] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Instructor Section */}
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
              <LuUser className="text-gray-600" /> Your Instructor
            </h2>
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6">
              <Image
              width={50}
              height={50} 
                src={instructor.image_url} 
                alt={instructor.name} 
                className="w-32 h-32 rounded-lg object-cover border-4 border-[#f28e2b]/20"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{instructor.name}</h3>
                <p className="text-[#914c00] font-bold text-sm">{instructor.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {instructor.about}
                </p>
              </div>
            </div>
          </section>

          {/* Course Content */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <BiPlayCircle className="text-gray-600" /> Course Content
              </h2>
              <span className="text-xs text-gray-500 font-medium">32 sections • 482 lectures • 52h 14m total length</span>
            </div>
            
            <div className="space-y-3">
              {/* Active Accordion */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer border-b border-gray-200">
                  <div className="flex items-center gap-3 font-bold text-sm">
                    <BiChevronDown /> Section 1: Introduction to Web Development
                  </div>
                  <span className="text-xs text-gray-500">5 lectures • 45m</span>
                </div>
                <div className="p-2 bg-white">
                  <div className="flex justify-between items-center p-3 text-sm hover:bg-gray-50 rounded">
                    <div className="flex items-center gap-3"><BsPlayCircle className="text-gray-400" /> Welcome to the Course!</div>
                    <span className="text-[#a435f0] font-bold cursor-pointer underline">Preview</span>
                  </div>
                  <div className="flex justify-between items-center p-3 text-sm hover:bg-gray-50 rounded">
                    <div className="flex items-center gap-3"><BsPlayCircleFill className="text-gray-400" /> How the Web Works</div>
                    <span className="text-gray-400">08:12</span>
                  </div>
                </div>
              </div>

              
              {[2, 3].map((num) => (
                <div key={num} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white">
                  <div className="flex items-center gap-3 font-bold text-sm text-gray-500">
                    <LuLock className="text-gray-400" /> Section {num}: {num === 2 ? "Professional HTML Structure" : "Intermediate CSS Styling"}
                  </div>
                  <span className="text-xs text-gray-500">{num === 2 ? "12 lectures • 2h 15m" : "18 lectures • 4h 20m"}</span>
                </div>
              ))}

              <button className="w-full py-3 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                View All 32 Sections
              </button>
            </div>
          </section>
        </div>

        
        <div className="lg:relative">
          <div className="lg:absolute lg:-top-64 right-0 w-full lg:w-[350px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-30">
            
            <div className="relative group cursor-pointer">
              <Image 
                src={image}
                width={100}
                height={100}
                className="w-full h-48 object-cover" 
                alt="Video Preview"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1c1d1f] text-2xl pl-1 shadow-lg group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-wider">Preview this course</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">${discount_price}</span>
                <span className="text-gray-400 line-through text-sm">${price}</span>
                <span className="bg-[#f28e2b]/10 text-[#914c00] text-[10px] font-bold px-2 py-0.5 rounded">50% OFF</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[#b4690e] font-bold">
                <LuClock3 /> 2 days left at this price!
              </div>

              <div className="space-y-3">
                <button className="w-full py-4 bg-[#914c00] hover:bg-[#7a3f00] text-white font-bold rounded-lg transition-colors">
                  Buy This Course
                </button>
                <button className="w-full py-4 border border-[#1c1d1f] hover:bg-gray-50 font-bold rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-bold uppercase text-gray-500">This course includes:</p>
                <div className="space-y-3">
                  {[
                    { icon: <FaPlayCircle />, text: "52 hours on-demand video" },
                    { icon: <LuFileText />, text: "15 articles & 25 downloads" },
                    { icon: <BsInfinity />, text: "Full lifetime access" },
                    { icon: <CgSmartphone />, text: "Access on mobile and TV" },
                    { icon: <LuAward />, text: "Certificate of completion" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-xs text-gray-700">
                      <span className="text-gray-400 text-lg">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-100 text-[10px] font-bold uppercase text-gray-600">
                <button className="flex items-center gap-2 hover:text-black"><LuShare2 /> Share</button>
                <button className="flex items-center gap-2 hover:text-black"><LuGift /> Gift this course</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default CourseDetails;