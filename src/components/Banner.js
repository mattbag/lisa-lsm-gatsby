import React from 'react'
import cover from './../assets/images/made-in-italy.jpg'

const Banner = (props) => (
    <section id="banner" style={{backgroundImage:`url(${cover})`,
    textAlign:`center`}}>
        <div className="inner">
            <header>
                <h1 style={{letterSpacing:4,marginBottom:`.7rem`}}>Love Sex Money</h1>
                <hr style={{width:`15%`, borderBottomColor: `#fff`,margin:`0 auto .7rem auto`}}/>
            </header>
            <div className="content" style={{textAlign:`center`}}>
                <h4 className="f-serif">MAGLIFICIO</h4>
                {/* <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul> */}
            </div>
        </div>
    </section>
)

export default Banner
