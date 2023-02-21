import NextAuth from "next-auth/next";
import db from "../../../data/db";
import { CredentialsProvider } from "next-auth/providers";
import User from "../../../models/User";
import bcryptjs from 'bcryptjs';

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if(user?._id) token._id = user._id;
            if(user?._isAdmin) token._isAdmin = user._isAdmin;
            return token;
        },
        async session({ session, token }){
            if(token?._id) session.user._id = token._id;
            if(token?._isAdmin) session.user._isAdmin = token._isAdmin;
            return session;
        },
    },
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                await db.connect();
                const user = await User.findOne({
                    email: credentials.email,
                });
                await db.disconnect();
                if(user && bcryptjs.compareSync(credentials.password, user.password)){
                    return {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        image: 'f',
                        isAdmin: user.isAdmin,
                    };
                }
                throw new Error('Invalid email or password');
            }
        })
    ]
});