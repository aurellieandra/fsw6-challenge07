import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './style.module.css'

import Navbar from '../../components/navbar'
import CarsHeader from '../../components/cars header'
import Filter from '../../components/filter'
import Display from '../../components/display'
import Footer from '../../components/footer'

import getCarsService from '../../services/getCars'

export default function Cars() {
    const [cars, setCars] = useState([])

    const getCars = async () => {
        const allCars = await getCarsService()
        setCars(allCars)
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <div>
            <Navbar />
            <CarsHeader />
            <Filter />
            <Container>
                <div className={styles.display}>
                    {
                        cars.map((item, index) => <Display key={index} car={item} />)
                    }
                </div>
            </Container>
            <Footer />
        </div>
    )
}
