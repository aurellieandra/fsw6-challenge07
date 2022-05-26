import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './style.module.css'

import facebookIcon from '../../assets/footer-icon/icon_facebook.png'
import instagramIcon from '../../assets/footer-icon/icon_instagram.png'
import mailIcon from '../../assets/footer-icon/icon_mail.png'
import twitchIcon from '../../assets/footer-icon/icon_twitch.png'
import twitterIcon from '../../assets/footer-icon/icon_twitter.png'

export default function Footer() {
    return (
        <div className="container-fluid mb-5" id={styles.footer}>
            <Container>
                <div className="row mt-5">
                    <div className="col-sm-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-sm-2 fw-bold lh-lg">
                        <a
                            className={styles.footer_links} href="#ourservices">Our Services</a><br />
                        <a
                            className={styles.footer_links}
                            href="#whyus">Why Us</a><br />
                        <a
                            className={styles.footer_links} href="#testimonial">Testimonial</a><br />
                        <a
                            className={styles.footer_links} href="#faq">FAQ</a><br />
                    </div>
                    <div className="col-sm-4">
                        <p>Connect with us</p>
                        <div className={styles.footer_icon}>
                            <a href="https://www.facebook.com/">
                                <img src={facebookIcon}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src={instagramIcon}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.twitter.com/">
                                <img src={twitterIcon}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.gmail.com/">
                                <img src={mailIcon}
                                    className="img-fluid" />
                            </a>
                            <a href="https://www.twitch.com/">
                                <img src={twitchIcon}
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <p>Copyright Binar 2022</p>
                        <a href="/">
                            <div className={styles.navbar_logo}></div>
                        </a>
                    </div>
                </div>
            </Container >
        </div >
    )
}