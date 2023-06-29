import {PickItUp} from "@/utils/customConvinienseType";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/router";
import BoundBox from "@/components/Animation/BoundBox";
import { useSession} from "next-auth/react"

// メニューの型
type menu = {
    name: string
    path: string
}

// 予約数用の用の型
type reservation = PickItUp<menu, "name">  & {value: number}
const Header = () => {
    // session
    const session = useSession();
    // メニュー
    let menus: menu[] = [{name: "ログイン", path: "/login"}, {name: "ユーザー追加", path: "/register"}]
    let UserName:String = ""

    if (session["status"] != "unauthenticated") {
        menus = [{name: "ログアウト", path: "/login"}]
        UserName = String(session.data?.user?.email)
    }
    


    

    // メニューを選択した時のページ遷移の情報を持たせる
    const [path, setPath] = useState<string>("選択してください")

     // routerの生成
    const router = useRouter()

    /**
     * ページ遷移を行う
     * @param event
     */
    const movePage = (event: ChangeEvent<HTMLSelectElement>) => {
        setPath(event.target.value)
        router.push(event.target.value)
    }

    // 予約サイトの累計評価
    const reservations: reservation[] = [
        {name: "食べログ", value: 18 },
        {name: "ぐるなび", value: 4 },
        {name: "Retty", value: 1 },
        {name: "一休.com", value: 7 },
    ]

    // プログレスバー
    const progress = "w-3/4"

    // バウンドボックスを表示させるかどう
    const [showBoundBox, setShowBoundBox] = useState<boolean>(false);

    return (
        <div className={"bg-[rgb(0,81,203)] text-white w-full flex items-center justify-center"}>
            <div className={"w-1/5 text-center"}>
                <div className={"font-bold text-2xl"}>求人ボックス</div>
            </div>
            <div className={"w-4/5 flex items-center justify-around text-sm mx-8"}>
                <div className={"w-1/6"} />
                <div className={"text-white font-bold"}>{UserName}</div>
                <div className={"w-[110px] space-y-1"}>
                    <h3 className={"text-center"}>進捗</h3>
                    <div className={" border border-white"}>
                        <div className={`${progress} border-b-4`} />
                    </div>
                </div>
                {reservations.map((reservation, idx) => (
                    <div key={idx} className={"flex items-center space-x-1"}>
                        <div className={"font-bold"}>{reservation.name}</div>
                        <div className={"bg-[rgb(26,98,298)] px-2 py-1"}>{reservation.value}<span>件</span></div>
                    </div>
                ))}
                <svg className={"fill-[#f9fafb] cursor-pointer w-4 h-4"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                <div className={"relative"}
                >
                    <svg
                        onMouseEnter={() => setShowBoundBox(true)}
                        onMouseLeave={() => setShowBoundBox(false)}
                        className={"fill-[#f9fafb] cursor-pointer w-4 h-4"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    <div className={showBoundBox ? "absolute top-12 w-[150px] opacity-100" : "absolute top-12 w-[150px] opacity-0"}>
                        <BoundBox text={"ここに説明を入力するよ。<br />使い方がわからないときはクリックしてね"} />
                    </div>
                </div>
                <select　
                    className={"bg-[rgb(0,81,203)] border px-2 py-1 cursor-pointer"}
                    name="action"
                    id="action"
                    value={path} // プロパティを合わせるために動的にした
                    onChange={(event) => movePage(event)}
                >
                    <option value="選択してください">選択してください</option>
                    {menus.map((menu, index) => (
                        <option value={menu.path} key={index}>{menu.name}</option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default Header
