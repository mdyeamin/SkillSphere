import Image from "next/image";
import React from "react";
import { LuMail, LuPencil, LuSettings2, LuShare2 } from "react-icons/lu";

const MyProfile = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-[300px] flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 shadow-sm relative overflow-hidden">
        {/* Profile Info Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-10">
          {/* Avatar with Edit Icon */}
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
              <Image
              width={100}
              height={100}
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="absolute bottom-1 right-1 bg-[#ff8c00] p-2 rounded-full border-2 border-white text-white shadow-lg hover:bg-[#e67e00] transition-colors">
              <LuPencil size={16} strokeWidth={3} />
            </button>
          </div>

          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1c1d1f]">
              Alex Rivera
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 font-medium">
              <LuMail size={18} className="text-gray-400" />
              <span className="text-sm md:text-base">
                alex.rivera@skillsphere.edu
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <span className="bg-[#eef2ff] text-[#4f46e5] px-3 py-1 rounded-full text-xs font-bold">
                Pro Member
              </span>
              <span className="bg-[#fff1e7] text-[#b4690e] px-3 py-1 rounded-full text-xs font-bold">
                12 Badges
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-auto z-10">
          <button className="flex items-center justify-center gap-2 bg-[#914c00] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#7a3f00] transition-all shadow-sm">
            <LuSettings2 size={18} />
            Update Profile
          </button>

          <button className="flex items-center justify-center gap-2 bg-white text-[#1c1d1f] border border-gray-200 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
            <LuShare2 size={18} className="text-gray-500" />
            Public Profile
          </button>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50 to-transparent opacity-50 -z-0 pointer-events-none" />
      </div>
    </div>
  );
};

export default MyProfile;
