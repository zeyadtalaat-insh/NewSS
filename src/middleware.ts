import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_COUNTRIES = ["US", "CA"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Geo-lock /na routes to US and Canada
  if (pathname.startsWith("/na")) {
    const country =
      request.headers.get("x-vercel-ip-country") ||
      "";

    // In production, block non-US/CA visitors
    if (country && !ALLOWED_COUNTRIES.includes(country)) {
      return NextResponse.redirect(new URL("https://www.superstudios.ai"));
    }
  }

  // Inject pathname so root layout can set correct html lang/dir
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|icons).*)"],
};
