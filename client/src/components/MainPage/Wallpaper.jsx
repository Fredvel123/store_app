import wallpaperSvg from '../../assets/shop.svg';
import { WallpaperMainStyled } from '../../styles/mainPage/wallpaperMain';
// react router
import { Link } from 'react-router-dom';
// colors
import { darkTheme, lightTheme } from '../../styles/tools';
// redux
import { useSelector } from 'react-redux';

export default function WallpaperMain({ theme }) {
	const auth = useSelector((state) => state.auth.value);

	return (
		<WallpaperMainStyled color={theme ? lightTheme : darkTheme}>
			<div className="letter">
				<h2>Buy best products from all of the world</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iste cum ex pariatur expedita, nihil accusantium,?
				</p>
				<div className="buttons">
					<Link to="/products">Products</Link>
					{auth.auth ? (
						<Link to="profile">Profile</Link>
					) : (
						<Link to="signup">Sign Up</Link>
					)}
				</div>
			</div>
			<div className="wallpaper">
				<img src={wallpaperSvg} alt="wallpaper" />
			</div>
		</WallpaperMainStyled>
	);
}
