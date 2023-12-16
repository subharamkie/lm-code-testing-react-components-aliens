import { render,screen } from '@testing-library/react';
import W12MForm from './W12MForm';



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
test('renders planet text input', () => {
	render(<W12MForm/>);
	const planetTitle = screen.getByLabelText('Planet Name:');
	expect(planetTitle).toBeInTheDocument();
});
test('renders number of being text input', () => {
	render(<W12MForm/>);
	const beingsTitle = screen.getByLabelText('Number of beings:');
	expect(beingsTitle).toBeInTheDocument();
});
test('renders math qn text input', () => {
	render(<W12MForm/>);
	const mathTitle = screen.getByLabelText('What is 2+2?');
	expect(mathTitle).toBeInTheDocument();
});
test('renders reason text input', () => {
	render(<W12MForm/>);
	const reasonTitle = screen.getByLabelText('Reason for sparing:');
	expect(reasonTitle).toBeInTheDocument();
});
test('renders submit button', () => {
	render(<W12MForm/>);
	const button = screen.getByText('Submit');
	expect(button).toBeInTheDocument();
});
