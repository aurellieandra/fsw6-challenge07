import React from 'react'

import FAQ from '../../components/faq'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import OurServices from '../../components/ourservices'
import Register from '../../components/register'
import Testimonial from '../../components/testimonial'
import WhyUs from '../../components/whyus'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Register />
            <FAQ />
            <Footer />
        </div>
    )
}
