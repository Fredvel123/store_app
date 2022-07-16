import React, { useEffect, useState } from 'react';
// styled components
import { SigninStyled } from '../../styles/signin';
import { IconLeft } from '../../styles/signup';
// images
import wallpaper from '../../assets/register.svg';
// themes and fonts
import { darkTheme, lightTheme, fonts } from '../../styles/tools';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/slices/auth';
// react router
import { Link, useNavigate } from 'react-router-dom';
// end points
import { logInUser } from '../../configs/endpoints';
// components
import ThemeButton from '../_ThemeButton';
import Inputs from '../_Inputs';
import Button from '../_Button';

function SignIn() {
	useEffect(() => {
		document.title = 'Store App - Sign In';
	}, []);

	// theme
	const theme = useSelector((state) => state.theme.value);
	// register user
	const [email, setEmail] = useState({ value: '' });
	const [password, setPassword] = useState({ value: '' });
	// redux
	const auth = useSelector((state) => state.auth.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const navigateToHome = async () => {
		const res = await auth.auth;
		if (res === true) {
			navigate('/home', { replace: true });
		}
	};

	const registerUser = async () => {
		const request = await fetch(logInUser, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				password: password.value,
			}),
		});
		const res = await request.json();
		dispatch(setAuth(res));
	};

	// sending info
	const handlerSubmit = (e) => {
		e.preventDefault();
		registerUser();
	};
	useEffect(() => {
		navigateToHome();
		// eslint-disable-next-line
	}, [handlerSubmit]);

	return (
		<SigninStyled color={theme ? lightTheme : darkTheme} font={fonts}>
			<div className="wallpaper">
				<img src={wallpaper} alt="wallpaper" />
				<h2>Store App</h2>
			</div>

			<div className="register">
				<div className="header">
					<Link to="/">
						<IconLeft color={theme ? lightTheme : darkTheme} />
					</Link>
					<h2>Sign In</h2>
					<ThemeButton />
				</div>
				<div className="advice">
					<h3>You don't have an account yet?</h3>
					<Link to="/signup">Sign Up</Link>
				</div>
				<form onSubmit={handlerSubmit}>
					<Inputs
						type="email"
						placeh="Enter your email"
						label="Email"
						state={email}
						setState={setEmail}
					/>
					<Inputs
						type="password"
						placeh="Enter your password"
						label="Password"
						state={password}
						setState={setPassword}
					/>
					<Button text="Sign In" />
				</form>
				<p>{auth.message}</p>
			</div>
		</SigninStyled>
	);
}

export default SignIn;
