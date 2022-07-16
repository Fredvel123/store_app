import styled from 'styled-components';

export const InputStyled = styled.div`
	label {
		color: ${({ color }) => color.titles};
		font-family: ${({ font }) => font.extra};
		font-weight: 300;
		font-size: 18px;
	}
	input {
		width: 100%;
		padding: 1.5vh 0;
		color: ${({ color }) => color.texts};
		font-size: 15px;
		margin-top: 0;
		margin-bottom: 5vh;
		border: none;
		background: #00000000;
		border-bottom: 1px solid ${({ color }) => color.gray};
		outline: none;
	}
	@media screen and (max-width: 700px) {
		label {
			font-size: 15px;
		}
		input {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 400px) {
		label {
			font-size: 13.5px;
		}
		input {
			font-size: 10.5px;
		}
	}
`;
