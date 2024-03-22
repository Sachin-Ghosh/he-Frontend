// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// const providers = [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   }),
//   // Add other authentication providers here
// ];

// const options = {
//   providers,
//   // Your other options
// };

// export default (req, res) => NextAuth(req, res, options);

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          },
          authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?redirect_uri='+encodeURIComponent(process.env.NEXTAUTH_URL)+'/api/auth/callback/google',
        })
      ],
      callbacks:{
        async session({session}){
         return session;
        }
      }
  })