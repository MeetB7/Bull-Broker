import NextAuth, { CredentialsSignin } from "next-auth";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRECT,
      profile(profile) {
        console.log("Profile_Github: ", profile);

        return {
          id: String(profile.id),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),

    credentials({
      name: "Credentials",

      credentials: {
        email: {label: "email", type:"email"},
        password: {label: "password", type:"password"},
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined
        
        if(!email || !password){
          throw new CredentialsSignin("Please provide email and password")
        }

        await connectDB()

        const exists = await User.findOne({email}).select("+password +role")
        
        if (!exists){
          throw new CredentialsSignin("Invalid Email")
        }

        if (!exists.password){
          throw new CredentialsSignin("Invalid Email or Password")
        }

        const isMatch = await compare(password,exists.password);

        if (!isMatch){
          throw new CredentialsSignin("Wrong Password")
        }

        const userData = {
          name: exists.name,
          email: exists.email,
          role: exists.role,
          id: exists.id,
        }

        return userData;
      }
    }),

    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile){
        console.log(profile)
        return {
          id: String(profile.id),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      }
    }),
  ],


  callbacks: {
    async redirect() {
      return "/dashboard";
    },
  },
  
  pages: {
    signIn: "/login",
    signOut: "",
  },
});
