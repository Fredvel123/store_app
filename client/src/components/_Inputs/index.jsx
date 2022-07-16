import React from 'react';
import { InputStyled } from '../../styles/_inputs';
// color
import { darkTheme, lightTheme, fonts } from '../../styles/tools';
import { useSelector } from 'react-redux';

function Inputs({
	type,
	placeh,
	setState,
	state,
	expression,
	validationPassword,
	label,
}) {
	const theme = useSelector((state) => state.theme.value);
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
		<InputStyled color={theme ? lightTheme : darkTheme} font={fonts}>
			<label htmlFor={type}> {label} </label>
			<input
				id={type}
				type={type}
				onChange={handlerChange}
				placeholder={placeh}
				onKeyUp={validations}
				onBlur={validations}
				required
			/>
		</InputStyled>
	);
}

export default Inputs;
