import { useEffect, useState } from 'react';
// styles css
import Inputs from './Inputs';
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
import ThemeButton from '../ThemeButton';

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
	const [response, setResponse] = useState('');
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
		console.log(res);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		passwordMatch();
		if (
			password.isValid &
			name.isValid &
			email.isValid &
			repeatPasswd.isValid
		) {
			createNewUser();
		}
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
						<IconLeft />
					</Link>
					<h2>Sign Up</h2>
					<ThemeButton />
					<img
						src="https://github.com/Fredvel123/todo_app/blob/master/src/assets/images/icon-moon.svg"
						alt=""
					/>
				</div>
				<form onSubmit={handlerSubmit}>
					<Inputs
						type="email"
						placeh="email"
						state={email}
						setState={setEmail}
						expression={regExp.email}
					/>
					<Inputs
						type="text"
						placeh="full name"
						state={name}
						setState={setName}
						expression={regExp.name}
					/>
					<Inputs
						type="password"
						placeh="password"
						state={password}
						setState={setPassword}
						expression={regExp.password}
					/>
					<Inputs
						type="password"
						placeh="repeat your password"
						state={repeatPasswd}
						setState={setRepeatPasswd}
						validationPassword={passwordMatch}
					/>
					<button>Sign Up</button>
				</form>
			</div>
		</SignInStyles>
	);
}
