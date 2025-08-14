// lib/auth.ts
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Demo",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ⚠️ DEMO: accept anything that looks like an email
        const email = credentials?.email?.toString().trim() || "";
        const password = credentials?.password?.toString() || "";
        if (!email.includes("@") || password.length < 1) return null;

        // Return a minimal user object
        return { id: email, name: email.split("@")[0], email };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in", // use your custom page
  },
};
