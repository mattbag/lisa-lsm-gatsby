import React from 'react'
// import cover from './../assets/images/made-in-italy.jpg'
import Img from 'gatsby-image'
import Logo from './Logo'


const Banner = (props) => (
    <section id="banner" style={{
        backgroundImage:`url(${props.cover.sizes.originalImg})`,
        textAlign: `center`
    }}>
        {/* <div style={{ position: `absolute`, height:`100%`,width:`100%`,top:0 }}>
            <Img sizes={props.cover.sizes} style={{left:`auto`,right:`auto`,top:0,bottom:0}}/>
        </div> */}
        <div className="inner">
        <Logo/>
           
            {/* <div className="content" style={{textAlign:`center`}}>
                <h4 className="f-serif">MAGLIFICIO</h4>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div> */}
            {/* <Pitti/> */}
        </div>
    </section>
)

export default Banner
