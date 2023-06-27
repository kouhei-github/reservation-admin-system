import Image from 'next/image'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import LoginBox from "@/components/Auth/LoginBox";
import Header from "@/components/Dashbord/Header";
import AdminLayout from "@/components/Dashbord/AdminLayout";
export default function login() {
    return (

        <AdminLayout>
            <div className={"flex justify-center items-center"}>
                <LoginBox/>
            </div>
        </AdminLayout>
        
        

    )
}


