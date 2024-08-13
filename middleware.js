
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // do not require sign in
  publicRoutes:["/", "/product-details/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
