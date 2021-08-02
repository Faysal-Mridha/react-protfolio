import React from 'react'
import './Service.css'
import Header from '../components/Header'
import SBanner from '../components/services/SBanner'
import DigitalDemand from '../components/services/DigitalDemand'
import Ideation from '../components/services/Ideation'
import Testimonial from '../components/Testimonial'


function Service() {
    return (
        <div className="servicesP">
            <header style={{backgroundImage:"linear-gradient(#1211117d,#1211117d),url(/img/cubix-service-1.jpg)"}}>
                <Header />
                <SBanner />
            </header>

            <main>
                <div className="container">
                    <DigitalDemand />
                    <Ideation />
                    <Testimonial />
                </div>
            </main>

        </div>
    )
}

export default Service
