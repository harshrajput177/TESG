import React from 'react'
import Comp1 from '../../Component/About/Careers/CareersCom1';
import Comp2 from '../../Component/About/Careers/CareersCom2';



function CareerPage() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
          <Comp2 />
   
    </div>
  </div>
  )
}

export default CareerPage;