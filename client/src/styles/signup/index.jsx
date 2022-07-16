import styled from 'styled-components';
// icons
import { LeftOutlined } from '@ant-design/icons';

export const SignInStyles = styled.div`
	display: grid;
	grid-template-columns: 45% 55%;
	width: 100%;
	height: 100vh;
	.wallpaper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: ${({ color }) => color.third};
		h2 {
			color: ${({ color }) => color.titles};
		}
		img {
			width: 90%;
			margin-bottom: 8vh;
		}
	}
	.register {
		width: 100%;
		height: 100vh;
		padding: 5vh 10%;
		background: ${({ color }) => color.primary};
		.header {
			padding-top: 3vh;
			display: flex;
			align-items: center;
			h2 {
				letter-spacing: 1px;
				margin-left: 1.5%;
				color: ${({ color }) => color.titles};
			}
		}
		form {
			margin-top: 5vh;
		}
		p {
			margin: 2vh 0;
			color: ${({ color }) => color.texts};
			font-size: 15px;
		}
	}
	@media screen and (max-width: 700px) {
		grid-template-columns: 100%;
		height: auto;
		.wallpaper {
			height: 45vh;
			img {
				/* width: 20%; */
				height: 70%;
				margin-bottom: 2vh;
			}
		}
	}
`;

export const IconLeft = styled(LeftOutlined)`
	cursor: pointer;
	font-size: 40px;
	color: ${({ color }) => color.titles};
`;
