import styled from 'styled-components';

export const SigninStyled = styled.div`
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
				margin-right: 5%;
			}
		}
		form {
			margin-top: 10vh;
		}
		p {
			margin: 2vh 0;
			color: ${({ color }) => color.texts};
			font-size: 15px;
		}
		.advice {
			margin-top: 4vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			h3 {
				color: ${({ color }) => color.titles};
				font-size: 15px;
			}
			a {
				font-size: 20px;
				font-weight: 200;
				color: ${({ color }) => color.info};
			}
		}
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: 100%;
		height: auto;
		.wallpaper {
			height: 45vh;
			img {
				height: 70%;
				margin-bottom: 2vh;
			}
		}
		.register {
			.header {
				padding-top: 3vh;
				h2 {
					letter-spacing: 1px;
					margin-left: 1.5%;
					font-size: 20px;
					color: ${({ color }) => color.titles};
				}
			}
		}
	}
	@media screen and (max-width: 500px) {
		.register {
			.advice {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				a {
					margin-top: 2vh;
					font-size: 16px;
					margin-bottom: 3vh;
				}
			}
		}
	}
`;
