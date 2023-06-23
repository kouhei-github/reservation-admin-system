export const BoundBox = (props: {text: string}) => {

    return (
        <div
            className={"w-full py-3 px-3 bg-gray-200 text-black border border-gray-500 animate-bounce"}
            dangerouslySetInnerHTML={{__html: props.text}}
        >
        </div>
    )
}

export default BoundBox
