import Header from "@/components/dashbord/Header";
import ApplicationForm from '@/components/Form/ApplicationForm'
import {myFormContext, useMyFormContext} from '@/utils/formContext'
import SideBar from "@/components/common/SideBar";

export default function Home() {
  const customCtx = useMyFormContext();
  return (
      <div className={"min-h-screen"}>
          <div className={"flex h-[8vh]"}>
              <Header />
          </div>

          <div className={"flex h-[92vh] w-full bg-[rgb(0,81,203)]"}>
              <div className={"w-1/5 h-full overflow-y-scroll text-white text-center bg-[rgb(0,81,203)]"}>
                  <SideBar />
              </div>
              <div className={"w-4/5 h-full text-center overflow-y-scroll bg-white rounded-tl-2xl"}>
                <myFormContext.Provider value={customCtx}>
                  <ApplicationForm />
                </myFormContext.Provider>
              </div>
          </div>
      </div>
  )
}

