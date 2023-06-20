import Image from 'next/image'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import LoginBox from "@/components/auth/LoginBox";
import Header from "@/components/dashbord/Header";

export default function login() {
    return (

        <>
            {/*<div className={"flex h-[8vh]"}>*/}
            {/*    <Header />*/}
            {/*</div>*/}
                <div className={"h-screen w-screen flex justify-center items-center"}>
                    <LoginBox/>
                </div>
        </>

    )
}


