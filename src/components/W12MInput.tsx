interface W12MInputProps{
    label?:string;
    type:string;
    id:string;
}

const W12MInput:React.FC<W12MInputProps> = ({label,type,id}) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">{label}</label>
            </div>
            <input id={id} type={type} ></input>
        </div>
    )
}
export default W12MInput;