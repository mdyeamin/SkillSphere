"use client"
import React from "react";
import { FiSearch, FiAlertCircle } from "react-icons/fi";

const NoProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-10 mb-10 text-center w-full">
      {/* ছোট আইকন বক্স */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
          <FiSearch className="w-8 h-8 text-[#914C00] opacity-30" />
        </div>
        <FiAlertCircle className="absolute -top-1 -right-1 text-orange-400 bg-white rounded-full w-5 h-5" />
      </div>

      {/* টেক্সট মেসেজ */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        No Data Found
      </h3>
      <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed">
        We couldn&apos;t find what you&apos;re looking for. Please try a different category or keyword.
      </p>

      {/* রিলোড বাটন */}
      <button 
        onClick={() => window.location.reload()}
        className="mt-6 text-xs font-bold text-[#914C00] uppercase tracking-widest hover:underline transition-all"
      >
        Try Refreshing
      </button>
    </div>
  );
};

export default NoProduct;