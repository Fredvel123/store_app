import styled from 'styled-components';
import { darkTheme, lightTheme } from '../tools';

export const ThemeButtonStyled = styled.div`
	cursor: pointer;
	/* background: #c1c1c1; */
	border: 4px solid
		${({ state }) => (state ? lightTheme.third : darkTheme.third)};
	width: 60px;
	height: 35px;
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
		margin-left: ${({ state }) => (state ? '24px' : '-24px')};
		/* margin-right: 35px; */
		border-radius: 25px;
		width: 25px;
		height: 25px;
		background: ${({ state }) =>
    state ? lightTheme.third : darkTheme.third};
	}
	@media screen and (max-width: 700px) {
		border: 2px solid
			${({ state }) => (state ? lightTheme.third : darkTheme.third)};
		width: 50px;
		height: 25px;
		.switch {
			width: 22px;
			height: 22px;
		}
	}
`;
