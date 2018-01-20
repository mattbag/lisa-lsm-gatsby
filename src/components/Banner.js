import React from 'react'
import cover from './../assets/images/made-in-italy.jpg'

const Banner = (props) => (
    <section id="banner" className="major" style={{backgroundImage:`url(${cover})`,
    textAlign:`center`}}>
        <div className="inner">
            <header className="major">
                <h1>Love Sex Money</h1>
            </header>
            <div className="content" style={{textAlign:`center`}}>
                <p>Short description</p>
                {/* <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul> */}
            </div>
        </div>
    </section>
)

export default Banner
