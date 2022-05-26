import React from 'react'

import Navbar from '../../components/navbar'
import CarsHeader from '../../components/cars header'
import Filter from '../../components/filter'
import Display from '../../components/display'
import Footer from '../../components/footer'

export default function Cars() {
    return (
        <div>
            <Navbar />
            <CarsHeader />
            <Filter />
            <Display />
            <Footer />
        </div>
    )
}
