import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req) {
    return null; 
  },
  {
    isReturnToCurrentPage: true, 
    loginPage: "/api/auth/[kindeAuth]",
  }
);

export const config = {
  matcher: ["/profile"],
};
