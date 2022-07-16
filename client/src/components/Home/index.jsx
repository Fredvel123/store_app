import React, { useEffect } from 'react';
import { useState } from 'react';
import { userRole } from '../../configs/endpoints';
import { useSelector } from 'react-redux';

function Home() {
	const auth = useSelector((state) => state.auth.value);

	const [users, setUsers] = useState('');
	const getUserRole = async () => {
		const role = await fetch(userRole, {
			method: 'GET',
			headers: {
				token: auth.token,
			},
		});
		const res = await role.json();
		setUsers(res);
	};
	useEffect(() => {
		document.title = 'Home';
		getUserRole();
	}, []);

	return (
		<div>
			{/* <h2>{users}</h2> */}
			<button onClick={() => console.log(users)}>info</button>
		</div>
	);
}

export default Home;
