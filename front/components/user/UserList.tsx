import ConsumerTable, { TableBody} from "@/components/Common/ConsumerTable";
import ConsumerTableHeader from "@/components/Common/ConsumerTableHeader";
import SettingIcon from "@/styles/SettingIcon";
import {PickItUp} from "@/utils/customConvinienseType";
import PageNation from "@/components/Common/PageNation";
import {pageNationCtx, usePageNationCtx} from "@/utils/pageNationContext";
import SearchBox from "@/components/Common/SearchBox";

const UserList = () => {
    const header: PickItUp<TableBody, "text">[] = [
        { text: "No."},
        { text: "名前"},
        { text: "電話番号"},
        { text: "予約媒体"},
        { text: "来店回数"},
        { text: "確認"},
        { text: "操作"},

    ]

    const body: TableBody[][] =[
        [
            {text: "永松光平", center:false},
            {text: "09088880000", center:false},
            {text: "食べログ", center:false},
            {text: "3", center:false},
            {text: "詳細を見る", icon:<div className={"text-green-500 hover:underline cursor-pointer"}>詳細を見る</div>, center:false},
            {text: "3", icon: <div className={"w-1/3 mx-auto bg-pink-500 hover:bg-white py-1 cursor-pointer fill-white hover:fill-pink-500 hover:border hover:border-pink-500"}><SettingIcon className={"w-5 h-5"} /></div>, center:true},

        ],
        [
            {text: "荒井天匠", center:false},
            {text: "09011110000", center:false},
            {text: "TableCheck", center:false},
            {text: "3", center:false},
            {text: "詳細を見る", icon:<div className={"text-green-500 hover:underline cursor-pointer"}>詳細を見る</div>, center:false},
            {text: "3", icon: <div className={"w-1/3 mx-auto bg-pink-500 hover:bg-white py-1 cursor-pointer fill-white hover:fill-pink-500 hover:border hover:border-pink-500"}><SettingIcon className={"w-5 h-5 "} /></div>, center: true},
        ],
        [
            {text: "朴世栄", center:false},
            {text: "08088778888", center:false},
            {text: "ぐるなび", center:false},
            {text: "3", center:false},
            {text: "詳細を見る", icon:<div className={"text-green-500 hover:underline cursor-pointer"}>詳細を見る</div>, center:false},
            {text: "aa", icon: <div className={"w-1/3 mx-auto bg-pink-500 hover:bg-white py-1 cursor-pointer fill-white hover:fill-pink-500 hover:border hover:border-pink-500"}><SettingIcon className={"w-5 h-5"} /></div>, center: false},
        ],
        [
            {text: "朴世栄", center:false},
            {text: "08088778888", center:false},
            {text: "ぐるなび", center:false},
            {text: "3", center:false},
            {text: "詳細を見る", icon:<div className={"text-green-500 hover:underline cursor-pointer"}>詳細を見る</div>, center:false},
            {text: "aa", icon: <div className={"w-1/3 mx-auto bg-pink-500 hover:bg-white py-1 cursor-pointer fill-white hover:fill-pink-500 hover:border hover:border-pink-500"}><SettingIcon className={"w-5 h-5"} /></div>, center: true},
        ],
        [
            {text: "朴世栄", center:false},
            {text: "08088778888", center:false},
            {text: "ぐるなび", center:false},
            {text: "3", center:false},
            {text: "詳細を見る", icon:<div className={"text-green-500 hover:underline cursor-pointer"}>詳細を見る</div>, center:false},
            {text: "aa", icon: <div className={"w-1/3 mx-auto bg-pink-500 hover:bg-white py-1 cursor-pointer fill-white hover:fill-pink-500 hover:border hover:border-pink-500"}><SettingIcon className={"w-5 h-5"} /></div>, center: true},
        ]
    ]

    const pageNationContext = usePageNationCtx()


    return (
        <div className={"w-full"}>
            <h3 className={"text-left text-2xl font-bold bg-white w-max px-3 py-1"}>ユーザー管理</h3>

            <div className={"mt-16"}>
                <div className={"my-6 w-11/12 mx-auto flex items-center justify-between"}>
                    <SearchBox />

                    <pageNationCtx.Provider value={pageNationContext}>
                        <PageNation />
                    </pageNationCtx.Provider>
                </div>

                <div className={"w-[1100px] mx-auto overflow-x-scroll flex flex-col bg-white shadow-xl px-8 py-5 rounded-xl"}>
                    <ConsumerTableHeader columns={header} />
                    <ConsumerTable bodyBaseColumnArray={body} />
                </div>

                <div className={"my-6 w-11/12 mx-auto flex items-center justify-end"}>
                    <pageNationCtx.Provider value={pageNationContext}>
                        <PageNation />
                    </pageNationCtx.Provider>
                </div>
            </div>

        </div>

    )
}

export default UserList
