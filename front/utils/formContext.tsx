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
  name: string,
  kana: string,
  gender: string,
  employment: string,
  time: string,
  prefecture: string,
  message: string,
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
    name: "",
    kana: "",
    gender: "",
    employment: "",
    time: "",
    prefecture: "",
    message: "",
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
