
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Form, TextField, Label, Input,
  FieldError, Button, Description,
} from "@heroui/react";
import {
  FiUser, FiMail, FiLock, FiImage,
  FiEye, FiEyeOff, FiArrowRight,
} from "react-icons/fi";
import { AiFillGoogleCircle } from "react-icons/ai";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-gray-50 to-orange-50/60 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">

        {/* ── Left panel ── */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-stone-50 to-orange-50/50 border-r border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <Image src="/logo.png" alt="SkillSphere" width={26} height={26} />
              <span className="font-extrabold text-[15px] text-gray-900">SkillSphere</span>
            </div>
            <h2 className="text-[22px] font-black text-gray-900 leading-snug mb-3">
              Master your craft with{" "}
              <span className="text-[#914C00]">momentum.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Join 50,000+ learners accelerating their careers through
              high-impact courses and professional mentorship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-10">
            {[
              { value: "1.2k+", label: "Expert Instructors" },
              { value: "94%",   label: "Course Completion"  },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-stone-200 bg-white">
                <p className="text-lg font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          <div className="mb-7">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Start your learning journey in minutes.
            </p>
          </div>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

            {/* Full Name + Photo URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField isRequired name="fullName" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-600">Full Name</Label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="John Doe"
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors"
                  />
                </div>
                <FieldError className="text-[11px] text-red-500" />
              </TextField>

              <TextField name="photoUrl" className="flex flex-col gap-1.5">
                <Label className="text-xs font-semibold text-gray-600">Photo URL</Label>
                <div className="relative">
                  <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://example.com/avatar."
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors"
                  />
                </div>
                <FieldError className="text-[11px] text-red-500" />
              </TextField>
            </div>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="flex flex-col gap-1.5"
              validate={(v) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? "Please enter a valid email address"
                  : null
              }
            >
              <div className="flex items-center justify-between">
                <Label className="text-xs font-semibold text-gray-600">Email</Label>
                <FieldError className="text-[11px] text-red-500" />
              </div>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="john@example.com"
                  className="w-full h-10 pl-9 pr-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors invalid:border-red-400 invalid:bg-red-50/60"
                />
              </div>
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              className="flex flex-col gap-1.5"
              validate={(v) => {
                if (v.length < 8)     return "Must be at least 8 characters long.";
                if (!/[A-Z]/.test(v)) return "Must contain at least one uppercase letter.";
                if (!/[0-9]/.test(v)) return "Must contain at least one number.";
                return null;
              }}
            >
              <Label className="text-xs font-semibold text-gray-600">Password</Label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="••••••••"
                  className="w-full h-10 pl-9 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors invalid:border-red-400 invalid:bg-red-50/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword
                    ? <FiEyeOff className="w-4 h-4" />
                    : <FiEye className="w-4 h-4" />
                  }
                </button>
              </div>
              <Description className="text-[11px] text-gray-400 mt-0.5">
                Must be at least 8 characters long.
              </Description>
              <FieldError className="text-[11px] text-red-500" />
            </TextField>

            {/* Submit */}
            <Button
              type="submit"
              className="mt-1 w-full h-11 rounded-xl bg-[#914C00] hover:bg-[#7a3f00] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2"
            >
              Create Account
              <FiArrowRight className="w-4 h-4" />
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[11px] text-gray-300 tracking-widest uppercase">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Google */}
            <Button
              type="button"
              className="w-full h-11 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <AiFillGoogleCircle />
              Google Register
            </Button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-400 mt-1">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#914C00] font-bold text-sm hover:underline"
              >
                Login
              </Link>
            </p>

          </Form>
        </div>
      </div>
    </div>
  );
}