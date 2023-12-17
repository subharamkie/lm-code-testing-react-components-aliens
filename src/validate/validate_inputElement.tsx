
export const validateInputElement : (value : string,id:string) => string[] = (id,value) => {
	//check which type of input element is being passed by using the id, then apply the validation rules
	const errors:string[] = [];
	console.log(id)
	switch(id){
		case 'species':
			//len 3-23,no number/special character
			if(value.length <3 || value.length >23){
				errors.push('Length has to be between 3-23 characters');
			}
			if(value.match(/[^a-zA-Z]+/)){
				errors.push('No numbers or special characters allowed!');
			}
			return errors;
		
		case 'planet':
			if(value.length <2 || value.length >49){
				errors.push('Length has to be between 2-49 characters');
			}
			
			if(value.match(/[^a-zA-Z0-9]+/)){
				errors.push('No special characters allowed!');
			}
			return errors;
		case'beings':
			if(value.match(/[^0-9]/)){
				errors.push('Only numbers above 1,000,000,000 are allowed');
			}
			if(parseInt(value) < 1000000000 ){
				errors.push('Number must be above 1,000,000,000');
			}
			return errors;
		case 'mathQn':
			if(value !== '4'){
				errors.push('Answer has to be 2+2');
			}
			if(value === ''){
				errors.push('An option must be selected');
			}
			return errors;
		case 'reason':
			if(value.length <17 || value.length > 153){
				errors.push('Length has to be between 17-153 characters.');
			}
			return errors;
	}
	return errors;
};
