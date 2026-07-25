import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { auth } from "./app/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile","/books/:path"]
};
