// Importing mediaQuery Hook from Material UI
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// Navbar import
import Navbar from './Navbar/Navbar';
import BottomNavbar from './BottomNavbar/BottomNavbar';

// TV Page import
import TVPage from './TVPage/TVPage';

function Main() {
  const tabPort = useMediaQuery('(max-width: 900px)');
  // const [loading, setLoading] = useState(true);
  // const spinner = document.getElementById('spinner');

  // if (spinner) {
  //   setTimeout(() => {
  //     spinner.style.display = 'none';
  //     setLoading(false);
  //   }, 3000);
  // }

  return (
    // !loading && (
    <>
      <Navbar />
      <TVPage />

      {tabPort && <BottomNavbar />}
    </>
    // )
  );
}

export default Main;
