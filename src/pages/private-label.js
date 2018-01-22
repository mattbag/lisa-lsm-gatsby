import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import Banner from '../components/Banner'
import Block from '../components/Block'

import pic01 from '../assets/images/bg_1.jpg'
// import pic02 from '../assets/images/bg_2.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class PrivateIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        // const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>Private Custom Label - {siteTitle}</title>
                    <meta name="description" content={`LSM - Private Custom Label`} />
                </Helmet>

                {/* <Banner /> */}

                <div id="main">
                <Block img={pic01} title={'Mettiamo tutta la nostra competenza a vostra disposizione'} copy={`
                   <p>Ascoltiamo le vostre idee e, discutendo insieme, vi aiutiamo a concretizzare i vostri progetti. 
                   Partendo dai vostri input o prendendo spunto dai nostri campionari già creati, sviluppiamo e diamo forma e colore ai vostri prototipi portando alla lune la vostra idea di maglia. 
                   </p>
                `}/>
               
                </div>

            </div>
        )
    }
}

export default PrivateIndex

export const pageQuery = graphql`
    query PrivateLabelQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`