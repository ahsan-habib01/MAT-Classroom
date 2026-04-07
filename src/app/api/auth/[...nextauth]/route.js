import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const rawApiUrl =
            process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
          const API_URL = rawApiUrl.endsWith('/api')
            ? rawApiUrl
            : `${rawApiUrl}/api`;
          const res = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const text = await res.text();
          let user;
          try {
            user = JSON.parse(text);
          } catch (e) {
            console.error('Non-JSON response:', text);
            throw new Error('Server error');
          }

          if (res.ok && user) {
            return user;
          } else {
            throw new Error(user.message || 'Invalid email or password');
          }
        } catch (error) {
          console.error('Error: ', error);
          if (error.message) {
            throw error;
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        try {
          const { name, email } = user;
          const rawApiUrl =
            process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
          const API_URL = rawApiUrl.endsWith('/api')
            ? rawApiUrl
            : `${rawApiUrl}/api`;

          const res = await fetch(`${API_URL}/users/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error('API Error Response:', text);
            return false;
          }
        } catch (error) {
          console.error('Error saving Google user: ', error);
          return false;
        }
      }
      return true;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
