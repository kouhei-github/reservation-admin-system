// 1. コンテキストの使い方
// https://reffect.co.jp/react/react-usecontext-understanding

// 2. 【React + Typescript】useContext の値を子コンポーネントから更新
// https://qiita.com/ragnar1904/items/0a4338523863922952bb
// context default value

import {createContext, useCallback, useState} from 'react'


type PageNationContext = {
    currentStep: number;
    setCurrentStep: (currentStep: number) => void;
    pages: number[];
    setPages: (pages: number[]) => void;
};

const defaultValue: PageNationContext = {
    currentStep: 1,
    // 初期値を作成するが、eslintに引っかかる
    setCurrentStep: () => {},
    pages: [1,2,3,4,5],
    // 初期値を作成するが、eslintに引っかかる
    setPages: () => {},
};

// context object
export const pageNationCtx = createContext<PageNationContext>(defaultValue);

// custom Hook
export const usePageNationCtx = (): PageNationContext => {
    // state名はThemeContext typeのプロパティに合わせる。
    const [currentStep, setStep] = useState<number>(defaultValue.currentStep);
    // 関数名はThemeContext typeのプロパティに合わせる。
    const setCurrentStep = useCallback((current: number): void => {
        setStep(current);
    }, []);
    const [pages, setNormalPages] = useState<number[]>(defaultValue.pages);
    const setPages = useCallback((current: number[]): void => {
        setNormalPages(current);
    }, []);
    return {
        currentStep,
        setCurrentStep,
        pages,
        setPages,
    };
};
