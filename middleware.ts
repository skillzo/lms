import { NextResponse } from "next/server";

export function middleware(request: NextResponse) {
  return NextResponse.redirect("/");
}
