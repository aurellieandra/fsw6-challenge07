import React from 'react'

import ourServiceImage from '../../assets/img_service.png'
import checklist from '../../assets/icon/checklist.png'

import { Container } from 'react-bootstrap'

export default function OurServices() {
    return (
        <div className="container-fluid mt-5 mb-5">
            <Container>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={ourServiceImage} className="img-fluid" />
                    </div>
                    <div className="col-sm-6">
                        <h4 className="fw-bold py-4">
                            Best Car Rental for any kind of trip in Jakarta Selatan!
                        </h4>
                        <p>
                            Sewa mobil di Jakarta Selatan bersama Binar Car Rental jaminan harga lebih murah dibandingkan
                            yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                            wedding, meeting, dll.
                        </p>
                        <div className="py-2">
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil dengan Supir di Bali 12 Jam<br />
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil Lepas Kunci di Bali 24 Jam<br />
                            <img src={checklist} className="mb-2" />&emsp;Sewa Mobil Jangka Panjang Bulanan<br />
                            <img src={checklist} className="mb-2" />&emsp;Gratis Antar - Jemput Mobil di Bandara<br />
                            <img src={checklist} className="mb-2" />&emsp;Layanan Airport Transfer / Drop In Out<br />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
