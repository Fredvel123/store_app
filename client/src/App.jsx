// import { getAllProducts } from './configs/endpoints';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signin';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<Signup />} title="singup" />
			</Routes>
		</BrowserRouter>
	);
}
