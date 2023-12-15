import { useState } from 'react';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	const [speciesName,setSpecies] = useState('');
	const [planetName,setPlanet] = useState('');
	const [beings,setBeings] = useState('');
		const [mathQn,setMathQn] = useState('');
		const [reason,setReason] = useState('');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form>
				<label>Species Name:
				<input name="species" type="text" value={speciesName} onChange={(e) => setSpecies(e.target.value)}></input>
				</label>
				<label>Planet Name:
				<input name="planet" type="text" value={planetName} onChange={(e) => setPlanet(e.target.value)}></input>
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
				<button type="submit" id="submit">Submit Form</button>
			</form>
		</section>
	);
};

export default W12MForm;
