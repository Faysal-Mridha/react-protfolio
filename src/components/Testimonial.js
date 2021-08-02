import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import {testimonial} from './TestimonialData'

SwiperCore.use([Navigation]);

function Testimonial() {
    return (
        <section className='testimonial'>
            <div className="container">

                <div className="singleTop__title">
                    <h2>We develop enterprise-grade software solutions for businesses.</h2>
                </div>

                <div className="all_Testimonial">
                <Swiper spaceBetween={30} slidesPerView={1} navigation>
                        {testimonial.map(({ id,name,dis,subtitle }) => (
                        <SwiperSlide>
                            <SingletestMonial key={id} dis={dis} subtitle={subtitle} name={name}/>
                        </SwiperSlide>
                        ))}
                    </Swiper>

                      <div className="testimonial__bottom">
                            <div className="testimonialBottom__left">
                                <img src="/img/clutch-icon.svg" alt="" />
                                <p>4.8 Rating on Clutch</p>

                            </div>

                            <div className="testmonialBottom__right">
                                Top app Developers
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial


const SingletestMonial = ({name, dis, subtitle }) => {
    return (
        <div className="single__testimonial">
            <div className="top__text">
                <h3>{dis}</h3>
            </div>

            <div className="bottom__text">
                <h2>{name}</h2>
                <p>{subtitle}</p>
            </div>
         </div>
    )
}