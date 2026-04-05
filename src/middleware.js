export { default } from 'next-auth/middleware';

// Specify paths that require the user to be logged in before viewing
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/checkout/:path*'],
};
