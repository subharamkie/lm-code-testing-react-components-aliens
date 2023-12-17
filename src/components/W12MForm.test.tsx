import { render,screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorMessage from './W12MErrorMessage';
import * as validate from '../validate/validate_inputElement';
import W12MInput, {W12MInputProps} from './W12MInput';

import W12MForm from './W12MForm';
import W12MSelect, { W12MSelectProps } from './W12MSelect';
jest.mock('../validate/validate_inputElement');


afterEach(() => {
	jest.clearAllMocks();
});

const mockValidateInput = validate as jest.Mocked<typeof validate>;
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
		selectedValue = value;
	}
	const requiredProps : W12MSelectProps = {
	id: "mathQn",
	value: '-1',
	label:'What is 2+2?',
	onChangeFn:changeFn,
	options:choice,
	};

	render(<W12MSelect {...requiredProps} />);
	await userEvent.selectOptions(
		// Find the select element, like a real user would.
		screen.getByRole('combobox'),
		// Find and select the Ireland option, like a real user would.
		screen.getByText('4'),
	  )
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

test('render Error message component',() => {
	const message:string[] = ["Length has to be between 3-23 characters"];
	render(<ErrorMessage message={message}/>);
	const error = screen.getByText("Length has to be between 3-23 characters");
	expect(error).toBeInTheDocument();
});
test('Use mock fn to validate species name', async () => {
	const requiredProps : W12MInputProps = {
		id: "species",
		value: '',
		type:'text',
		label:'Species Name',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue([]);
		render(<W12MInput {...requiredProps}/>);
		userEvent.type(screen.getByLabelText('Species Name'),'abcd');
		await waitFor(() => {
			// Check that the error div is not in the document
			expect(screen.queryByTestId('error')).not.toBeInTheDocument();
		  });
});

test('Check for validation error in species name', async () => {
	const requiredProps : W12MInputProps = {
		id: "species",
		value: 'test',
		type:'text',
		label:'Species Name',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue(['Wrong length']);
		render(<W12MInput {...requiredProps}/>);
		await userEvent.type(screen.getByLabelText('Species Name'),'a');
		expect(screen.getByText('Wrong length')).toBeInTheDocument();
		
});

test('Check for validation error in planet name', async () => {
	const requiredProps : W12MInputProps = {
		id: "planet",
		value: 'test1',
		type:'text',
		label:'Planet Name',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue([]);
		render(<W12MInput {...requiredProps}/>);
		await waitFor(() => {
			// Check that the error div is not in the document
			expect(screen.queryByTestId('error')).not.toBeInTheDocument();
		  });
});

test('Mock validation error in planet name', async () => {
	const requiredProps : W12MInputProps = {
		id: "planet",
		value: 'test',
		type:'text',
		label:'Planet Name',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue(['No special char']);
		render(<W12MInput {...requiredProps}/>);
		await userEvent.type(screen.getByLabelText('Planet Name'),'a!@$!');
		expect(screen.getByText('No special char')).toBeInTheDocument();
		
});
test('Check for validation in number of beings', async () => {
	const requiredProps : W12MInputProps = {
		id: "beings",
		value: '1000000000000000',
		type:'text',
		label:'Number of beings:',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue([]);
		render(<W12MInput {...requiredProps}/>);
		await waitFor(() => {
			// Check that the error div is not in the document
			expect(screen.queryByTestId('error')).not.toBeInTheDocument();
		  });
});

test('Mock validation error for number of beings', async () => {
	const requiredProps : W12MInputProps = {
		id: "beings",
		value: 'test1',
		type:'text',
		label:'Number of beings:',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue(['ONly numbers']);
		render(<W12MInput {...requiredProps}/>);
		await userEvent.type(screen.getByLabelText('Number of beings:'),'a!@$1');
		expect(screen.getByText('ONly numbers')).toBeInTheDocument();
		
});


test('Check for validation in reason input', async () => {
	const requiredProps : W12MInputProps = {
		id: "reason",
		value: '12fferfe',
		type:'text',
		label:'Reason for sparing',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue([]);
		render(<W12MInput {...requiredProps}/>);
		await waitFor(() => {
			// Check that the error div is not in the document
			expect(screen.queryByTestId('error')).not.toBeInTheDocument();
		  });
});

test('Mock validation error for reason', async () => {
	const requiredProps : W12MInputProps = {
		id: "reason",
		value: 'test1',
		type:'text',
		label:'Reason for sparing',
		onChangeFn: ()=>{},
		};
		mockValidateInput.validateInputElement.mockReturnValue(['Length greater than 17']);
		render(<W12MInput {...requiredProps}/>);
		await userEvent.type(screen.getByLabelText('Reason for sparing'),'a!@$1');
		expect(screen.getByText('Length greater than 17')).toBeInTheDocument();
		
});
test('Check for validation in dropdown', async () => {

	const choice = [
		{value:'4', label:'4'},
		{value:'0',label:'Not 4'},
	];
	const requiredProps : W12MSelectProps = {
		id: "math",
		value: '-1',
		label:'What is 2+2?',
		onChangeFn:()=>{},
		options:choice,
	};
	mockValidateInput.validateInputElement.mockReturnValue([]);
	
	render(<W12MSelect {...requiredProps} />);
	await userEvent.selectOptions(
		// Find the select element, like a real user would.
		screen.getByRole('combobox'),
		// Find and select the Ireland option, like a real user would.
		screen.getByRole('option', { name: '4' }),
	)
	
	expect(screen.queryByTestId('error')).not.toBeInTheDocument();
		 
});

test('Mock validation error for dropdown', async () => {
	
	const choice = [
		{value:'4', label:'4'},
		{value:'0',label:'Not 4'},
	];
	const requiredProps : W12MSelectProps = {
		id: "math",
		value: '-1',
		label:'What is 2+2?',
		onChangeFn:()=>{},
		options:choice,
	};
	mockValidateInput.validateInputElement.mockReturnValue(['answer should be 4']);
	
	render(<W12MSelect {...requiredProps} />);
	await userEvent.selectOptions(
		// Find the select element, like a real user would.
		screen.getByRole('combobox'),
		// Find and select the Ireland option, like a real user would.
		screen.getByRole('option', { name: 'Not 4' }),
	)
	
	expect(screen.getByText('answer should be 4')).toBeInTheDocument();	
});