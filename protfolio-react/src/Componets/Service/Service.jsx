import React from 'react'
import './Service.css'
import Services_Data from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.jpg"

function Service() {
  return (
    <div className="services-container">
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="servies-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services_format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read more</p>
                        <img className='i-1' src="" alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
    </div>
  )
}

export default Service