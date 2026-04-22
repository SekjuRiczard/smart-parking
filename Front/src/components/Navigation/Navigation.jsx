import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import InfoIcon from '@mui/icons-material/Info';

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="nav-container">
      <nav className={collapsed ? 'collapsed' : ''}>
        <img className="logo" src="/logo.png" alt="Logo" />
        <ul>
          {[
            ['/', 'Dashboard', <SignalCellularAltIcon />],
            ['/freeSlots', 'Free Slots', <NoCrashIcon />],
            ['/busySlots', 'Busy Slots', <CarCrashIcon />],
            ['/informations', 'Information', <InfoIcon />]
          ].map(function(item) {
            return (
              <Link key={item[0]} to={item[0]} className="navLink">
                <li><NavigationItem itemDescription={item[1]} icon={item[2]} /></li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <button onClick={function() { setCollapsed(!collapsed); }} className="toggle-button">
        {collapsed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
      </button>
    </div>
  );
}

export default Navigation;