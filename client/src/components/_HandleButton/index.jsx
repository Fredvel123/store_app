import { useState } from 'react';
// styled components
import {
	CloseIcon,
	HandleButtonStyled,
	OpenIcon,
} from '../../styles/_handleButton';
// redux
import { useSelector } from 'react-redux';
// colors
import { lightTheme, darkTheme } from '../../styles/tools';
import { Link } from 'react-router-dom';

function Handlebutton({ admin }) {
	const theme = useSelector((state) => state.theme.value);
	const [buttonOpen, setButtonOpen] = useState(false);

	const handlerButtonState = () => {
		setButtonOpen(!buttonOpen);
	};

	return (
		<HandleButtonStyled color={theme ? lightTheme : darkTheme}>
			<div className="face" onClick={handlerButtonState}>
				<p>profile</p>
				{buttonOpen ? (
					<OpenIcon color={theme ? lightTheme : darkTheme} />
				) : (
					<CloseIcon color={theme ? lightTheme : darkTheme} />
				)}
			</div>
			{buttonOpen ? (
				<div className="list">
					<p className="text">Log Out</p>
					<Link className="text" to="/edit">
						edit{' '}
					</Link>
					{admin ? (
						<Link className="text" to="/dashboard">
							panel
						</Link>
					) : null}
				</div>
			) : null}
		</HandleButtonStyled>
	);
}

export default Handlebutton;
