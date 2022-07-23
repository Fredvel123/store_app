import React, { useState, useEffect } from 'react';
// end points
import { userRole } from '../../configs/endpoints';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/slices/auth';

function Home() {
	const auth = useSelector((state) => state.auth.value);
	const dispatch = useDispatch();
	const [role, setRole] = useState('');
	const getUserRole = async () => {
		const user = await fetch(userRole, {
			method: 'GET',
			headers: {
				token: auth.token,
			},
		});
		const res = await user.json();
		setRole(res);
	};
	useEffect(() => {
		document.title = 'Home';
		getUserRole();
	}, []);

	const removeToken = () => {
		dispatch(setAuth({ auth: false, token: '' }));
	};

	return (
		<div>
			{role.admin ? <h2>role: admin</h2> : <h2>roleL user</h2>}
			<button onClick={removeToken}>delete token</button>
		</div>
	);
}

export default Home;
