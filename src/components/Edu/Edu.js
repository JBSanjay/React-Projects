import React from 'react'
import './Edu.css'
import Edu from"./Edudetail";
import schoolimage from "../../images/pexels-pixabay-2170.jpg"
import clgimg from "../../images/pexels-tirachard-kumtanom-733852.jpg"
import randimg from "../../images/pexels-thisisengineering-3912367.jpg"
export default function edu() {
  return (
    
    <div className='outer-div'>
      <p className='Title'>Education</p>
      {/* <p>{Edu.Edudetails[0].Institution}</p> */}
     <div></div>
      <section className='container'>
        <img src={schoolimage}  width="350" className='edu-img'/>
        <p className='Institution'>RKR Gnanodhaya</p>
        <p>SSLC</p>
        </section>
        <section className='container'>
        <img src={randimg}  width="350" className='edu-img'/>
        <p className='Institution'>Nachimuthu Polytechnic</p>
        <p> Diploma</p>
        </section>
        <section className='container'>
        <img src={clgimg} alt="image" width="350" className='edu-img'/>
        <p className='Institution'>Sri Eshwar</p>
        <p>Bachelor of Engineering</p>
        
        <p></p>
        </section>
      </div>
  
    // console.log(Edu.Edudetails[0].Institution);
//  fetch({Edu}
//   .then(response => {
//   return response.edudet;
// })
  )
}
// import React from "react";
// import { Card, CardBody, Badge } from "reactstrap";

// // import { Fade } from "react-reveal";

// const EducationCard = ({ education }) => {
// 	return (
// 		// <Fade left duration={2000} >
// 			<Card className="card-lift--hover shadow mt-4">
// 				<CardBody>
// 					<div className="d-flex px-3">
// 						<div className="pl-4">
// 							<h5 className="text-info">
// 								{education.schoolName}
// 							</h5>
// 								<h6>{education.subHeader}</h6>
// 							<Badge color="info" className="mr-1">
// 								{education.duration}
// 							</Badge>
// 							{ education.grade && (
// 								<Badge color="primary" className="mr-1">
// 									{education.grade}
// 								</Badge>
// 							)}
// 							<p className="description mt-3">{education.desc}</p>
// 							<ul>
// 								{education.descBullets
// 									? education.descBullets.map((desc) => {
// 											return <li key={desc}>{desc}</li>;
// 									  })
// 									: null}
// 							</ul>
// 						</div>
// 					</div>
// 				</CardBody>
// 			</Card>
// 		// </Fade>
// 	);
// };

// export default EducationCard;
