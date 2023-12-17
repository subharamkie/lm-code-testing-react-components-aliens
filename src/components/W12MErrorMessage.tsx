interface ErrorProps{
    message:string[];
}
const ErrorMessage:React.FC<ErrorProps> = (props) =>{
    return (
        <div id="error">
            {(props.message).map((msg,index)=>{return <div className = "error" key={index}>{msg}</div>})}
        </div>
    )
}
export default ErrorMessage;