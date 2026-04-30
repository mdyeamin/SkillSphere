import Image from "next/image";
import Link from "next/link";
import {
  FiHome,
  FiAlertCircle,
  FiBookOpen,
  FiHelpCircle,
  FiWifi,
} from "react-icons/fi";
const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative flex items-center justify-center order-2 md:order-1">
          <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm overflow-hidden">
            <Image
              src="/notFoundImg.png"
              alt="SkillSphere 404"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 bg-white rounded-xl shadow-md px-3 py-2.5 sm:px-4 sm:py-3 max-w-[140px] sm:max-w-[160px] border border-gray-100">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <FiWifi className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#914C00]" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-800">
                System Status
              </p>
            </div>
            <p className="text-[9px] sm:text-[10px] text-gray-400 leading-snug">
              Searching through 10,000+ courses… Destination not found in our
              current orbit.
            </p>
          </div>

          <div
            className="absolute top-6 left-8 w-3 h-3 rounded-full bg-orange-300 opacity-60 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-16 right-6 w-2 h-2 rounded-full bg-purple-300 opacity-60 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute bottom-16 left-6 w-2 h-2 rounded-full bg-blue-300 opacity-60 animate-bounce"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        <div className="space-y-5 sm:space-y-6 order-1 md:order-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#914C00]/30 bg-[#914C00]/5 text-[#914C00] text-xs font-medium">
              <FiAlertCircle className="w-3.5 h-3.5" />
              Error Code: 404
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Oops!
            </h1>
            <h2 className="text-3xl sm:text-4xl font-black text-[#914C00] leading-tight">
              Page not found
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            It seems you&apos;ve wandered into an uncharted corner of
            SkillSphere. Don&apos;t worry, even the best learners get lost
            sometimes.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#914C00] hover:bg-[#7a3f00] text-white text-sm font-bold transition-colors"
            >
              <FiHome className="w-4 h-4" />
              Back to Home
            </Link>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors">
              <FiAlertCircle className="w-4 h-4" />
              Report an Issue
            </button>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">
              Quick Destinations
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-[#914C00]/40 hover:bg-[#914C00]/5 text-gray-600 hover:text-[#914C00] text-sm transition-all"
              >
                <FiBookOpen className="w-4 h-4" />
                Popular Courses
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-600 text-sm transition-all"
              >
                <FiHelpCircle className="w-4 h-4" />
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
