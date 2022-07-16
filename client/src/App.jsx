import { useEffect } from 'react';
// import { getAllProducts } from './configs/endpoints';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
// redux
import { setTheme } from './redux/slices/theme';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './components/SignIn';

export default function App() {
	const theme = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();
	// storaging theme at localstorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('theme'));
		if (data !== null) {
			dispatch(setTheme(data));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}
