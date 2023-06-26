// 1. コンテキストの使い方
// https://reffect.co.jp/react/react-usecontext-understanding

// 2. 【React + Typescript】useContext の値を子コンポーネントから更新
// https://qiita.com/ragnar1904/items/0a4338523863922952bb
// context default value

import {createContext, useCallback, useState} from 'react'

/**
 * DynamoDBに通信する
 */
export type SendServerData = {
    // 掲載状態
    status: string;
    // コース区分
    kbn: string;
    // ネット予約
    netReserve: string;
    // コース名
    title: string;
    // コース写真
    photo: string;
    // コース料金
    price: string;
    // コース品数
    itemNum: string;
    // コース説明
    explain: string;
    // コース内容
    content: string;
    // 飲み放題
    drinkCourse: string;
    drinkCourseOver3h: string;
    drinkCourseOnly: string;
    // 食べ放題
    eatCourse: string;
    // TODO 予約時の質問事項

    // 注意事項
    notes: string;
    // キャンセルポリシー
    cancelPolicy: string;
    // お客様の滞在時間
    stayTime: string;
    // 利用可能人数
    availablePeople: string;
    availablePeopleMin: string;
    availablePeopleMax: string;
    // 予約可能曜日
    availableDate: string;
    availableSun: string;
    availableMon: string;
    availableTue: string;
    availableWed: string;
    availableThu: string;
    availableFri: string;
    availableSat: string;
    // 利用可能時間
    reserveAcceptTime: string;
    reserveAcceptDeadlineDay: string;
    reserveAcceptDeadTime: string;
    // 予約可能なネット予約席
    availableReserveOnlineSeat: string;
    // 紐づくクーポン
    coupon: string;
    // 有効期限
    expiration: string;
}

export type FormTypes = {
    label: string
    placeholder?: string
    required: boolean
    type: string
    inputstyle?: string
    gridstyle: string
    btnstyle: string
    array: string[]
    changebtnstyle: string
    cols?: number
    rows?: number
    isMultiple: boolean
    defaultCheck?: boolean
    property: keyof SendServerData //SendServerDataタイプのキーを型にする
}

type MyFormContext = {
    form: SendServerData;
    setIsForm: (isForm: SendServerData) => void;
};

const defaultValue: MyFormContext = {
    // form: {name: "", kana: "", gender: "", employment: "", qualifications: "", prefecturesOfJapan: "", municipalities: "", houseNumber: "", year: "", month: "", day: "", tel: "", mail: "", license: "", contact: "", message: ""},
    form: {
        status: "掲載",
        kbn: "コース料理",
        netReserve: "対応",
        title: "",
        photo: "",
        price: "",
        itemNum: "",
        explain: "",
        content: "",
        drinkCourse: "",
        drinkCourseOver3h: "",
        drinkCourseOnly: "",
        eatCourse: "",
        // TODO 予約時の質問事項

        notes: "",
        cancelPolicy: "",
        stayTime: "",
        availablePeople: "",
        availablePeopleMin: "",
        availablePeopleMax: "",
        availableDate: "",
        availableSun: "",
        availableMon: "",
        availableTue: "",
        availableWed: "",
        availableThu: "",
        availableFri: "",
        availableSat: "",
        reserveAcceptTime: "",
        reserveAcceptDeadlineDay: "",
        reserveAcceptDeadTime: "",
        availableReserveOnlineSeat: "",
        coupon: "",
        expiration: ""
    },
    // 初期値を作成するが、eslintに引っかかる
    setIsForm: () => {},
};

// context object
export const myFormContext = createContext<MyFormContext>(defaultValue);

// custom Hook
export const useMyFormContext = (): MyFormContext => {
    // state名はThemeContext typeのプロパティに合わせる。
    const [form, setForm] = useState<SendServerData>(defaultValue.form);
    // 関数名はThemeContext typeのプロパティに合わせる。
    const setIsForm = useCallback((current: SendServerData): void => {
        setForm(current);
    }, []);
    return {
        form,
        setIsForm,
    };
};
