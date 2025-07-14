import React from 'react'
import Comp1 from '../../Component/Recuriment Services/Permanent-Staffing/PermanentStaffing-uk';
import Comp2 from '../../Component/Recuriment Services/Permanent-Staffing/PermanentStafingCom2';
import Comp3 from '../../Component/Recuriment Services/Permanent-Staffing/PermanentStafingCom3';
import Comp4 from '../../Component/Recuriment Services/Permanent-Staffing/PermanentStafingCom4';
import Comp5 from '../../Component/Recuriment Services/Permanent-Staffing/PermanentStaffingCom5';





function PRPageuk() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
            {/* <Comp3 /> */}
          <Comp2 />
          {/* <Comp4 /> */}
        <Comp3 />
        <Comp4 />
        <Comp5 />
         

    </div>
  </div>
  )
}

export default PRPageuk;