import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {pageNationCtx} from "@/utils/pageNationContext";

const PageNation = () => {
    const pageNationStep = useContext(pageNationCtx)
    
    const router = useRouter()
    const param = router.query
    let [count, setCount] = useState<number>(1);
    // クエリパラメータ指定で表示された時用に作成
    useEffect(()=>{
        if (!router.isReady) return; //routerの準備中はここで処理がstop
        if(count > 1) return;
        
        const initialPage = typeof param["page"] === "undefined" ? 1 : Number(param["page"])
        pageNationStep.setCurrentStep(initialPage); //routerの準備が完了したら、ここが呼ばれる
        pageNationStep.setPages([initialPage,initialPage+1,initialPage+2,initialPage+3,initialPage+4])
        setCount(count + 1)
    }, [param])
    

    const switchPage = (next: boolean) => {
        const steps = []
        if (next){
            pageNationStep.setCurrentStep(pageNationStep.currentStep + 5)
            for (let i = pageNationStep.currentStep+1; i < pageNationStep.currentStep + 6; i++) {
                if(i <= 0)continue
                steps.push(i)
            }
            pageNationStep.setPages(steps)
            router.push(`user?page=${pageNationStep.currentStep + 5}`)
        } else {
            pageNationStep.setCurrentStep(pageNationStep.currentStep - 5 < 1 ? 1 : pageNationStep.currentStep - 5)
            if (pageNationStep.currentStep-5 < 5){
                pageNationStep.setPages([1,2,3,4,5])
                return
            }
            for (let i = pageNationStep.currentStep-5; i < pageNationStep.currentStep; i++) {
                if(i <= 0) continue
                steps.push(i)
            }
            pageNationStep.setPages(steps)
            router.push(`user?page=${pageNationStep.currentStep - 5}`)
        }
    }
    
    const pageMove = (page: number) => {
        pageNationStep.setCurrentStep(page)
        router.push(`user?page=${page}`)
    }

    return (
        <div className={"flex items-center justify-center shadow-xl bg-white rounded-full"}>
            <div onClick={() => switchPage(false)} className={"cursor-pointer py-2 w-[60px] text-center mx-auto"}>
                <svg className={"w-full text-center fill-[rgb(125,24,20)]"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
            {pageNationStep.pages.map((page, index) => (
                <div
                    onClick={() => pageMove(page)}
                    className={pageNationStep.currentStep === page ? "w-[60px] text-white bg-[rgb(125,24,20)] border-y border-l py-1" : "w-[60px] cursor-pointer text-[rgb(125,24,20)] border-y border-l py-1"}
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

export default PageNation;
