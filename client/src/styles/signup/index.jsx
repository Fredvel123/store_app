import styled from 'styled-components';
import { colors, fonts } from '../tools';
// icons
import { LeftOutlined } from '@ant-design/icons';

export const SignInStyles = styled.div`
	background: ${colors.Dark_Blue};
	font-family: ${fonts.extra};
	width: 80%;
	margin: 0 10%;
	.header {
		padding-top: 3vh;
		display: flex;
		align-items: center;
		h2 {
			letter-spacing: 1px;
			margin-left: 1.5%;
		}
	}
	form {
		button {
			margin: auto;
		}
	}
`;

export const IconLeft = styled(LeftOutlined)`
	cursor: pointer;
	font-size: 40px;
	color: ${colors.Blue_Gray};
`;

export const InputStyled = styled.div`
	input {
		width: 100%;
	}
`;
