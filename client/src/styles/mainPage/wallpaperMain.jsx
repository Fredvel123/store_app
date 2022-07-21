import styled from 'styled-components';
import { fonts } from '../tools';

export const WallpaperMainStyled = styled.div`
	height: 80vh;
	width: 100%;
	padding: 0 5%;
	color: ${({ color }) => color.titles};
	background: ${({ color }) => color.secondary};
	display: grid;
	grid-template-columns: 50% 50%;
	align-items: center;
	.wallpaper {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 80%;
		}
	}
	.letter {
		color: ${({ color }) => color.titles};
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		/* background: red; */
		height: 70%;
		margin: 5vh 0;
		h2 {
			font-size: 45px;
		}
		p {
			font-family: ${fonts.text};
			font-size: 17px;
		}
		.buttons {
			/* background: green; */
			a {
				margin-right: 10%;
				padding: 3vh 5%;
				border: 1px solid ${({ color }) => color.third};
				border-radius: 50px;
				font-size: 20px;
				color: ${({ color }) => color.third};
				&:hover {
					background: ${({ color }) => color.third};
					color: white;
					transition: 0.2s;
				}
			}
		}
	}
	@media screen and (max-width: 875px) {
		height: 90vh;
	}

	@media screen and (max-width: 950px) {
		.letter {
			height: 70%;
			margin: 5vh 0;
			h2 {
				font-size: 35px;
			}
			p {
				font-size: 15px;
			}
			.buttons {
				/* background: green; */
				a {
					font-size: 15px;
					padding: 2vh 5%;
				}
			}
		}
		.wallpaper {
			margin-top: 5vh;
		}
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		height: auto;
		.letter {
			height: 60vh;
			margin: 0 0;
			h2 {
				font-size: 45px;
			}
			p {
				font-size: 20px;
			}
		}
		.wallpaper {
			img {
				width: 100%;
			}
		}
	}
	@media screen and (max-width: 500px) {
		.letter {
			height: 60vh;
			margin: 0 0;
			h2 {
				font-size: 35px;
			}
			p {
				font-size: 15px;
			}
		}
	}
	@media screen and (max-width: 400px) {
		.letter {
			height: 60vh;
			margin: 0 0;
			h2 {
				font-size: 32px;
			}
			p {
				font-size: 14px;
			}
			.buttons {
				a {
					font-size: 15px;
				}
			}
		}
	}
`;
