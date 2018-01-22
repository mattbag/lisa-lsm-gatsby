import React from 'react'

import pic01 from '../assets/images/bg_1.jpg'

const Hero = (props) => (
    <article className="hero">
        <div className="hero__top">
            {/* <Link to="/generic" className="image"> */}
                <img src={props.img} alt={props.title} width="100%" />
            {/* </Link> */}
        <div className="hero__copy sha">
            <div className="content">
                <div className="inner">
                    <header className="major">
                    <h3>{props.title}</h3>

                    </header>
                    
                    <div dangerouslySetInnerHTML={{__html:props.copy}} />
                   
                </div>
            </div>
        </div>
        </div>
    </article>
)

export default Hero
