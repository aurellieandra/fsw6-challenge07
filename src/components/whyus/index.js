import React from 'react'
import styles from './style.module.css'

import { Container, Card } from 'react-bootstrap'

import thumbsUp from '../../assets/icon/thumbs-up.png'
import price from '../../assets/icon/price.png'
import hours from '../../assets/icon/24hrs.png'
import professional from "../../assets/icon/professional.png"

export default function WhyUs() {
    return (
        <div className="container-fluid mt-5">
            <Container className=''>
                <div>
                    <h4 className="fw-bold">Why Us?</h4>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className={styles.cards}>
                    <Card>
                        <div className="card-body line-height">
                            <img src={thumbsUp} className="img-fluid mb-3" />
                            <h5 className="card-title">Mobil Lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <img src={price} className="img-fluid mb-3" />
                            <h5 className="card-title">Harga Murah</h5>
                            <p className="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                                lain
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <img src={hours} className="img-fluid mb-3" />
                            <h5 class="card-title">Layanan 24 Jam</h5>
                            <p class="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                                akhir minggu
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-body">
                            <img src={professional} className="img-fluid mb-3" />
                            <h5 className="card-title">Sopir Profesional</h5>
                            <p className="card-text">
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
