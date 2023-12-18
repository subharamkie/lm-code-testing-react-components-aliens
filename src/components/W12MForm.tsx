import { useState } from 'react';
import W12MHeader from './W12MHeader';
import W12MInput from './W12MInput';
import W12MSelect from './W12MSelect';
import W12MSubmit from './W12MSubmit';
import W12MSubmittedData from './W12MSubmittedData';


const W12MForm = () => {
	const [speciesName,setSpecies] = useState('');
	const [planetName,setPlanet] = useState('');
	const [beings,setBeings] = useState('');
	const [mathQn,setMathQn] = useState('');
	const [reason,setReason] = useState('');
	const[isSubmitted,setSubmitted] = useState(false);
	const options = [
		{value:'4', label:'4'},
		{value:'0',label:'Not 4'},
	];

	const handleSelectChange = (value:string) =>{
		setMathQn(value);
		
	}
	const onSubmit = () =>{
		console.log('form submitted');
		setSubmitted(true);
		
	}
	const handleFormSubmit = (event:any) =>{
		event.preventDefault();
	}

	return (
		<div className="container mt-5 text-center">
      	<div className="grid gap-5 md:grid-cols-2">
        
		<section className='w12MForm'>
			
			<W12MHeader />
			<form onSubmit={handleFormSubmit}>
				<W12MInput id="species" type="text" label="Species Name:" value={speciesName} onChangeFn={setSpecies} />
				<W12MInput id="planet" type="text" label="Planet Name:" value={planetName} onChangeFn={setPlanet} />
				<W12MInput id="beings" type="text" label="Number of beings:" value={beings} onChangeFn={setBeings} />
				<W12MSelect id="mathQn" label="What is 2+2?" value={mathQn} options={options} onChangeFn={handleSelectChange} />
				<W12MInput id="reason" type="textarea" label="Reason for sparing:" value={reason} onChangeFn={setReason} />
				<W12MSubmit id="submit" onSubmitFn={onSubmit}/>	
			</form>
		</section>

		</div>
		{isSubmitted && <W12MSubmittedData id='submittedData' speciesName={speciesName} planet={planetName}
			beings={beings} mathQn={mathQn} reason={reason}/>}
		</div>
	);
};

export default W12MForm;
