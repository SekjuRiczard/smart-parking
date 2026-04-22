import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GarageIcon from '@mui/icons-material/Garage';
import BlockIcon from '@mui/icons-material/Block';
import TodayIcon from '@mui/icons-material/Today';
import Kafel from './Kafel';
import { allBusySlots, getAllFreeSlots } from '../../../api/authService';

function Header() {
  const [slots, setSlots] = useState({ f: 0, b: 0 });

  useEffect(function() {
    async function load() {
      const [f, b] = await Promise.all([getAllFreeSlots(), allBusySlots()]);
      setSlots({ f: f?.length || 0, b: b?.length || 0 });
    }
    load();
  }, []);

  const sx = { width: 80, height: 80, marginRight: '25px' };

  return (
    <header>
      <div className="headerMain">
        <div className="headerOverview">
          <HomeIcon sx={{ width: 50, height: 50 }} />
          <span>Dashboard</span>
        </div>
        <div className="headerUserMenagment">
          <AccountBoxIcon sx={{ color: 'blue', width: 50, height: 50 }} />
          <Link to="/userPanel" className="navLink"><span>Your Account</span></Link>
        </div>
      </div>
      <div className="Kafle">
        <Kafel
          kafelDescription="Number of free parking spaces"
          icon={<GarageIcon sx={{ ...sx, color: 'blue' }} />}
          freeSlotsNumber={slots.f}
        />
        <Kafel
          kafelDescription="Number of occupied parking spaces"
          icon={<BlockIcon sx={{ ...sx, color: '#69163c' }} />}
          busySlotsNumber={slots.b}
        />
        <Kafel
          kafelDescription="Today date"
          icon={<TodayIcon sx={{ ...sx, color: 'black' }} />}
        />
      </div>
    </header>
  );
}

export default Header;