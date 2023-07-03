import React, {useContext, useState} from 'react'
import {UserDataContext} from "@/components/Calendar/parts/ReserveCalendarBase";
import CloseIcon from "@/styles/CloseIcon";
export type ModalProps = {
    onClose: (value: string) => void
    name: string
    srtTime: string
    endTime: string
    // memo: string
}


const Modal = (props : ModalProps) => {
    const userData = useContext(UserDataContext);

    const [name, setName] = useState(props.name);
    const [srtTime, setSrtTime] = useState(props.srtTime);
    const [endTime, setEndTime] = useState(props.endTime);
    // const [memo, setMemo] = useState(props.memo);

    const editClick = () => {
        userData.name = name
        userData.srtTime = srtTime
        userData.endTime = endTime
        props.onClose('edit')
    }
    const deleteClick = () => {
        props.onClose('delete')
    }
    const cancelClick = () => {
        props. onClose('cancel')
    }

    return (
        <>
            <div className={"fixed left-0 top-0 w-full h-full z-50 ease-in bg-gray-500 bg-opacity-70"}>
                <div className={"absolute w-1/4 h-fit top-1/2 left-1/2 bg-gray-100 translate-y-[-50%] translate-x-[-50%]"}>
                    <div className={"w-4/5 mx-auto mt-3"} >
                        <div className={"cursor-pointer w-fit ml-auto"}>
                            <button className={"w-3"} onClick={cancelClick}>
                                <CloseIcon />
                            </button>
                        </div>
                        <form>
                            <div className={"border-b-2 border-black text-lg text-left mb-2"}>予約入力</div>
                            <div className={"mb-2"}>
                                <div className={"text-left"}>名前</div>
                                <input type={"text"} className={"border border-black rounded w-full"} value={name}
                                       onChange={(event) => setName(event.target.value)}/>
                            </div>
                            <div className={"mb-2"}>
                                <div className={"text-left "}>開始時刻</div>
                                <input type={"datetime-local"} className={"border border-black rounded w-full"} value={srtTime}
                                       onChange={(event) => setSrtTime(event.target.value)} />
                            </div>
                            <div className={"mb-2"}>
                                <div className={"text-left"}>終了時刻</div>
                                <input type={"datetime-local"} className={"border border-black rounded w-full"} value={endTime}
                                       onChange={(event) => setEndTime(event.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className={"flex gap-2 justify-center pb-5 w-[90%] mx-auto mt-8 mb-3"}>
                        {props.name != "" &&
                            (<div className={'w-1/3'}>
                            <button className={"w-full py-1 bg-red-500 hover:bg-red-600 text-white cursor-pointer"} onClick={deleteClick}>削除</button>
                        </div>)}
                        <div className={'w-1/3'}>
                            <button className={"w-full py-1 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"} onClick={editClick}>
                                {props.name == "" ? "保存" : "変更"}
                            </button>
                        </div>
                        {/*<div className={'w-1/3'}>*/}
                        {/*    <button className={"w-full py-1 bg-gray-500 hover:bg-gray-600 text-white cursor-pointer"} onClick={cancelClick}>キャンセル</button>*/}
                        {/*</div>*/}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Modal
