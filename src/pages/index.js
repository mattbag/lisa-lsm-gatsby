import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Block from '../components/Block'
import Pitti from '../components/pitti'

// import pic01 from '../assets/images/bg_1.jpg'
// import pic02 from '../assets/images/bg_2.jpg'
// import pic03 from '../assets/images/bg_3.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        const {site, cover } = this.props.data
        const {title,description} = site.siteMetadata
        console.log(site);
        
        // const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>

                <Banner cover={cover}/>
                <Pitti/>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        cover: imageSharp(id: {regex: "/made-in-italy.jpg/"}) {
            sizes {
                ...GatsbyImageSharpSizes
                originalImg
            }
        }
    }
`