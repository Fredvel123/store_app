import styled from 'styled-components';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { fonts } from '../tools';

export const HandleButtonStyled = styled.div`
	width: 100px;
	cursor: pointer;
	color: ${({ color }) => color.third};
	.face {
		display: flex;
		justify-content: space-between;
		border: 1px solid ${({ color }) => color.third};
		padding: 1vh 5%;
		/* background: ${({ color }) => color.secondary}; */
		border-radius: 10px;
		span {
			color: ${({ color }) => color.titles};
			font-size: 15px;
			font-family: ${fonts.text};
		}
	}
	.list {
		border: 1px solid ${({ color }) => color.third};
		width: 100px;
		position: absolute;
		padding: 1vh 1%;
		/* background: red; */
		display: flex;
		border-radius: 10px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1.5vh;
		.text {
			color: ${({ color }) => color.third};
			&:hover {
				color: ${({ color }) => color.titles};
			}
		}
	}
`;

export const CloseIcon = styled(CaretDownOutlined)`
	color: ${({ color }) => color.titles};
	cursor: pointer;
	font-size: 28px;
`;
export const OpenIcon = styled(CaretUpOutlined)`
	color: ${({ color }) => color.titles};
	cursor: pointer;
	font-size: 28px;
`;
