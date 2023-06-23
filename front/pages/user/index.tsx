import AdminLayout from "@/components/Dashbord/AdminLayout";
import UserList from "@/components/user/UserList";

export default function Home() {

    return (
        <AdminLayout>
            <div className={"mt-8 w-11/12 mx-auto"}>
                <UserList />
            </div>
        </AdminLayout>
    )
}

