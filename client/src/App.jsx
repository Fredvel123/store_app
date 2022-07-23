import { useEffect } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// redux
import { setTheme } from './redux/slices/theme';
import { setAuth } from './redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
// components
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import DeniedHome from './components/DeniedPage';
import MainPage from './components/MainPage';
import Profile from './components/Profile';

export default function App() {
	const theme = useSelector((state) => state.theme.value);
	const auth = useSelector((state) => state.auth.value);
	const dispatch = useDispatch();

	// storaging theme at localstorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('theme'));
		if (data !== null) {
			dispatch(setTheme(data));
		}
		document.title = 'Store App';
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	// storaging auth at localstorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('auth'));
		if (data !== null) {
			dispatch(setAuth(data));
		}
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		localStorage.setItem('auth', JSON.stringify(auth));
	}, [auth]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<SignIn />} />
				<Route
					path="/profile"
					element={
						auth.auth ? (
							<Profile />
						) : (
							<DeniedHome message="You need to have an account" />
						)
					}
				/>
				<Route
					path="/home"
					element={
						auth.auth ? (
							<Home />
						) : (
							<DeniedHome message="Because you don't have an account" />
						)
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
