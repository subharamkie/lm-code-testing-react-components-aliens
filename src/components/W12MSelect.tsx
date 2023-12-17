import { useState } from "react";
import ErrorMessage from "./W12MErrorMessage";
import { validateInputElement } from "../validate/validate_inputElement";

export interface W12MSelectProps{
    id:string;
    label?:string;
    value: string;
    options:{value:string,label:string}[];
	onChangeFn: (value: string) => void;

}
const W12MSelect:React.FC<W12MSelectProps> = ({id,onChangeFn,value,options,label}) =>{
    const [errorMessage,setErrorMessage] = useState<string[]>([]);
    const handleChange = (value:string) => {
        //const inputValue = e.target.value;
        const errorMessage = validateInputElement(id, value);
    
        // Assuming you have some way to handle and display the validation errors
        setErrorMessage(errorMessage);
        onChangeFn(value);
      };
    
    
    return (
        <div className="flex flex-col w-full gap-2">
            <select id={id} value={value}
            onChange={(e) => handleChange(e.target.value)}> 
                <option>{label}</option>
                {options.map((i)=>{
                    return <option key={i.value} value={i.value}>{i.label}</option>
                })}
                
            </select>
            {errorMessage && errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
        </div>
    )
} 
export default W12MSelect;