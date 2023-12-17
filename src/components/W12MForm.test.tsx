import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from './W12MForm';
import W12MInput, {W12MInputProps} from './W12MInput';
import W12MSelect, { W12MSelectProps } from './W12MSelect';



test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.getElementsByClassName('w12MForm').length).toBe(1);
});
test('renders species text input', () => {
	render(<W12MForm/>);
	const speciesTitle = screen.getByLabelText('Species Name:');
	expect(speciesTitle).toBeInTheDocument();
});
test('Given the required input,When the component is rendered,Then the input value should be present', () => {
		const requiredProps : W12MInputProps = {
		id: "species",
		value: 'Harriet',
		type:'text',
		label:'Species',
		onChangeFn: ()=>{},
		};

    	render(<W12MInput {...requiredProps} />);

    	expect(
    		screen.getByLabelText('Species')
    	).toHaveValue('Harriet');
    });
test('renders planet text input', () => {
	render(<W12MForm/>);
	const planetTitle = screen.getByLabelText('Planet Name:');
	expect(planetTitle).toBeInTheDocument();
});
test('Pass the required input,When the component is rendered,the input value should be present', () => {
	const requiredProps : W12MInputProps = {
	id: "planet",
	value: 'Earth',
	type:'text',
	label:'Planet',
	onChangeFn: ()=>{},
	};

	render(<W12MInput {...requiredProps} />);

	expect(
		screen.getByLabelText('Planet')
	).toHaveValue('Earth');
});
test('renders number of being text input', () => {
	render(<W12MForm/>);
	const beingsTitle = screen.getByLabelText('Number of beings:');
	expect(beingsTitle).toBeInTheDocument();
});
test('Pass the required input,then the component is rendered with the input value passed', () => {
	const requiredProps : W12MInputProps = {
	id: "beings",
	value: '22',
	type:'text',
	label:'Beings',
	onChangeFn: ()=>{},
	};

	render(<W12MInput {...requiredProps} />);

	expect(
		screen.getByLabelText('Beings')
	).toHaveValue('22');
});
test('renders math qn text input', () => {
	render(<W12MForm/>);
	const mathTitle = screen.getByRole('option', { name: 'What is 2+2?' });
	expect(mathTitle).toBeInTheDocument();
});
test('Pass the required input,value should be the selected one', async () => {
	const choice = [
		{value:'4', label:'4'},
		{value:'0',label:'Not 4'},
	];
	let selectedValue = '';
	const changeFn = (value:string) =>{
		console.log('here'+value);
		selectedValue = value;
	}
	const requiredProps : W12MSelectProps = {
	id: "math",
	value: '',
	label:'What is 2+2?',
	onChangeFn:changeFn,
	options:choice,
	};

	render(<W12MSelect {...requiredProps} />);
	//const selectElement = screen.getAllByRole('option');
	//console.log(selectElement.length);
	userEvent.selectOptions(
		// Find the select element, like a real user would.
		screen.getByRole('combobox'),
		// Find and select the Ireland option, like a real user would.
		screen.getByRole('option', { name: '4' }),
	  )
	//expect(selectElement.length).toBe(3);
	const selectedElement = screen.getByRole('combobox');
	console.log(selectedElement.nodeValue);
	expect(selectedValue).toBe('4');
});
test('renders reason text input', () => {
	render(<W12MForm/>);
	const reasonTitle = screen.getByLabelText('Reason for sparing:');
	expect(reasonTitle).toBeInTheDocument();
});
test('Create the required input,When the component is rendered,the input value should be present', () => {
	const requiredProps : W12MInputProps = {
	id: "reason",
	value: 'We are great',
	type:'text',
	label:'Reason',
	onChangeFn: ()=>{},
	};

	render(<W12MInput {...requiredProps} />);

	expect(
		screen.getByLabelText('Reason')
	).toHaveValue('We are great');
});
test('renders submit button', () => {
	render(<W12MForm/>);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
});
