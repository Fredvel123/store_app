import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonStyled } from '../../styles/_button';
import { darkTheme, lightTheme, fonts } from '../../styles/tools';

function Button({ text }) {
	const theme = useSelector((state) => state.theme.value);

	return (
		<ButtonStyled color={theme ? lightTheme : darkTheme} font={fonts}>
			{text}
		</ButtonStyled>
	);
}

export default Button;
