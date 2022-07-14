import { useEffect } from 'react';

export default function Signup() {
	// to change the page title
	useEffect(() => {
		document.title = 'Store app - Sign Up';
	}, []);

	return (
		<div>
			<h2>Sign up</h2>
		</div>
	);
}
