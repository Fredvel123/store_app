import React from 'react';
import { InputStyled } from '../../styles/signup';

function Inputs({
	type,
	placeh,
	setState,
	state,
	expression,
	validationPassword,
}) {
	const handlerChange = (e) => {
		setState({ ...state, value: e.target.value });
	};
	const validations = () => {
		if (expression) {
			if (expression.test(state.value)) {
				setState({ ...state, isValid: true });
			} else {
				setState({ ...state, isValid: false });
			}
		}
		if (validationPassword) {
			validationPassword();
		}
	};
	return (
		<InputStyled>
			<input
				type={type}
				onChange={handlerChange}
				placeholder={placeh}
				onKeyUp={validations}
				onBlur={validations}
			/>
		</InputStyled>
	);
}

export default Inputs;
