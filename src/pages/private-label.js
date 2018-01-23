import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import Banner from '../components/Banner'
import Block from '../components/Block'
import Hero from '../components/Hero'

// import pic01 from '../assets/images/bg_1.jpg'
// import pic02 from '../assets/images/bg_4.jpg'
// import pic03 from '../assets/images/bg_3.jpg'
// import pic02 from '../assets/images/bg_2.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class PrivateIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        // const siteDescription = this.props.data.site.siteMetadata.description
const { pic1, pic2,pic3} = this.props.data;
        return (
            <div>
                <Helmet>
                    <title>Private Custom Label - {siteTitle}</title>
                    <meta name="description" content={`LSM - Private Custom Label`} />
                </Helmet>

                {/* <Banner /> */}

                <div id="main">
                <Hero img={pic3} title={'Mettiamo tutta la nostra competenza a vostra disposizione'} copy={`
                   <p>Ascoltiamo le vostre idee e, discutendo insieme, vi aiutiamo a concretizzare i vostri progetti. 
                   Partendo dai vostri input o prendendo spunto dai nostri campionari già creati, sviluppiamo e diamo forma e colore ai vostri prototipi portando alla lune la vostra idea di maglia. 
                   </p>
                `}/>
                <Block img={pic1} title={'Competenza e qualità'} copy={`
                   <p>Siamo in grado di produrre ogni genere di maglia, sia essa sia calata, tagliata, ad intarsio o jacquard. <br/>
                   La ricerca dei materiali di qualità, sapientemente mixata alle idee, unite alla precisione artigianale da’ origine ad un qualcosa di unico: l’avanguardia industriale dell’artigianalità.
                   La personalizzazione è un passaggio fondamentale nella genesi del vostro prodotto, step che ne esalta in ogni aspetto le possibilità di riuscita dei vostri progetti. 
                   </p>
                `}/>
                <Block img={pic2} title={'Il capitale umano'} copy={`
                   <p>
                   I nostri prodotti provengono dal lavoro e dalle conoscenze di professionisti e operatori motivati e competenti. Collaboratori diretti e indiretti, con i quali costruiamo rapporti di partnership costanti e duraturi basati sulla fiducia, capaci di trasformare semplici idee e materiali in splendide creazioni di maglia. Tutta la nostra produzione nasce dalla nostra terra, non abbiamo bisogno di importare o delocalizzare nulla dato che il distretto tessile di Carpi può vantare una delle migliori specializzazioni al mondo e noi ne siamo parte integrante. 
<br/> I nostri prodotti sono tutti rigorosamente Made in Italy.
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
        pic1: imageSharp(id: {regex: "/bg_1.jpg/"}) {
            sizes {
                ...GatsbyImageSharpSizes
            }
        }
        pic2: imageSharp(id: {regex: "/bg_4.jpg/"}) {
            sizes {
                ...GatsbyImageSharpSizes
            }
        }
        pic3: imageSharp(id: {regex: "/bg_3.jpg/"}) {
            sizes {
                ...GatsbyImageSharpSizes
            }
        }
    }
`