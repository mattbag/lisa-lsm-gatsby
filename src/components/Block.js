import React from 'react'
import Img from 'gatsby-image'
// import pic01 from '../assets/images/bg_1.jpg'

const Block = (props) => (
    <article className="block">
        <div className="block__top">
            {/* <Link to="/generic" className="image"> */}
                {/* <img src={props.img} alt={props.title} width="100%" /> */}
                <Img sizes={props.img.sizes} alt={props.title}/>
            {/* </Link> */}
        </div>
        <div className="block__copy sha">
            <div className="content">
                <div className="inner">
                    <header className="major">
                    <h3>{props.title}</h3>
                        {/* <h3>Mettiamo tutta la nostra competenza a vostra disposizione</h3> */}
                    </header>
                    {/* <p>Ascoltiamo le vostre idee e, discutendo insieme, vi aiutiamo a concretizzare i vostri progetti.
                    Partendo dai vostri input o prendendo spunto dai nostri campionari già creati, sviluppiamo e diamo forma e colore ai vostri prototipi portando alla lune la vostra idea di maglia.
                    </p> */}
                    <div dangerouslySetInnerHTML={{__html:props.copy}} />
                    {/* <ul className="actions">
            <li><Link to="/generic" className="button">Learn more</Link></li>
        </ul> */}
                </div>
            </div>
        </div>
    </article>
)

export default Block
