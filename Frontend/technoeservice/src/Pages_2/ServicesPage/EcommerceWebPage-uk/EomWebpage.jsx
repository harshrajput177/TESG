import React from 'react'
import Comp1 from '../../../Component/Services/EcommerceWebsite/Ecom-uk';
import Comp2 from '../../../Component/Services/EcommerceWebsite/Ecom2';
import Comp3 from '../../../Component/Services/EcommerceWebsite/Ecom3';
import Comp4 from '../../../Component/Services/EcommerceWebsite/Ecom4';
// import Comp5 from '../../../Component/Services/SMM/SMMcom5';
// import Comp5 from '../../Component/Landing/LandingCom5';
// import Comp6 from '../../Component/Landing/LandingCom6';



function EcomPageuk() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
            <Comp3 />
          <Comp2 />
        <Comp4 />
   
         

    </div>
  </div>
  )
}

export default EcomPageuk;