import { withAuth } from "next-auth/middleware"
import { type NextRequest, NextResponse } from "next/server"

export const middleware = withAuth(
  function middleware(req: NextRequest) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
}
