import React from 'react'
import styles from './style.module.css'
import { Container } from 'react-bootstrap'

import profile1 from '../../assets/testimonials/img_photo.png'
import profile2 from '../../assets/testimonials/img_photo2.png'
import rate from '../../assets/testimonials/Rate.png'

export default function Testimonial() {
    return (
        <div className="container-fluid py-4 mt-5 mb-5">
            <Container className="text-center mt-5 mb-5">
                <h4 class="fw-bold">Testimonial</h4>
                <p class="testi_p">Berbagai review positif dari para pelanggan kami</p>
            </Container>
            <div className={styles.row_testi}>
                <div className={styles.testi_holder}>
                    <div className="col-4 text-center">
                        <img src={profile2} />
                    </div>
                    <div className="col-8">
                        <img src={rate} />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                <div className={styles.testi_holder}>
                    <div className="col-4 text-center">
                        <img src={profile1} />
                    </div>
                    <div className="col-8">
                        <img src={rate} />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                <div className={styles.testi_holder}>
                    <div className="col-4 text-center">
                        <img src={profile2} />
                    </div>
                    <div className="col-8">
                        <img src={rate} />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
                <div className={styles.testi_holder}>
                    <div className="col-4 text-center">
                        <img src={profile1} />
                    </div>
                    <div className="col-8">
                        <img src={rate} />
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className="fw-bold">John Dee 32, Bromo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}