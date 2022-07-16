import styled from 'styled-components';

export const ButtonStyled = styled.button`
	background: ${({ color }) => color.button};
	width: 120px;
	height: 35px;
	border-radius: 25px;
	cursor: pointer;
	color: white;
	border: none;
	transition: all ease-in 0.2s;
	&:hover {
		transition: all ease-in 0.2s;
		background: ${({ color }) => color.hover};
	}
	@media screen and (max-width: 700px) {
		width: 100px;
	}
	@media screen and (max-width: 400px) {
		width: 80px;
	}
`;
