import { useEffect, useState } from 'react';
// styles css
import Inputs from './Inputs';
// styled components
import { IconLeft, SignInStyles } from '../../styles/signup';
// react router
import { Link } from 'react-router-dom';
// regular expressions
import regExp from '../../configs/reg.exp';

export default function Signup() {
	// to change the page title
	useEffect(() => {
		document.title = 'Store app - Sign Up';
	}, []);
	// states
	const [name, setName] = useState({ value: '', isValid: null });
	const [email, setEmail] = useState({ value: '', isValid: null });
	const [password, setPassword] = useState({ value: '', isValid: null });
	const [repeatPasswd, setRepeatPasswd] = useState({
		value: '',
		isValid: null,
	});
	const passwordMatch = () => {
		if (password.value === repeatPasswd.value) {
			setRepeatPasswd({ ...repeatPasswd, isValid: true });
		} else {
			setRepeatPasswd({ ...repeatPasswd, isValid: false });
		}
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		passwordMatch();
		console.log(name);
		console.log(email);
		console.log(password);
		console.log(repeatPasswd);
	};
	return (
		<SignInStyles>
			<div className="header">
				<Link to="/">
					<IconLeft />
				</Link>
				<h2>Sign Up</h2>
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
		</SignInStyles>
	);
}
