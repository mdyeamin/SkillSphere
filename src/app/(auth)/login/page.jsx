// app/(auth)/login/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  Description,
} from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const { data, error } = await authClient.signIn.email({
      email: formData.email, // required
      password: formData.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Login successfully!", {
        style: {
          background: "#fff",
          color: "#1a1a1a",
          border: "1px solid #e8e3de",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "500",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "#914C00",
          secondary: "#fff",
        },
      });
      router.push("/");
    }
    if (error) {
      toast.error(`${error.message}`, {
        style: {
          background: "#fff",
          color: "#1a1a1a",
          border: "1px solid #fecaca",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "500",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fff",
        },
      });
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };
  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-gray-50 to-orange-50/60 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        {/* ── Left panel ── */}
        <div className="hidden md:flex flex-col items-center justify-between p-8 bg-gradient-to-br from-[#7a3500] via-[#914C00] to-[#b35e00] relative overflow-hidden">
          <div className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 rounded-full bg-white/5" />

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-white leading-snug mb-3">
              Unlock Your Potential
              <br />
              with SkillSphere
            </h2>
            <p className="text-sm text-orange-100/80 leading-relaxed max-w-[220px] mx-auto">
              Join a community of lifelong learners and master new skills with
              momentum and clarity.
            </p>
          </div>

          <div className="relative z-10 w-full mt-6">
            <Image
              src="/login.png"
              alt="Learning illustration"
              width={600}
              height={300}
              className="w-full h-40 lg:h-48 object-cover object-top opacity-80 rounded-xl"
            />
          </div>
        </div>

        <div className="p-6 sm:p-10 flex flex-col justify-center overflow-y-auto">
          <div className="mb-5 text-center">
            <h1 className="text-xl font-black text-[#914C00] tracking-tight">
              SkillSphere
            </h1>
            <p className="text-lg font-bold text-gray-900 mt-0.5">
              Welcome back
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Please enter your details to sign in.
            </p>
          </div>

          <Form className="flex flex-col gap-3" onSubmit={onSubmit}>
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
              <Label className="text-xs font-semibold text-gray-600">
                Email Address
              </Label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="name@company.com"
                  className="w-full h-10 pl-9 pr-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors "
                />
              </div>
              <FieldError className="text-[11px] text-red-500" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
              className="flex flex-col gap-1.5"
              validate={(v) => {
                if (v.length < 8) return "Must be at least 8 characters long.";

                return null;
              }}
            >
              <Label className="text-xs font-semibold text-gray-600">
                Password
              </Label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="••••••••"
                  className="w-full h-10 pl-9 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
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
              className="mt-1 w-full h-11 rounded-xl bg-[#914C00] hover:bg-[#7a3f00] text-white text-sm font-bold transition-colors flex items-center justify-center"
            >
              Login
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[11px] text-gray-300 tracking-widest uppercase">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <Button
              onClick={signInWithGoogle}
              type="button"
              className="w-full h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-sm font-medium text-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Login with Google
            </Button>

            <p className="text-center text-sm text-gray-400 mt-1">
              Don&apos;t have an account? <br />
              <Link
                href="/register"
                className="text-[#914C00] font-bold text-sm hover:underline"
              >
                Register for an account
              </Link>
            </p>
          </Form>

          {success && (
            <div className="mt-4 flex items-center gap-3 p-3.5 rounded-xl bg-green-50 border border-green-200">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800">
                  Successfully Logged In
                </p>
                <p className="text-xs text-green-600">
                  Redirecting to dashboard...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
