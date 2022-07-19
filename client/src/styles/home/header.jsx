import styled from 'styled-components';
// fonts
import { fonts } from '../tools';
import { CloseOutlined, AlignRightOutlined } from '@ant-design/icons';

export const HeaderStyled = styled.div`
	background: ${({ color }) => color.secondary};
	color: ${({ color }) => color.titles};
	/* height: ${({ state }) => (state ? '20vh' : '100vh')}; */
	height: 20vh;
	width: 100%;
	padding: 0 5%;
	display: grid;
	align-items: center;
	grid-template-columns: 25% 75%;
	.title {
		h2 {
			font-family: ${fonts.title};
		}
	}
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		li {
		}
		.register {
			width: 20%;
		}
	}
	a {
		color: ${({ color }) => color.third};
		font-family: ${fonts.text};
		font-size: 17px;
		margin-right: 5%;
		&:hover {
			color: ${({ color }) => color.titles};
		}
	}
	@media screen and (max-width: 875px) {
		height: 10vh;
		grid: 20% 80%;
		a {
			margin-right: 3%;
		}
		.nav {
			li {
				margin-right: 10%;
			}
			.register {
				width: 50%;
			}
		}
	}
	@media screen and (max-width: 700px) {
		display: flex;
		justify-content: space-between;
		position: relative;
		.nav {
			background: ${({ color }) => color.secondary};
			position: absolute;
			left: 0;
			top: 0;
			height: 100vh;
			width: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			transform: ${({ state }) => (state ? '' : 'translateX(-105%)')};
			transition: ease-in-out 0.3s;
			a {
				margin-bottom: 10px;
				font-size: 20px;
			}
			li {
				width: 100%;
				margin-right: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.register {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
			}
		}
	}
`;

export const ClouseIcon = styled(CloseOutlined)`
	display: none;
	font-size: 25px;
	@media screen and (max-width: 700px) {
		display: block;
		position: fixed;
		top: 8%;
		right: 10%;
	}
`;
export const NavBarIcon = styled(AlignRightOutlined)`
	display: none;
	font-size: 25px;
	@media screen and (max-width: 700px) {
		display: block;
	}
`;
