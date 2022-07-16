import { useEffect } from 'react';
// import { getAllProducts } from './configs/endpoints';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
// redux
import { setTheme } from './redux/slices/theme';
import { setAuth } from './redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './components/SignIn';

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
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}
