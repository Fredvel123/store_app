import React, { useEffect } from 'react';
// redux
import { useSelector } from 'react-redux';
// react router
import { Link } from 'react-router-dom';
// image
import image from '../../assets/denied.svg';
// styled components
import { DeniedPageStyled } from '../../styles/denied';
// components
import Button from '../_Button';
// theme and fonts
import { lightTheme, darkTheme } from '../../styles/tools';
import ThemeButton from '../_ThemeButton';

function DeniedHome({ message }) {
  useEffect(() => {
    document.title = 'Access denied';
  }, []);

  const theme = useSelector((state) => state.theme.value);
  return (
    <DeniedPageStyled color={theme ? lightTheme : darkTheme}>
      <div className="wallpaper">
        <img src={image} alt="" />
      </div>
      <div className="message">
        <h2>You Can't access here</h2>
        <p>{message}</p>
        <ThemeButton />
        <Link to="/">
          <Button text="Go To Home" />{' '}
        </Link>
        <Link to="/signin">
          <Button text="Sign In" />{' '}
        </Link>
        <Link to="/signup">
          <Button text="Sign Up" />{' '}
        </Link>
      </div>
    </DeniedPageStyled>
  );
}

export default DeniedHome;
