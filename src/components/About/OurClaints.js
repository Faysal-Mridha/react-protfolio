import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import SwiperCore,{Navigation} from 'swiper'
import StarIcon from '@material-ui/icons/Star';
import ClaintSayData from './ClaintSayData'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation]);

function OurClaints() {

    return (
        <section className='ourClaint'>
            <div className="container">
        <div className="claint_topTile">
            <h3>Our clients simply love our work</h3>
            <div className="cailnt__ratting">
                <div className="star__icon">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p> Rated 4.9/5.0 by 300+ clients for IOS and Android development services on various platforms</p>
            </div>
        </div>

        <div className="all__claintreview">
            <Swiper spaceBetween={30} slidesPerView={1} navigation >
                {ClaintSayData.map(({ id, topTitle, mainTitle, subtitle ,companyLogo,ratingNumber,reviesNumbr}) => (
                    <SwiperSlide>
                    <div key={id} className="singleClaint_say">
                        <div className="topTitle">
                            <h3>{topTitle}</h3>           
                        </div>
                            
                        <div className="secondTitle">
                            <h4>{mainTitle}</h4>
                        <p>{subtitle}</p>           
                        </div>

                        <div className="claintsSay__bottom">
                            <img src={companyLogo} alt="" />
                            <div className="middle__bottom">
                                    <p>{ratingNumber}</p>
                                    <div className="star__icon">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                    </div>
                            </div>
                            <div className="right__bottom">
                              <p>{reviesNumbr} </p><span>REVIEWS</span>
                            </div>
                        
                        </div>

                     </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
            </div>
        </section>
    )
}

export default OurClaints
