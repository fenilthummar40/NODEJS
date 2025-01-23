import React from 'react'
import './Mywork.css'
import Mywork_Data from '../../assets/mywork-data'

function Mywork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src="" alt="" />
        </div>
        <div className="mywork-container">
            {Mywork_Data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More </p>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Mywork