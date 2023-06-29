import { useSession, signIn, signOut } from "next-auth/react"

const LoginBox = () => {
    const session = useSession();
    // console.log(session)
    if (session["status"] != "unauthenticated") {
        return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    ショクハブ
                </a>
                <div className="w-full bg-[rgb(0,81,203)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
                            <div className="text-white">現在ログインされているメールアドレス</div>
                            <div className="text-white">{session.data?.user?.email}</div>
                            
                            <div className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-10 border-b-4 border-blue-500 hover:border-blue-300 rounded" >
                                <button onClick={() => signOut()}>Sign out</button>
                            </div>
                            
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                ショクハブ
            </a>
            <div className="w-full bg-[rgb(0,81,203)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
                        <div className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-10 border-b-4 border-blue-500 hover:border-blue-300 rounded" >
                            <button onClick={() => signIn()}>ログイン</button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            
                            <a href="#" className="font-medium text-white hover:underline ">会員登録</a>
                        </p>
                        <p>
                            <a href="#" className="text-sm font-medium text-white hover:underline">パスワードを忘れてる方</a>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default LoginBox
