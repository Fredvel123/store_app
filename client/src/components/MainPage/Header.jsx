import { useState } from 'react';
// react router
import { Link } from 'react-router-dom';
// styled components
import { ClouseIcon, HeaderStyled, NavBarIcon } from '../../styles/home/header';
// themes and fonts
import { darkTheme, lightTheme } from '../../styles/tools';
// components
import ThemeButton from '../_ThemeButton';

function Header({ theme }) {
  const [navBar, setnavBar] = useState(false);
  // open and close navbar
  const handlerNavBar = () => {
    setnavBar(!navBar);
  };

  return (
    <HeaderStyled color={theme ? lightTheme : darkTheme} state={navBar}>
      <div className="title">
        <h2>Store App</h2>
      </div>
      <NavBarIcon onClick={handlerNavBar} />
      <div className="nav">
        <ClouseIcon onClick={handlerNavBar} />
        <li>
          {/* <Link to="home">Home</Link> */}
          <Link to="products">Products</Link>
          <Link to="profile">Profile</Link>
          <Link to="contact">Contact</Link>
        </li>
        <div className="register">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <ThemeButton />
      </div>
    </HeaderStyled>
  );
}

export default Header;
