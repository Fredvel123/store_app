import styled from 'styled-components';
import { darkTheme, lightTheme } from '../tools';

export const ThemeButtonStyled = styled.div`
	cursor: pointer;
	/* background: #c1c1c1; */
	border: 4px solid
		${({ state }) => (state ? lightTheme.third : darkTheme.third)};
	width: 80px;
	height: 45px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 25px;
	position: relative;
	img {
		height: 75%;
	}
	.switch {
		position: absolute;
		transition: all 0.3s;
		margin-left: ${({ state }) => (state ? '35px' : '-35px')};
		/* margin-right: 35px; */
		border-radius: 25px;
		width: 35px;
		height: 35px;
		background: ${({ state }) =>
			state ? lightTheme.third : darkTheme.third};
	}
`;
