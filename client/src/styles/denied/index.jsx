import styled from 'styled-components';

export const DeniedPageStyled = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 50% 50%;
	h2 {
		color: ${({ color }) => color.titles};
	}
	p {
		color: ${({ color }) => color.titles};
	}
	.wallpaper {
		background: ${({ color }) => color.third};
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 80%;
		}
	}
	.message {
		height: 100vh;
		background: ${({ color }) => color.primary};
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	@media screen and (max-width: 700px) {
		grid-template-columns: 100%;
	}
`;
