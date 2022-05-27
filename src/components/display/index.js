import React from 'react'
import { Card, Container } from 'react-bootstrap'
import styles from './style.module.css'

import userIcon from '../../assets/cm-icon/fi_users.png'
import settingsIcon from '../../assets/cm-icon/fi_settings.png'
import calendarIcon from '../../assets/cm-icon/fi_calendar.png'

export default function Display({ car }) {
    return (
        <Container className={styles.cm_container}>
            <Card className={styles.cm_card}>
                <div className={styles.cm_content}>
                    <div className={styles.cm_up_content}>
                        <img src={car.image} alt={car.manufacture} className={styles.cm_image} />
                        <h5 className="mt-3">{car.model}</h5>
                        <h4>Rp. {car.rentPerDay} / hari</h4>
                        <p>{car.description}</p>
                    </div>

                    <div className="row">
                        <div className="col-1">
                            <img className={styles.cm_icon} src={userIcon} />
                        </div>
                        <div className="col">
                            <p>{car.capacity} orang</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">
                            <img className="cm-icon" src={settingsIcon} />
                        </div>
                        <div className="col">
                            <p>{car.transmission}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1">
                            <img className="cm-icon" src={calendarIcon} />
                        </div>
                        <div className="col">
                            <p>{car.year}</p>
                        </div>
                    </div>

                    <a href="#" className="btn btn-success text-white">Pilih Mobil</a>
                </div>
            </Card>
        </Container>
    )
}
