import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar_2 from '../Component/Navbar_2';
import Footer from '../Component/Footer_2';
import ScrollToTop from '../Scroll-top';


const UkLayout = () => {
  return (
    <>
      <Navbar_2 />
      <ScrollToTop />
      <Outlet /> {/* This is where UK page content will be rendered */}
      <Footer />
      </>
  );
};

export default UkLayout;
