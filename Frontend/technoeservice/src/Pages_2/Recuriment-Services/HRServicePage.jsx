import React from 'react'
import Comp1 from '../../Component/Recuriment Services/HR-Services/HrCom-uk';
import Comp2 from '../../Component/Recuriment Services/HR-Services/HrCom2';





function HRPageuk() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
            {/* <Comp3 />
          <Comp2 />
          <Comp4 /> */}
          <Comp2 />
        
         

    </div>
  </div>
  )
}

export default HRPageuk;