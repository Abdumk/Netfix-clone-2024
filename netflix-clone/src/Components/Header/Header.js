// import React from 'react'
// import'./Header.css'
// import NetflixLogo from '../../Assets/images/NetflixLogo.png'
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// function Header() {
//   return (
//     // <div>Header</div>
//     <div className='header_outer_container'>
//     <div className='header_container'>
//         <div className='header_left'>
//             <ul>
//                 <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
//                 {/* <li>Netflix image</li> */}
//                 <li>Home</li>
//                 <li>TVShows</li>
//                 <li>Movies</li>
//                 <li>Latest</li>
//                 <li>MyList</li>
//                 <li>Browse by Languages</li>
//             </ul>
//         </div>
//         <div className='header_right'>
//             <ul>
//              {/* in package'json file from line 7-10 came from Material icons installed */}
// {/* for these go mui.com then search material icons copy "npm install @mui/icons-material @mui/material @emotion/styled @emotion/react" past in terminal ,make sure the place is main */}
//                 <li><SearchIcon /></li>
//                 <li><NotificationsNoneIcon /></li>
//                 <li><AccountBoxIcon /></li>
//                 <li><ArrowDropDownIcon /></li>
//             </ul>
//         </div>
//     </div> 
// </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import './Header.css';
import NetflixLogo from '../../Assets/images/NetflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
            <ul>
        <li className="hamburger-icon" onClick={toggleMobileMenu}>
              
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </li>
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
         
        
            <li className="mobile-hidden">Home</li>
            <li className="mobile-hidden">TV Shows</li>
            <li className="mobile-hidden">Movies</li>
            <li className="mobile-hidden">Latest</li>
            <li className="mobile-hidden">My List</li>
            <li className="mobile-hidden">Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
        {isMobileMenuOpen && (
            <div className="mobile_menu">
                <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li></ul>
            </div>
        )}
       
      </div>
    </div>
  );
}

export default Header;
