import { useState } from 'react';
import W12MHeader from './W12MHeader';
import W12MInput from './W12MInput';
import W12MSelect from './W12MSelect';
import W12MSubmit from './W12MSubmit';
const W12MForm = () => {
	const [speciesName,setSpecies] = useState('');
	const [planetName,setPlanet] = useState('');
	const [beings,setBeings] = useState('');
	const [mathQn,setMathQn] = useState('');
	const [reason,setReason] = useState('');
	const options = [
		{value:'4', label:'4'},
		{value:'0',label:'Not 4'},
	];

	const handleSelectChange = (value:string) =>{
		setMathQn(value);
		console.log(value);
		
	}
	const onSubmit = () =>{
		console.log('here');
		console.log('form submitted');
	}
	return (
		<div className="container mt-5 text-center">
      <div className="grid gap-5 md:grid-cols-2">
        
		<section className='w12MForm'>
			
			<W12MHeader />
			<form>
				<W12MInput id="species" type="text" label="Species Name:" value={speciesName} onChangeFn={setSpecies}/>
				<W12MInput id="planet" type="text" label="Planet Name:" value={planetName} onChangeFn={setPlanet}/>
				<W12MInput id="beings" type="text" label="Number of beings:" value={beings} onChangeFn={setBeings}/>
				<W12MSelect id="mathQn" label="What is 2+2?" value={mathQn} options={options} onChangeFn={handleSelectChange}/>
				<W12MInput id="reason" type="textarea" label="Reason for sparing:" value={reason} onChangeFn={setReason}/>
				<W12MSubmit id="submit" onSubmitFn={onSubmit}/>

				
				{/*
				<label>
				<input name="" type="text"  onChange={(e) => setPlanet(e.target.value)}></input>
				</label>
				<label>Number of beings:
				<input name="beings" type="text" value={beings} onChange={(e) => setBeings(e.target.value)}></input>
				</label>
				<label>What is 2+2?
				<input name="mathQn" type="text" value={mathQn} onChange={(e) => setMathQn(e.target.value)}></input>
				</label>
				<label>Reason for sparing:
					<textarea value={reason} onChange={(e) => setReason(e.target.value)}/>
				</label>
	<button type="submit" id="submit">Submit Form</button>*/}
			</form>
		</section>
		</div>
		</div>
	);
};

export default W12MForm;
