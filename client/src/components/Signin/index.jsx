import { useEffect } from 'react';
// styles css
import Inputs from './Inputs';
// styled components
import { IconLeft, SignInStyles } from '../../styles/signup';
// react router
import { Link } from 'react-router-dom';

export default function Signup() {
	// to change the page title
	useEffect(() => {
		document.title = 'Store app - Sign Up';
	}, []);

	return (
		<SignInStyles>
			<div className="header">
				<Link to="/">
					<IconLeft />
				</Link>
				<h2>Sign Up</h2>
			</div>
			<form>
				<Inputs type="email" placeh="email" />
				<Inputs type="text" placeh="full name" />
				<Inputs type="password" placeh="password" />
				<Inputs type="password" placeh="repeat your password" />
				{/* <Inputs type='' placeh=''  /> */}
			</form>
		</SignInStyles>
	);
}
