import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/"><h1 style={{letterSpacing:`-2px`, fontSize: `3rem`, lineHeight: `2rem`}}>LSM</h1></Link></li>
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/storia">Storia</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/private-label">Private Label</Link></li>

                <li><Link onClick={props.onToggleMenu} to="/contatti">Contatti</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Pitti</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
