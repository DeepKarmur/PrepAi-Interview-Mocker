// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//     '/dashboard(.*)',
//      '/forum(.*)'
//     ]);

// export default clerkMiddleware((auth, req) => {
//      if (isProtectedRoute(req)) auth().protect()
//     // if (isProtectedRoute(req.nextUrl.pathname)) auth().protect();

//   });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/forum(.*)'
]);

export default clerkMiddleware((auth, req) => {
  try {
    // Make sure nextUrl exists and get the pathname
    if (req.nextUrl && req.nextUrl.pathname) {
      const pathname = req.nextUrl.pathname;
      
      // Check if the current path matches any protected routes
      if (isProtectedRoute(pathname)) {
        auth().protect();
      }
    }
  } catch (error) {
    console.error("Middleware error:", error);
    // In case of error, let the request continue
    // You could redirect to an error page instead if preferred
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
