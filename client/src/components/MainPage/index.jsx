// redux
import { useSelector } from 'react-redux';
// components
import Header from './Header.jsx';
import WallpaperMain from './Wallpaper.jsx';

function MainPage() {
	const stateTheme = useSelector((state) => state.theme.value);
	return (
		<div>
			<Header theme={stateTheme} />
			<WallpaperMain theme={stateTheme} />
		</div>
	);
}

export default MainPage;
