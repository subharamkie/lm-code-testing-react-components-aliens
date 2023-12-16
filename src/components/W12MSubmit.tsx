interface W12MSubmitProps{
    id:string;
    onSubmitFn:(value:string)=>void;
}
const W12MSubmit:React.FC<W12MSubmitProps>=({id,onSubmitFn})=>{
    return (
    <div className="mt-5">
        <button id="submit" onClick={()=>onSubmitFn}>
            Submit Form
        </button>
	</div>
    )
}
export default W12MSubmit;