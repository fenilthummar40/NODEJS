import React from 'react'
import './About.css'
import profile_image from '../../assets/about_profile.jpg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-pera">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus incidunt sint ratione, doloremque saepe amet asperiores hic enim. Quas blanditiis molestiae quasi repellendus illo ipsam voluptas asperiores qui totam.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, cumque optio dicta eos maxime totam voluptatibus quidem pariatur, similique ex nam a nobis soluta qui magni repellat sint eum aperiam.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Html,Css</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>React js</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Java script</p><hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>Bootstrap</p><hr style={{width:"90%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>0+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>0+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>0+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About