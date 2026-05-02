"use client";
import { authClient } from "@/app/lib/auth-client";
import UpdateProfile from "@/components/shared/UpdateProfile";
import Image from "next/image";
import React from "react";
import { LuMail, LuPencil} from "react-icons/lu";
import { ClockLoader } from "react-spinners";

const MyProfile = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;
  console.log(user?.name, isPending);

  return (
    <div className="p-6 bg-gray-50 min-h-[300px] flex items-center justify-center font-sans">
      {isPending  ? (
        <div className="w-12 mx-auto">
          <ClockLoader size={50} />
        </div>
      ) : user ? (
        <div className="w-full max-w-6xl bg-white rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-10">
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={user?.image}
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="absolute bottom-1 right-1 bg-[#ff8c00] p-2 rounded-full border-2 border-white text-white shadow-lg hover:bg-[#e67e00] transition-colors">
                <LuPencil size={16} strokeWidth={3} />
              </button>
            </div>

            <div className="text-center md:text-left space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1c1d1f]">
                {user?.name}
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 font-medium">
                <LuMail size={18} className="text-gray-400" />
                <span className="text-sm md:text-base">{user?.email}</span>
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

          
<UpdateProfile/>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50 to-transparent opacity-50 -z-0 pointer-events-none" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyProfile;
