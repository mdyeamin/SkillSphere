// app/(auth)/register/page.jsx
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
              className="w-full h-11 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-sm font-medium text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
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