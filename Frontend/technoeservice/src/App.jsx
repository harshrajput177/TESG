import React from 'react';
import { Routes, Route } from 'react-router-dom';

import IndiaLayout from './Component/IndiaLayout';
import UkLayout from './Component/UkLayout';

// ------------- Shared pages -------------
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
import APPage from './Page/ServicesPage/AppDevPage/AppDevPage';
import HRPage from './Page/Recuriment-Services/HRServicePage';
import PRPage from './Page/Recuriment-Services/PermanentServicePage';
import TPage from './Page/Recuriment-Services/TemporaryServiesPage';
import NichePage from './Page/Recuriment-Services/NicheServicePage';
import EditorsPicks from './Component/Blogs/Blogs';

// ------------- India only -------------
import Home from './Page/LandingPage/LandingPage';
import CareerPage from './Page/CareerPage/CareerPage';
import WhyPage from './Page/AboutPage/Why-Choose/Why-Choose-Page';
import WhoPage from './Page/AboutPage/Who-we-R-Page/Who-we-R-Page';

// ------------- UK only -------------
import UkPage from './Page/LandingMkPage/LandingMkPage';
import Careeruk from './Pages_2/CareerPage/Career-uk';
import Whyuk from './Pages_2/AboutPage/Why-Choose/why-uk';
import Whouk from './Pages_2/AboutPage/Who-we-R-Page/who-uk';
import CRMPageuk from './Pages_2/ServicesPage/CRMdevPage/CRMdevpage';
import SMMPageuk from './Pages_2/ServicesPage/SMMPage/SmmPage';
import WEBDEVPageuk from './Pages_2/ServicesPage/WebdevPage-uk/WebdevPage';
import PPCPageuk from './Pages_2/ServicesPage/PPCPage-uk/PPCpage';
import WEBHOSPageuk from './Pages_2/ServicesPage/WebhostingPage-uk/WebhosPage';
import SEOPageuk from './Pages_2/ServicesPage/SEOPage-uk/SEOpage';
import LEADPageuk from './Pages_2/ServicesPage/Lead-GenPage-uk/Lead-GenPage';
import EcomPageuk from './Pages_2/ServicesPage/EcommerceWebPage-uk/EomWebpage';
import APPageuk from './Pages_2/ServicesPage/AppDevPage-uk/AppDevPage';
import WEBDPageuk from './Pages_2/ServicesPage/WebdesignPage-uk/WebdesPage';
import HRPageuk from './Pages_2/Recuriment-Services/HRServicePage';
import PRPageuk from './Pages_2/Recuriment-Services/PermanentServicePage';
import TPageuk from './Pages_2/Recuriment-Services/TemporaryServiesPage';
import NichePageuk from './Pages_2/Recuriment-Services/NicheServicePage';

function App() {
  return (
    <Routes>
      {/* ---------- UK section ---------- */}
      <Route path="/uk" element={<UkLayout />}>            
        <Route index element={<UkPage />} />                    
        <Route path="ContactUs" element={<ContactPage />} />       
        <Route path="services/social-media" element={<SMMPageuk />} />
        <Route path="services/ppc" element={<PPCPageuk />} />
        <Route path="services/website-development" element={<WEBDEVPageuk />} />
        <Route path="services/website-design" element={<WEBDPageuk />} />
        <Route path="services/hosting" element={<WEBHOSPageuk />} />
        <Route path="services/seo" element={<SEOPageuk />} />
        <Route path="services/lead-gen" element={<LEADPageuk />} />
        <Route path="services/crm" element={<CRMPageuk />} />
        <Route path="services/ecommerce" element={<EcomPageuk />} />
        <Route path="services/android-app" element={<APPageuk />} />
        <Route path="Careers" element={<Careeruk />} />
        <Route path="about/Why-choose" element={<Whyuk />} />
        <Route path="about/Who-are" element={<Whouk />} />
        <Route path="services/HR-Services" element={<HRPageuk/>} />
        <Route path="services/Permanent-Staffing" element={<PRPageuk />} />
        <Route path="services/Temporary-Contract Staffing" element={<TPageuk />} />
        <Route path="services/Specialized-Niche-Hiring" element={<NichePageuk />} />
        <Route path="blogs" element={<EditorsPicks />} />
      </Route>

      {/* ---------- India section ---------- */}
      <Route path="/" element={<IndiaLayout />}>
        <Route index element={<Home />} />
        <Route path="ContactUs" element={<ContactPage />} />
        <Route path="services/social-media" element={<SMMPage />} />
        <Route path="services/ppc" element={<PPCPage />} />
        <Route path="services/website-development" element={<WEBDEVPage />} />
        <Route path="services/website-design" element={<WEBDPage />} />
        <Route path="services/hosting" element={<WEBHOSPage />} />
        <Route path="services/seo" element={<SEOPage />} />
        <Route path="services/lead-gen" element={<LEADPage />} />
        <Route path="services/crm" element={<CRMPage />} />
        <Route path="services/ecommerce" element={<EcomPage />} />
        <Route path="services/android-app" element={<APPage />} />
        <Route path="Careers" element={<CareerPage />} />
        <Route path="about/Why-choose" element={<WhyPage />} />
        <Route path="about/Who-are" element={<WhoPage />} />
        <Route path="services/HR-Services" element={<HRPage />} />
        <Route path="services/Permanent-Staffing" element={<PRPage />} />
        <Route path="services/Temporary-Contract Staffing" element={<TPage />} />
        <Route path="services/Specialized-Niche-Hiring" element={<NichePage />} />
        <Route path="blogs" element={<EditorsPicks />} />
      </Route>
    </Routes>
  );
}

export default App;


