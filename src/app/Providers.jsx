'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProviderContext } from '../context/AuthContext';

export const AuthProvider = ({ children }) => {
  return (
    <GoogleOAuthProvider
      clientId={
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
        'dummy-client-id-replace-me.apps.googleusercontent.com'
      }
    >
      <AuthProviderContext>{children}</AuthProviderContext>
    </GoogleOAuthProvider>
  );
};
