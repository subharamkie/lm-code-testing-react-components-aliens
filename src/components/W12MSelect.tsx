import Select from 'react-select';

interface W12MSelectProps{
    id:string;
    label?:string;
    value: string;
    options:{value:string,label:string}[];
	onChangeFn: (value: string) => void;

}
const W12MSelect:React.FC<W12MSelectProps> = ({id,onChangeFn: onChange,value,options,label}) =>{
    
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
        
                {label && <label htmlFor={id}>What is 2+2?</label>}
            </div>
            <Select id={id} options={options}
            value={options.find((i) => i.value === value)}
            onChange={(selectedOption) => onChange(selectedOption?.value || '')}/>
        </div>
    )
} 
export default W12MSelect;