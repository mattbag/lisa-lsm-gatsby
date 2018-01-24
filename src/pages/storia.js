import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import Banner from '../components/Banner'
import Hero from '../components/Hero'

// import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/bg_2.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class StoryIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        // const siteDescription = this.props.data.site.siteMetadata.description
// console.log(this.props.data,pic1);

        return (
            <div>
                <Helmet>
                    <title>Storia - {siteTitle}</title>
                    <meta name="description" content={`LSM - La storia`} />
                </Helmet>

                {/* <Banner /> */}

                <div id="main">
                <Hero img={this.props.data.pic1} copy={`
               <p>Collezioni all’insegna di femminilità ed eleganza, stile e raffinatezza, attenzione e cura per i dettagli, ricercatezza di materiali, stampe e ricami. Questo è il maglificio LSM.</p>
               <p>
               Nato nel 1986 a Carpi, il distretto italiano da sempre tra i più prolifici per qualità, creatività ed intraprendenza, gestito da un team giovane che da’ un’impronta ambiziosa e rivolta al futuro e che basa le sue fondamenta su un concept unico ed originale di stile e ricercatezza fondate sul Made in Italy. Ogni singolo capo nasce da una cura artigianale inimitabile, caratterizzata dalla scelta di filati nobili e dalla capacità di trasformarli grazie ad un grande know how tecnologico. Le infinite potenzialità della maglia vengono quindi sviluppate con uno stile che segue le ultime tendenze, insieme ad una solida organizzazione produttiva nel pieno rispetto dell’artigianalità e territorialità del prodotto.</p>
               
                `}/>
                {/* <section>
                        <div className="inner sha" style={{maxWidth:`40rem` ,paddingRight:`2rem`,paddingLeft:`2rem`}}>
                            <header className="major">
                                <h2>Storia</h2>
                            </header>
                        </div>
                    </section> */}

                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </div>
        )
    }
}

export default StoryIndex

export const pageQuery = graphql`
    query StoryQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        pic1: imageSharp(id: {regex: "/bg_2.jpg/"}) {
            sizes {
                ...GatsbyImageSharpSizes
            }
        }
    }
`