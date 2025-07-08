import React from 'react'
import Comp1 from '../../Component/Recuriment Services/Temperory-Staffing/TemperoryStafingCom1';
import Comp2 from '../../Component/Recuriment Services/Temperory-Staffing/TemperoryStafingCom2';
import Comp3 from '../../Component/Recuriment Services/Temperory-Staffing/TemperoryStafingCom3';





function TPage() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
          <Comp2 />
          {/* <Comp4 /> */}
        <Comp3 />
         

    </div>
  </div>
  )
}

export default TPage;