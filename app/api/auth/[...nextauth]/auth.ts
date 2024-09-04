import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_SECRECT,
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
        
      }

    })
  ],
  callbacks: {
    async redirect() {
      return "/dashboard"
    }
  },
  pages: {
    signIn: "/login",
    signOut: ""
  }
});
