import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const isArPath = request.nextUrl.pathname.startsWith("/ar");
  response.cookies.set("lang", isArPath ? "ar" : "en", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico|llms.txt|sitemap|robots).*)"],
};
