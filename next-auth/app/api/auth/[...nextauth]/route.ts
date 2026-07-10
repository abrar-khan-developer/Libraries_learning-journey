import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/lib/users";

const handler = NextAuth({

  providers: [

    CredentialsProvider({

      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        const user = users.find( (user) => user.email === credentials?.email && user.password === credentials?.password);

        if (user) {
            return user;
        }

        return null;
      },

    }),

  ],

});

export { handler as GET, handler as POST };