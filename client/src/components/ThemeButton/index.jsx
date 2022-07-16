import React from 'react';
// styled components1
import { ThemeButtonStyled } from '../../styles/themeButton';
// icpns
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/theme';

function ThemeButton() {
	const theme = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();
	const changeTheme = () => {
		dispatch(setTheme(!theme));
	};
	return (
		<ThemeButtonStyled state={theme} onClick={changeTheme}>
			<img src={moonIcon} alt="" />
			<img src={sunIcon} alt="" />
			<div className="switch"></div>
		</ThemeButtonStyled>
	);
}

export default ThemeButton;
