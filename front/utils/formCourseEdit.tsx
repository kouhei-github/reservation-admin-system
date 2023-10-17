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
    // 店舗ID
    store_id: string,
    // コースID
    course_id: string,
    // 掲載状態
    status: string;
    // コース区分
    course_kbn: string;
    // ネット予約
    is_course_net_reserve: string;
    // コース名
    course_name: string;
    // コース写真
    // photo: string;
    // コース料金
    price: string;
    // コース品数
    item_num: string;
    // コース説明
    description: string;
    // コース内容
    contents: string;
    // 飲み放題
    is_drink_course: string;
    is_drink_course_over3h: string;
    is_drink_course_only: string;
    // 食べ放題
    is_buffet: string;
    // TODO 予約時の質問事項

    // 注意事項
    notes: string;
    // キャンセルポリシー
    // cancel_policy: string;
    // お客様の滞在時間
    duration : string;
    // 利用可能人数
    is_available_people: string;
    available_min: string;
    available_max: string;
    // 予約可能曜日
    is_available_day: string;
    available_sun: string;
    available_mon: string;
    available_tue: string;
    available_wed: string;
    available_thu: string;
    available_fri: string;
    available_sat: string;
    // 利用可能時間
    is_available_time: string
    available_time_min: string;
    available_time_max: string;
    // 予約締め切り日時
    is_reserve_dead_datetime: string;
    reserve_dead_time_min: string;
    reserve_dead_time_max: string;
    // 予約可能なネット予約席
    // availableReserveOnlineSeat: string;
    // 紐づくクーポン
    // coupon: string;
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
        store_id: "",
        course_id: "",
        status: "掲載",
        course_kbn: "コース料理",
        is_course_net_reserve: "対応",
        course_name: "",
        // photo: "",
        price: "",
        item_num: "",
        description: "",
        contents: "",
        is_drink_course: "",
        is_drink_course_over3h: "",
        is_drink_course_only: "",
        is_buffet: "",
        // TODO 予約時の質問事項

        notes: "",
        // cancelPolicy: "",
        duration: "",
        is_available_people: "",
        available_min: "",
        available_max: "",
        is_available_day: "",
        available_sun: "",
        available_mon: "",
        available_tue: "",
        available_wed: "",
        available_thu: "",
        available_fri: "",
        available_sat: "",
        is_available_time: "",
        available_time_min: "",
        available_time_max: "",
        is_reserve_dead_datetime: "",
        reserve_dead_time_min: "",
        reserve_dead_time_max: "",
        // availableReserveOnlineSeat: "",
        // coupon: "",
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
