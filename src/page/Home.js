import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Tecnology from '../components/Home/Tecnology'
import LatestProject from '../components/Home/LatestProject'
import Contact from '../components/Home/Contact'
import Partner from '../components/Home/Partner'
import Testimonial from '../components/Testimonial'


function Home() {

    const handleClick = () => {
        window.open('https://www.facebook.com/faysalahmed.munna.758/');
    }

    return (
        <div className='homePage'>
            <header className="header">
                <Header itsHome />
                <Hero />
            </header>
            <main>
                <div className="container">
                    <About />
                    <Services />
                    <Tecnology />
                    <LatestProject />
                </div>
                <Partner />

                <Testimonial />

                <section className="digitalProduct">
                    <div className="container digitalProduct__contant">
                        <div className="digitaltop__tiitle">
                            <h3>12 years of building digital products and we are just gettting started!</h3>
                        </div>
                        <button onClick={handleClick} className="btn start__projuct">START A PROJECT</button>
                    </div>
                </section>
                <Contact />
            </main>
        </div>
    )
}

export default Home
