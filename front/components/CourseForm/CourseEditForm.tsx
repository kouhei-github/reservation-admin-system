import React, {useContext, useState} from "react";
import {myFormContext} from '@/utils/formCourseEdit'
import Textarea from '@/components/CourseForm/parts/Textarea'
import Radio from '@/components/CourseForm/parts/Radio'
import Text from '@/components/CourseForm/parts/Text'
import Select from '@/components/CourseForm/parts/Select'
import CheckBox from "@/components/CourseForm/parts/CheckBox";

const CourseEditForm = (props: {id: string | string[] | undefined}) => {
    const customCtx = useContext(myFormContext)

    const [currentPage, setCurrentPage] = useState(1);

    const dayOfWeek = [
        {value: "日", prop: "availableSun"},
        {value: "月", prop: "availableMon"},
        {value: "火", prop: "availableTue"},
        {value: "水", prop: "availableWed"},
        {value: "木", prop: "availableThu"},
        {value: "金", prop: "availableFri"},
        {value: "土", prop: "availableSat"},
    ]

    const validate = () => {
        if(customCtx.form.title === "") {
            alert("コース名を入力してください")
            return
        }
        if(customCtx.form.price === ""){
            alert("コース料金を入力してください")
            return
        }
        sendDataToServer()
    };

    const sendDataToServer = () => {
        console.log("DBに保存")
        console.log(customCtx.form)
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={'bg-white w-11/12 mx-auto my-10'}>
            <div className={"bg-blue-700 text-white font-bold w-full mx-auto mt-10 py-2 text-left text-xl"}>
                <div className={"ml-5"}>コースの編集</div>
            </div>
            <form className={"md:px-[10%] px-0 mx-auto py-7"}>
                <div className={currentPage === 1 ? "inline-block w-full space-y-8" : "hidden"}>
                    <div className={"font-bold items-center border-b pb-8 border-gray-600"}>
                        <div className={"flex"}>
                            <div className={"px-2 border-l-4 border-blue-700"}>
                                <div>コース入力</div>
                            </div>
                            <div className={"text-xs contents"}>(ID:{props.id})</div>
                        </div>
                    </div>
                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>掲載状態</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["掲載", "非掲載"]}
                            property={"status"}
                            isMultiple={false}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース区分</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["コース料理", "席のみ"]}
                            property={"kbn"}
                            isMultiple={false}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>ネット予約</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["対応", "非対応"]}
                            property={"netReserve"}
                            isMultiple={false}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース名</label>
                        </div>
                        <Text
                            type={"text"}
                            placeholder={""}
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                            property={"title"}
                        />
                    </div>
                    <div>
                        コース写真
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース料金</label>
                        </div>
                        <Text
                            type={"text"}
                            placeholder={""}
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                            property={"price"}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース品数</label>
                        </div>
                        <Text
                            type={"text"}
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                            property={"itemNum"}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース説明</label>
                        </div>
                        <Textarea
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer rounded px-4 pt-3 text-[#12243a]'}
                            cols={55}
                            rows={5}
                            property={"explain"}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>コース内容</label>
                        </div>
                        <Textarea
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer rounded px-4 pt-3 text-[#12243a]'}
                            cols={55}
                            rows={5}
                            property={"content"}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>飲み放題</label>
                        </div>
                        <div className={"flex"}>
                            <div className={"w-1/3 flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5]  cursor-pointer rounded text-[#12243a]'}
                                    property={"drinkCourse"}
                                />
                                <div className={"pl-2"}>飲み放題</div>
                            </div>
                            <div className={"w-1/3 flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5]  cursor-pointer rounded text-[#12243a]'}
                                    property={"drinkCourseOver3h"}
                                />
                                <div className={"pl-2"}>3時間以上</div>
                            </div>
                            <div className={"w-1/3 flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5]  cursor-pointer rounded text-[#12243a]'}
                                    property={"drinkCourseOnly"}
                                />
                                <div className={"pl-2"}>飲み放題のみ</div>
                            </div>
                        </div>
                    </div>


                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>食べ放題</label>
                        </div>
                        <div className={"flex"}>
                            <div className={"w-1/3 flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5]  cursor-pointer rounded text-[#12243a]'}
                                    property={"eatCourse"}
                                />
                                <div className={"pl-2"}>食べ放題</div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>注意事項</label>
                        </div>
                        <Textarea
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer rounded px-4 pt-3 text-[#12243a]'}
                            cols={55}
                            rows={5}
                            property={"notes"}
                        />
                    </div>

                    <div>
                        予約時の質問事項
                    </div>

                    <div>
                        キャンセルポリシー
                    </div>

                    <div className=''>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                            <label className={'text-[16px] text-[#12243a]'}>お客様の滞在時間</label>
                        </div>
                        <Select
                            array={["1時間", "1時間30分", "2時間", "2時間30分", "3時間", "3時間30分"]}
                            inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                            property={"stayTime"}
                        />
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>利用可能人数</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["制限する", "制限しない"]}
                            property={"availablePeople"}
                            isMultiple={false}
                        />
                        <div className={"flex mt-5"}>
                            <div className={"w-[10%]"}>
                                <Select
                                    array={["1", "2", "3", "4", "99"]}
                                    inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                                    property={"availablePeopleMin"}
                                />
                            </div>
                            <div className={"w-[10%] translate-y-1/4"}>〜</div>
                            <div className={"w-[10%]"}>
                                <Select
                                    array={["1", "2", "3", "4", "99"]}
                                    inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                                    property={"availablePeopleMax"}
                                />
                            </div>
                            <div className={"w-[10%] translate-y-1/4"}>名</div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>利用可能曜日</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["制限する", "制限しない"]}
                            property={"availableDate"}
                            isMultiple={false}
                        />
                        <div className={"flex mt-5"}>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableSun"}
                                />
                                <div className={"pl-2"}>日</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableMon"}
                                />
                                <div className={"pl-2"}>月</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableTue"}
                                />
                                <div className={"pl-2"}>火</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableWed"}
                                />
                                <div className={"pl-2"}>水</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableThu"}
                                />
                                <div className={"pl-2"}>木</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableFri"}
                                />
                                <div className={"pl-2"}>金</div>
                            </div>
                            <div className={"w-[14%] flex"}>
                                <CheckBox
                                    type={"checkbox"}
                                    inputstyle={'border border-[#bfbec5] cursor-pointer rounded text-[#12243a]'}
                                    property={"availableSat"}
                                />
                                <div className={"pl-2"}>土</div>
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>利用可能時間</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["制限する", "制限しない"]}
                            property={"reserveAcceptTime"}
                            isMultiple={false}
                        />
                        <div className={"flex mt-5"}>
                            <div className={"w-[40%] flex"}>
                                <div className={"translate-y-1/4 w-2/5 text-left"}>入店開始時刻</div>
                                <Select
                                    array={["06:00", "07:00", "08:00"]}
                                    inputstyle={'border border-[#bfbec5] w-2/5 pl-4 cursor-pointer h-12 items-center grid rounded text-[#12243a] ml-2'}
                                    property={"reserveAcceptDeadlineDay"}
                                />
                            </div>
                            <div className={"w-[5%] translate-y-1/4"}>〜</div>
                            <div className={"w-[40%] flex justify-end"}>
                                <div className={"translate-y-1/4 w-2/5 text-left"}>最終退店時刻</div>
                                <Select
                                    array={["06:00", "07:00", "08:00"]}
                                    inputstyle={'border border-[#bfbec5] w-2/5 pl-4 cursor-pointer h-12 items-center grid rounded text-[#12243a] ml-2'}
                                    property={"reserveAcceptDeadTime"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-600'>
                        <div className='flex font-bold items-center mb-1'>
                            <div className='md:text-xs text-[9px] bg-gray-500 py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                            <label className={'text-[16px] text-[#12243a]'}>予約受付締切日時</label>
                        </div>
                        <Radio
                            gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                            btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                            changebtnstyle={'bg-blue-600 text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                            array={["制限する", "制限しない"]}
                            property={"availableDate"}
                            isMultiple={false}
                        />
                        <div className={"flex mt-5"}>
                            <div className={"w-[22.5%] flex"}>
                                <Select
                                    array={["当日", "1日前", "2日前", "3日前"]}
                                    inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                                    property={"availablePeopleMin"}
                                />
                            </div>
                            <div className={"w-[5%] translate-y-1/4"}>の</div>
                            <div className={"w-[22.5%] flex"}>
                                <Select
                                    array={["00:00", "01:00", "02:00"]}
                                    inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                                    property={"availablePeopleMax"}
                            />
                            </div>
                            <div className={"w-[30%] translate-y-1/4 text-left pl-2"}>まで受付可能</div>
                        </div>
                    </div>


                    <div>
                        利用可能なネット予約席
                    </div>

                    <div>
                        紐づくクーポン
                    </div>
                    <div>
                        有効期限
                    </div>
                </div>
            </form>

            <div className={"flex gap-10 justify-center pb-5"}>
                <div className={'w-1/3'}>
                    <div className={"w-full py-3 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer"} onClick={() => validate()}>削除</div>
                </div>
                <div className={'w-1/3'}>
                    <div className={"w-full py-3 bg-red-500 hover:bg-red-600 text-white cursor-pointer"} onClick={() => validate()}>この内容で更新する</div>
                </div>
            </div>
        </div>
    );
};

export default CourseEditForm;
