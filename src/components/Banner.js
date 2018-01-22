import React from 'react'
import cover from './../assets/images/made-in-italy.jpg'
import Pitti from '../components/pitti'


const Banner = (props) => (
    <section id="banner" style={{backgroundImage:`url(${cover})`,
    textAlign:`center`}}>
        <div className="inner">
            <header style={{marginBottom:`12vh`}}>
                <h1 style={{letterSpacing:`-2px`,marginBottom:`0`, fontSize: `6rem`, lineHeight: `5rem`}}>LSM</h1>
                <h4 className="f-serif">MAGLIFICIO</h4>
                {/* <hr style={{width:`15%`, borderBottomColor: `#fff`,margin:`0 auto .7rem auto`}}/> */}
            </header>
            {/* <div className="content" style={{textAlign:`center`}}>
                <h4 className="f-serif">MAGLIFICIO</h4>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div> */}
        <Pitti/>
        </div>
    </section>
)

export default Banner
