export const validateInputElement : (value : string,id:string) => string[] = (id,value) => {
	//check which type of input element is being passed by using the id, then apply the validation rules
	const errors:string[] = [];
	console.log(id)
	switch(id){
		case 'species':
			//len 3-23,no number/special character
			if(value.length <3 || value.length >23){
				errors.push('Length has to be between 3-23 characters');
			}/*
			if(value.match(/[^a-zA-Z0-9]+/)){
				errors.push('No numbers or special characters allowed!');
			}*/
			return errors;
		
		case 'planet':break;
		case'beings':break;
		case 'mathQn':break;
		case 'reason':break;
	}
	return errors;
};
