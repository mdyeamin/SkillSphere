import Image from "next/image";
import React from "react";

const LearnFromBest = () => {
  const instructors = [
    {
      name: "Dr. Elena Thorne",
      role: "Data Scientist at Google",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400", // Representative image
    },
    {
      name: "Marcus Sterling",
      role: "Lead Designer at Meta",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    },
    {
      name: "Amara Okafor",
      role: "Full-stack Architect",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400",
    },
    {
      name: "Jameson Vane",
      role: "Growth Lead at Stripe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    },
  ];
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1c1d1f] mb-16">
          Learn from the Best
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-6">
                <div className="w-40 h-40 md:w-30 md:h-30 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    width={100}
                    height={100}
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-[#1c1d1f]">
                  {instructor.name}
                </h3>
                <p className="text-sm font-medium text-[#914c00]">
                  {instructor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnFromBest;
