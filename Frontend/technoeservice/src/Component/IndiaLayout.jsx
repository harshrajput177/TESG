import React from 'react';
import IndiaNavbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import footer from '../Component/Footer'
import Footer from '../Component/Footer';

const IndiaLayout = () => {
  return (
    <>
      <IndiaNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default IndiaLayout;
