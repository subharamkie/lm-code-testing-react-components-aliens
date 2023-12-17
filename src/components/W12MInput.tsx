export interface W12MInputProps{
    label?:string;
    type:string;
    id:string;
    value:string;
    onChangeFn:(value: string) => void;
}

const W12MInput:React.FC<W12MInputProps> = ({label,type,id,value,onChangeFn}) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">{label}</label>
            </div>
            <input id={id} type={type} value={value} onChange={(e) => onChangeFn(e.target.value)}></input>
        </div>
    )
}
export default W12MInput;