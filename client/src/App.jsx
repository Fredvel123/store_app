import { useEffect } from 'react';
// import { getAllProducts } from './configs/endpoints';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
// redux
import { setTheme } from './redux/slices/theme';
import { setAuth } from './redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './components/SignIn';
import Home from './components/Home';
import DeniedHome from './components/DeniedPage';
import MainPage from './components/MainPage';

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
					path="/home"
					element={auth.auth ? <Home /> : <DeniedHome />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
