import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/bg_1.jpg'
import pic02 from '../assets/images/bg_2.jpg'
import pic03 from '../assets/images/bg_3.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main" style={{maxWidth:`100rem`,margin:`0 auto`}}>
                <section id="two" className="spotlights">

                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic03} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Mettiamo tutta la nostra competenza a vostra disposizione</h3>
                                </header>
                                <p>Ascoltiamo le vostre idee e, discutendo insieme, vi aiutiamo a concretizzare i vostri progetti. 
Partendo dai vostri input o prendendo spunto dai nostri campionari già creati, sviluppiamo e diamo forma e colore ai vostri prototipi portando alla lune la vostra idea di maglia. 
</p>
                                {/* <ul className="actions">
                                    <li><Link to="/generic" className="button">Learn more</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>

                    <section>
                    {/* <Link to="/generic" className="image" style={{backgroundImage: `url(${pic01})`}}> */}
                    <Link to="/generic" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Competenza e qualità</h3>
                            </header>
<p>Siamo in grado di produrre ogni genere di maglia, sia essa sia calata, tagliata, ad intarsio o jacquard.
La ricerca dei materiali di qualità, sapientemente mixata alle idee, unite alla precisione artigianale da’ origine ad un qualcosa di unico: l’avanguardia industriale dell’artigianalità.
La personalizzazione è un passaggio fondamentale nella genesi del vostro prodotto, step che ne esalta in ogni aspetto le possibilità di riuscita dei vostri progetti. 
</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>

                <section>
                    <Link to="/generic" className="image">
                        <img src={pic02} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Il capitale umano</h3>
                            </header>
<p>I nostri prodotti provengono dal lavoro e dalle conoscenze di professionisti e operatori motivati e competenti. Collaboratori diretti e indiretti, con i quali costruiamo rapporti di partnership costanti e duraturi basati sulla fiducia, capaci di trasformare semplici idee e materiali in splendide creazioni di maglia. Tutta la nostra produzione nasce dalla nostra terra, non abbiamo bisogno di importare o delocalizzare nulla dato che il distretto tessile di Carpi può vantare una delle migliori specializzazioni al mondo e noi ne siamo parte integrante. 
I nostri prodotti sono tutti rigorosamente Made in Italy.
</p>
                            {/* <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </section>
            </section>

                    <section id="two">
                        <div className="inner" style={{maxWidth:`40rem`}}>
                            <header className="major">
                                <h2>Pitti</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Come along</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`