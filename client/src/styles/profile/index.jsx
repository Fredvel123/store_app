import styled from 'styled-components';

export const ProfileStyled = styled.div`
	background: ${({ color }) => color.primary};
	.header {
		padding: 3vh 5%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
