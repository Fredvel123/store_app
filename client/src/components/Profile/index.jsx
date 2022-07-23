import { useEffect, useState } from 'react';
// redux
import { useSelector } from 'react-redux';
// react routert
import { Link } from 'react-router-dom';
// endpoints
import { infoByUser } from '../../configs/endpoints';
// styled components
import { ProfileStyled } from '../../styles/profile';
import { IconLeft } from '../../styles/signup';
// icons
import { darkTheme, lightTheme } from '../../styles/tools';
// components
import DeniedHome from '../DeniedPage';
import Handlebutton from '../_HandleButton';

function Profile() {
	const auth = useSelector((state) => state.auth.value);
	// eslint-disable-next-line
	const theme = useSelector((state) => state.theme.value);

	const [user, setUser] = useState([]);
	const [error, setError] = useState({ message: '', error: null });

	useEffect(() => {
		document.title = 'profile';
	}, []);
	const getInfoByUser = async () => {
		try {
			const request = await fetch(infoByUser, {
				method: 'GET',
				headers: {
					token: auth.token,
				},
			});
			const response = await request.json();
			setUser(response);
			setError({ error: false });
		} catch (err) {
			setError({ message: 'There no connection in server', error: true });
			console.error(err);
		}
	};
	useEffect(() => {
		getInfoByUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{error.error === false ? (
				<ProfileStyled color={theme ? lightTheme : darkTheme}>
					<div className="header">
						<Link to="/">
							<IconLeft color={theme ? lightTheme : darkTheme} />
						</Link>
						<Handlebutton
							admin={user.role === 'admin' ? true : false}
						/>
					</div>
					<div className="title">
						<h2>Personal Info</h2>
						<p>
							Here is your info and nobody else can see it, except
							the admin users
						</p>
					</div>
					<div className="sub-title">
						{user.role === 'admin' ? (
							<div className="dashboard">
								<p>Only Admins can access to dashboard</p>
								<Link to="/dashboard">dashboard</Link>
							</div>
						) : null}
					</div>
					<div className="info">
						<div>
							<p>Name</p>
							<p>{user.full_name}</p>
						</div>
						<div>
							<p>Phone</p>
							<p>{user.phone === null ? 'null' : user.phone}</p>
						</div>
						<div>
							<p>Email</p>
							<p>{user.email === null ? 'null' : user.email}</p>
						</div>
						<div>
							<p>Profession</p>
							<p>
								{user.profession === null
									? 'null'
									: user.profession}
							</p>
						</div>
						<div>
							<p>Gender</p>
							<p>{user.gender === null ? 'null' : user.gender}</p>
						</div>
					</div>
				</ProfileStyled>
			) : (
				<DeniedHome message={error.message} />
			)}
		</div>
	);
}

export default Profile;
