

const LoginBox = () => {
    return (
        <div className={"w-[350px] h-56 bg-blue-200 rounded-lg border-2 shadow-lg"}>
            <div className={"m-2 p-2"}>
                <div className={"flex justify-center items-center"}>
                    <svg className={"h-7"} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                </div>
                <div className={"text-center"}>
                    ログイン画面
                </div>

                    <form>
                        <div className={"flex row-auto mt-4"}>
                            <div className={"m-1 row-auto"}>
                                <div className={"mb-1"}>
                                    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                </div>
                                <div className={"mb-1"}>
                                    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                </div>

                            </div>

                            <div className={"m-1 row-auto"}>
                                <input type={"email"} id="" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you@example.com"/>
                                <input type={"password"} id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"/>
                            {/*みないでくださいい^^*/}
                            </div>
                            <div className={"m-1 text-right row-auto items-center mt-3"}>
                                <a className={"cursor-pointer"}>
                                    <svg className="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24"
                                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                                        <path d="M20 12h-13l3 -3m0 6l-3 -3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default LoginBox
