
export interface W12MSelectProps{
    id:string;
    label?:string;
    value: string;
    options:{value:string,label:string}[];
	onChangeFn: (value: string) => void;

}
const W12MSelect:React.FC<W12MSelectProps> = ({id,onChangeFn,value,options,label}) =>{
    
    return (
        <div className="flex flex-col w-full gap-2">
            <select id={id} value={value}
            onChange={(e) => onChangeFn(e.target.value)}> 
                <option>{label}</option>
                {options.map((i)=>{
                    return <option key={i.value} value={i.value}>{i.label}</option>
                })}
                
            </select>
        </div>
    )
} 
export default W12MSelect;