"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdMenuOpen, MdOutlineRestaurantMenu } from "react-icons/md";
// import logo from 'logo.png'
const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: " My Profile", href: "/my-profile" },
  //   { label: "My Learning", href: "/my-learning" },
  //   { label: "Instructors", href: "/instructors" },
  //   { label: "Resources", href: "/resources" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto">
        <div className="flex h-15 items-center px-6 gap-0">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-[15px] text-gray-900 shrink-0 mr-6"
          >
            <Image src="/logo.png" alt="SkillSphere" width={20} height={20} />
            SkillSphere
          </Link>

          <div className="hidden md:flex items-center gap-0.5 flex-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm rounded-md transition-colors
                  ${
                    isActive
                      ? "text-[#914C00] font-semibold after:absolute after:bottom-[-14px] after:left-3 after:right-3 after:h-[2px] after:bg-[#914C00] after:rounded-t"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="relative hidden md:flex items-center mr-6">
            <svg
              className="absolute left-3 text-gray-400 w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35"
              />
            </svg>
            <input
              type="text"
              placeholder="Search courses"
              className="h-9 w-52 pl-8 pr-3 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#914C00] focus:bg-white transition-colors"
            />
          </div>
          <div className="hidden md:flex items-center gap-2.5 ml-auto">
            <button className="px-4 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
              Log In
            </button>
            <button className="px-5 py-1.5 text-sm font-bold text-white bg-[#914C00] hover:bg-[#7a3f00] rounded-md transition-colors">
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden ml-auto p-1 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <MdOutlineRestaurantMenu /> : <MdMenuOpen />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="flex flex-col gap-0.5 p-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm ${
                      isActive
                        ? "text-[#914C00] font-semibold bg-[#914C00]/5"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 px-4 pb-4 pt-3 border-t border-gray-100">
              <button className="w-full py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50">
                Log In
              </button>
              <button className="w-full py-2 text-sm font-bold text-white bg-[#914C00] hover:bg-[#7a3f00] rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
