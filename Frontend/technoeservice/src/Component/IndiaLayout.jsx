import React from 'react';
import IndiaNavbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';

const IndiaLayout = () => {
  return (
    <>
      <IndiaNavbar />
      <Outlet />
    </>
  );
};

export default IndiaLayout;
