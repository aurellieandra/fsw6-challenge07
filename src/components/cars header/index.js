import React from 'react'
import styles from './style.module.css'
import header_image from '../../assets/img_car.png'

import { Container } from 'react-bootstrap'

export default function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className="row">
                    <div className="col-sm-5 mt-5">
                        <h1 className="fw-bold">
                            Sewa & Rental Mobil Terbaik di Kawasan Jakarta Selatan
                        </h1>
                        <p>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                            dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                    </div>
                    <div className="col-sm-1" />
                    <div className="col-sm-6 mt-5">
                        <img
                            src={header_image}
                            className='img-fluid'
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}