import React from 'react'
import Comp1 from '../../Component/Landing/LandingCom1';
import Comp2 from '../../Component/Landing/LandingCom2';
import Comp3 from '../../Component/Landing/LandingCom3';
import Comp4 from '../../Component/Landing/LandingCom4';
import Comp5 from '../../Component/Landing/LandingCom5';
import Comp6 from '../../Component/Landing/LandingCom6';



function HomePage() {

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
          <Comp4 />
          <Comp6 />
          <Comp5 />
         

    </div>
  </div>
  )
}

export default HomePage;