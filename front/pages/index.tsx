import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/dashbord/Header";
import ApplicationForm from '@/components/Form/ApplicationForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={"min-h-screen"}>
          <div className={"flex h-[8vh]"}>
              <Header />
          </div>

          <div className={"flex h-[92vh] w-full bg-[rgb(0,81,203)]"}>
              <div className={"w-1/5 h-full text-white text-center bg-[rgb(0,81,203)]"}>サイドバー</div>
              <div className={"w-4/5 h-full text-center overflow-y-scroll bg-white rounded-tl-2xl"}>
                <ApplicationForm />
              </div>
          </div>
      </div>
  )
}

