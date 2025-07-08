import React from 'react'
import Comp1 from '../../../Component/Services/CRMdevelopment/CRM-Uk';
import Comp2 from '../../../Component/Services/CRMdevelopment/CRMcom2';
import Comp3 from '../../../Component/Services/CRMdevelopment/CRMcom3';
import Comp4 from '../../../Component/Services/CRMdevelopment/CRMcom4';




function CRMPageuk() {

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

export default CRMPageuk;