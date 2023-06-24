import {useEffect, useMemo, useState} from "react";

const PageNation = () => {
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [pages, setPages] = useState<number[]>([1,2,3,4,5])
    const switchPage = (next: boolean) => {
        const steps = []
        if (next){
            setCurrentStep(currentStep + 5)
            for (let i = currentStep; i < currentStep + 6; i++) {
                if(i <= 0)continue
                steps.push(i)

            }
            setPages(steps)
        } else {
            setCurrentStep(currentStep - 5 < 1 ? 1 : currentStep - 5)
            if (currentStep-5 < 5){
                setPages([1,2,3,4,5])
                return
            }
            for (let i = currentStep-5; i < currentStep; i++) {
                if(i <= 0) continue
                steps.push(i)
            }
            setPages(steps)
        }
    }

    return (
        <div className={"flex items-center justify-center shadow-xl bg-white rounded-full"}>
            <div onClick={() => switchPage(false)} className={"cursor-pointer py-2 w-[60px] text-center mx-auto"}>
                <svg className={"w-full text-center fill-[rgb(125,24,20)]"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
            {pages.map((page, index) => (
                <div
                    onClick={() => setCurrentStep(page)}
                    className={currentStep === page ? "w-[60px] text-white bg-[rgb(125,24,20)] border-y border-l py-1" : "w-[60px] cursor-pointer text-[rgb(125,24,20)] border-y border-l py-1"}
                    key={index}
                >
                    {page}
                </div>
            ))}
            <div onClick={() => switchPage(true)} className={"cursor-pointer py-2 w-[60px] text-center mx-auto"}>
                <svg className={"w-full text-center fill-[rgb(125,24,20)]"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>

        </div>
    )
}

export default PageNation
