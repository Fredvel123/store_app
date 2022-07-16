import React, { useEffect } from 'react';
import { useState } from 'react';
import { getAllUsers } from '../../configs/endpoints';

function Home() {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		const users = await fetch(getAllUsers);
		const res = await users.json();
		setUsers(res);
	};
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			{users.length > 0
				? users.map((item) => <h2>{item.full_name}</h2>)
				: null}
		</div>
	);
}

export default Home;
