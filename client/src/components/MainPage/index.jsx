// components
import Header from './Header.jsx';
// redux
import { useSelector } from 'react-redux';

function MainPage() {
  const stateTheme = useSelector((state) => state.theme.value);
  return (
    <div>
      {/* <Header theme={stateTheme} /> */}
      <Header theme={stateTheme} />
    </div>
  );
}

export default MainPage;
