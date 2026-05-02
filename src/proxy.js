import { headers } from "next/headers";
import { auth } from "./app/lib/auth";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If there is no session, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If session exists, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  // This matcher ensures the middleware ONLY runs on these specific routes
  matcher: [
    "/my-profile",
    "/courses/:id+", // The '+' ensures it matches /courses/1 and not just /courses
  ],
};