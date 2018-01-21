import React from 'react'
import Link from 'gatsby-link'
import logo from './../assets/images/logo lsm maglificio.jpg'
const Contact = (props) => (
    <section id="contact">
        <div className="inner" style={{maxWidth:`50em`}}>
            <section>
                {/* <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form> */}
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Indirizzo</h3>
                        <span>Sede Operativa: Viale dell'Agricoltura, 21 Carpi (MO)</span>
                        <br/>
                        <span>Sede Legale: Via Meloni di Quartirolo, 6 Carpi (MO)</span>
                       
                    </div>
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45306.13172204353!2d10.817475573536214!3d44.788282116394605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f8ccf6205628b%3A0x7f3eabae2cc86add!2sMaglificio+LSM!5e0!3m2!1sit!2sau!4v1516487140565" width="600" height="450" frameBorder="0" style={{border:0,maxWidth:`100%`,width:`100%`}} allowFullScreen></iframe>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:amministrazione@maglificiolsm.com">amministrazione@maglificiolsm.com</a>
                        <br/>
                        <a href="mailto:commerciale@maglificiolsm.com">commerciale@maglificiolsm.com</a>

                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Telefono e Fax</h3>
                        <span>Tel: +39 059 641 460</span>
                        <br/>
                        <span>Fax: +39 059 622 8465</span>
                         
                    </div>
                </section>
                <section>

                       <Link to="/" style={{textDecoration:`none`}}><img src={logo} width="160"/></Link>

                </section>
            </section>
        </div>
    </section>
)

export default Contact
