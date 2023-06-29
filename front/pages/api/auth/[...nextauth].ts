import NextAuth from "next-auth"
import {NextApiRequest} from "next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // ログイン認証方式設定
    providers: [
        // 
        CredentialsProvider({
            // 認証方式
            name: "メールアドレス",
            credentials: {
                // username: { label: "Username", type: "text", placeholder: "永松光平" },
                email: { label: "Email", type: "email", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" }
                
            },
            // 現在ではすぐ処理されるようになっている。
            async authorize(credentials: Record<any, any>, req: NextApiRequest){
                return credentials;
            }
        })
    ],
})