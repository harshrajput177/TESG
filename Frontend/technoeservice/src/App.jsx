import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Page/LandingPage/LandingPage';
import './App.css';
import ContactPage from './Page/ContactPage/ContactPage';
import SMMPage from './Page/ServicesPage/SMMPage/SmmPage';
import PPCPage from './Page/ServicesPage/PPCPage/PPCpage';
import WEBDEVPage from './Page/ServicesPage/WebdevPage/WebdevPage';
import WEBDPage from './Page/ServicesPage/WebdesignPage/WebdesPage';
import WEBHOSPage from './Page/ServicesPage/WebhostingPage/WebhosPage';
import SEOPage from './Page/ServicesPage/SEOPage/SEOpage';
import LEADPage from './Page/ServicesPage/Lead-GenPage/Lead-GenPage';
import CRMPage from './Page/ServicesPage/CRMdevPage/CRMdevpage';
import EcomPage from './Page/ServicesPage/EcommerceWebPage/EomWebpage';
import CareerPage from './Page/CareerPage/CareerPage';
import WhyPage from './Page/AboutPage/Why-Choose/Why-Choose-Page';
import WhoPage from './Page/AboutPage/Who-we-R-Page/Who-we-R-Page';
import APPage from './Page/ServicesPage/AppDevPage/AppDevPage';
import HRPage from './Page/Recuriment-Services/HRServicePage';
import PRPage from './Page/Recuriment-Services/PermanentServicePage';
import TPage from './Page/Recuriment-Services/TemporaryServiesPage';
import NichePage from './Page/Recuriment-Services/NicheServicePage';
import ScrollToTop from './Scroll-top';
import WhatsappFloat from './Component/Whatsapp';
import Navbar_2 from './Component/Navbar_2';
import UkPage from './Page/LandingMkPage/LandingMkPage';
import EditorsPicks from './Component/Blogs/Blogs';

function App() {

  const location = useLocation();

  const isUKPage = location.pathname.startsWith("/uk");

  return (
    <>
      {isUKPage ? <Navbar_2 /> : <Navbar />}
      <ScrollToTop />
      <WhatsappFloat />
      
      <Routes>
        {/* ✅ Custom UK page route */}
        <Route path="/uk" element={<UkPage />} />
        
        {/* ✅ All your existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactPage />} />
        <Route path="/services/social-media" element={<SMMPage />} />
        <Route path="/services/ppc" element={<PPCPage />} />
        <Route path="/services/website-development" element={<WEBDEVPage />} />
        <Route path="/services/website-design" element={<WEBDPage />} />
        <Route path="/services/hosting" element={<WEBHOSPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/lead-gen" element={<LEADPage />} />
        <Route path="/services/crm" element={<CRMPage />} />
        <Route path="/services/ecommerce" element={<EcomPage />} />
        <Route path="/services/android-app" element={<APPage />} />
        <Route path="/Careers" element={<CareerPage />} />
        <Route path="/about/Why-choose" element={<WhyPage />} />
        <Route path="/about/Who-are" element={<WhoPage />} />
        <Route path="/services/HR-Services" element={<HRPage />} />
        <Route path="/services/Permanent-Staffing" element={<PRPage />} />
        <Route path="/services/Temporary-Contract Staffing" element={<TPage />} />
        <Route path="/services/Specialized-Niche-Hiring" element={<NichePage />} />
         <Route path="/blogs" element={<EditorsPicks />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

