import React from 'react'
import Comp1 from '../../../Component/About/Who-We-Are/Who-W-R1';
import Comp2 from '../../../Component/About/Who-We-Are/Who-W-R2';
import Comp3 from '../../../Component/About/Who-We-Are/Who-W-R3';



function WhoPage() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };


  return (
    <div className="folder-page">
    <div className="Careers-content">
          <Comp1 />
          <Comp2 />
          <Comp3 />
   
    </div>
  </div>
  )
}

export default WhoPage;