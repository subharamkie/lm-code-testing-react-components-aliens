import { useState } from "react";
import ErrorMessage from "./W12MErrorMessage";
import { validateInputElement } from "../validate/validate_inputElement";
export interface W12MInputProps{
    label?:string;
    type:string;
    id:string;
    value:string;
    onChangeFn:(value: string) => void;
    
}

const W12MInput:React.FC<W12MInputProps> = (props) => {
    const [errorMessage,setErrorMessage] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const errorMessage = validateInputElement(props.id, inputValue);
    
        // Assuming you have some way to handle and display the validation errors
        console.log("Validation errors:", errorMessage);
        setErrorMessage(errorMessage);
    
        props.onChangeFn(inputValue);
      };
    
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={props.id} className="font-semibold capitalize">{props.label}</label>
            </div>
            <input id={props.id} type={props.type} value={props.value} onChange={handleChange}></input>
            {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
        </div>
    )
}
export default W12MInput;