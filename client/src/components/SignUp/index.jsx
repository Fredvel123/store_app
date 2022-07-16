import { useEffect, useState } from 'react';
// styles css
import Inputs from '../_Inputs';
// styled components
import { IconLeft, SignInStyles } from '../../styles/signup';
// react router
import { Link } from 'react-router-dom';
// regular expressions
import { regExp } from '../../configs/reg.exp';
// endpoints
import { createUser } from '../../configs/endpoints';
// images
import wallpaper from '../../assets/register.svg';
// theme and colors
import { darkTheme, lightTheme, fonts } from '../../styles/tools';
import { useSelector } from 'react-redux';
import ThemeButton from '../_ThemeButton';
import Button from '../_Button';

export default function Signup() {
	// to change the page title
	useEffect(() => {
		document.title = 'Store app - Sign Up';
	}, []);
	// theme
	const theme = useSelector((state) => state.theme.value);
	// states
	const [name, setName] = useState({ value: '', isValid: null });
	const [email, setEmail] = useState({ value: '', isValid: null });
	const [password, setPassword] = useState({ value: '', isValid: null });
	const [repeatPasswd, setRepeatPasswd] = useState({
		value: '',
		isValid: null,
	});
	const [response, setResponse] = useState({ message: '' });
	const passwordMatch = () => {
		if (password.value === repeatPasswd.value) {
			setRepeatPasswd({ ...repeatPasswd, isValid: true });
		} else {
			setRepeatPasswd({ ...repeatPasswd, isValid: false });
		}
	};

	const createNewUser = async () => {
		const sendInfo = await fetch(createUser, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				password: password.value,
				full_name: name.value,
			}),
		});
		const res = await sendInfo.json();
		setResponse(res);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		passwordMatch();
		if (!name.isValid) {
			setResponse({
				message:
					'Add a valid name without special characters or numbers',
			});
			return;
		}
		if (!repeatPasswd.isValid) {
			setResponse({ message: 'Make sure about your password' });
			return;
		}

		if (!email.isValid) {
			setResponse({ message: 'Add a valid password' });
			return;
		}
		createNewUser();
	};
	return (
		<SignInStyles color={theme ? lightTheme : darkTheme} fonts={fonts}>
			<div className="wallpaper">
				<img src={wallpaper} alt="wallpaper" />
				<h2>Store App</h2>
			</div>
			<div className="register">
				<div className="header">
					<Link to="/">
						<IconLeft color={theme ? lightTheme : darkTheme} />
					</Link>
					<h2>Sign Up</h2>
					<ThemeButton />
				</div>
				<form onSubmit={handlerSubmit}>
					<Inputs
						type="Email"
						placeh="Enter your email here"
						state={email}
						setState={setEmail}
						expression={regExp.email}
						label="Email"
					/>
					<Inputs
						type="text"
						label="Name"
						placeh="Enter your full name"
						state={name}
						setState={setName}
						expression={regExp.name}
					/>
					<Inputs
						type="password"
						label="Password"
						placeh="Please enter a secure password"
						state={password}
						setState={setPassword}
						expression={regExp.password}
					/>
					<Inputs
						type="password"
						label="Password"
						placeh="repeat your password"
						state={repeatPasswd}
						setState={setRepeatPasswd}
						validationPassword={passwordMatch}
					/>
					<Button text="Sign Up" />
				</form>
				<p>{response.message}</p>
			</div>
		</SignInStyles>
	);
}
