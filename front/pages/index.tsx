import ApplicationForm from '@/components/Form/ApplicationForm'
import {myFormContext, useMyFormContext} from '@/utils/formContext'
import AdminLayout from "@/components/Dashbord/AdminLayout";
import { useSession} from "next-auth/react"
export type LoginUserProfileType = {
    name: string,
    image?: string,
    isAdmin: boolean
}

export default function Home() {
  const customCtx = useMyFormContext();
  const session = useSession();

  const user: LoginUserProfileType = { name: "永松光平", image: "/people.jpg", isAdmin: false }
  return (
      <AdminLayout>
          <myFormContext.Provider value={customCtx}>
              <ApplicationForm />
          </myFormContext.Provider>
      </AdminLayout>
  )
}

