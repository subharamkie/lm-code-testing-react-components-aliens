interface SubmitDataProps{
    id:string;
    speciesName:string;
    planet:string;
    beings:string;
    mathQn:string;
    reason:string;   
}
const W12MSubmittedData:React.FC<SubmitDataProps> = (props)=>{
    return (
        <div id={props.id}>
            <section>
                <h2>Entered values:</h2>
                <p>Species name:{props.speciesName}</p>
                <p>Planet name:{props.planet}</p>
                <p>Number of beings:{props.beings}</p>
                <p>What is 2+2?{props.mathQn}</p>
                <p>Reason for sparing:{props.reason}</p>
            </section>
        </div>
    )
}
export default W12MSubmittedData;