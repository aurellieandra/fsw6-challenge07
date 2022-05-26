import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './style.module.css'

export default function Register() {
    return (
        <div className="mt-5 mb-5">
            <Container className={styles.border}>
                <div className="container-fluid lh-lg mt-5 mb-5" id={styles.register}>
                    <div className="container text-center" id={styles.register_konten}>
                        <h1 className="fw-bold">
                            Sewa Mobil di Jakarta Selatan Sekarang
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <a href="/cars" className="btn btn-success my-2">
                            Mulai Sewa Mobil
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}
