import React, { useContext, useEffect } from 'react'
import { services } from './servicesData'
import { ThemeContext } from '../../Context/ThemeContext'

export const Services = () => {
	const {modeColor,modeBackground,styleDark} =useContext(ThemeContext)


	return (

		<div className="row p-1" style={{ margin: "60px 63px"}}>
		
		{services.map((service)=>(
				<div key={service.text} data-aos="zoom-in-up" data-aos-duration="1000" id='service' className=" mt-5 col-md-6 col-lg-3 ">
				<div style={{...styleDark}} className={`card custom-card ${modeBackground}`} >
					<img className="card-img-top " style={{ width: "200px", paddingLeft: "45px" }} src={service.image} alt="Image" />
					<div className="card-body">
						<h5 className={`card-title ${modeColor}`}>{service.title}</h5>
						<span  className={`${modeColor}`}>{service.text}</span>
					</div>
				</div>
			</div>
		))}
		</div>
	)
}
