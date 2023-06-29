

const LoginBox = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                ショクハブ
            </a>
            <div className="w-full bg-[rgb(0,81,203)] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-8 space-y-4 md:space-y-6 sm:p-8">
                
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                メールアドレス
                            </label>
                            <input type="email" name="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                パスワード
                            </label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-400">ログイン情報保存</label>
                                </div>
                            </div>
                        </div>
                
                        <button type="submit" className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-10 border-b-4 border-blue-500 hover:border-blue-300 rounded">ログイン</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            
                            <a href="/add" className="font-medium text-white hover:underline ">会員登録</a>
                        </p>
                        <p>
                            <a href="#" className="text-sm font-medium text-white hover:underline">パスワードを忘れてる方</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginBox
