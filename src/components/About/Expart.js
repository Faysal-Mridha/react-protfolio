import React, { useState } from 'react'

function Expart() {

    const [showExpartLeader, setShowExpatLeader] = useState(true);

    return (
        <section className='expart'>
            <div className="container">
                <div className="expart__top">
                    <div className="expart_titleTop">
                    <h4>Some of our tech experts</h4>
                    <p>Talent wins games, but teamwork and intelligence win championships.</p>

                    <div className="buttons">
                     <span onClick={()=> setShowExpatLeader(true)} className={`buttonItem ${showExpartLeader && 'active'}`}>Leaders</span>       
                     <span onClick={()=> setShowExpatLeader(false)} className={`buttonItem ${!showExpartLeader && 'active'}`}>Advisors</span>       
                    </div>
                </div>
                </div>

                <div className="allExpart__conatent">
                    <div className={`leaders hide ${showExpartLeader && 'active'}`}>
                        <div className="single_expart">
                            <img src="/img/Austin-Lovvorn.jpg" />                        
                            <div className="expart__overlay">
                                <p>Austin lovvorn</p>
                                <span>Avp - north america</span>
                            </div>
                        </div>

                        <div className="single_expart">
                            <img src="/img/Jourdan-Chohan.jpg" />                        
                            <div className="expart__overlay">
                                <p>Jourdan chahan</p>
                                <span>Vp - product strategy</span>
                            </div>
                        </div>

                        <div className="single_expart">
                            <img src="/img/ASIM.jpg" />                        
                            <div className="expart__overlay">
                                <p>Asim korediya</p>
                                <span>Coo</span>
                            </div>
                        </div>

                        <div className="single_expart">
                            <img src="/img/oneeb.jpg" />                        
                            <div className="expart__overlay">
                                <p>Oneeb ahmed</p>
                                <span>Vp - developement</span>
                            </div>
                        </div>

                         <div className="single_expart">
                            <img src="/img/shoaib-abdul-ghafar.jpg" />                        
                            <div className="expart__overlay">
                                <p>Shoaib abdul ghafar</p>
                                <span>Vp - developement</span>
                            </div>
                        </div>

                         <div className="single_expart">
                            <img src="/img/owais-akbar-ali.jpg" />                        
                            <div className="expart__overlay">
                                <p>Owals akber ali</p>
                                <span>Vp - design</span>
                            </div>
                        </div>

                        <div className="single_expart">
                            <img src="/img/Urooj-Zehra.jpg" />                        
                            <div className="expart__overlay">
                                <p>Urooj zehra</p>
                                <span>Vp - hr</span>
                            </div>
                        </div>
                    </div>


                    <div className={`leaders hide advisor ${!showExpartLeader && 'active'}`}>
                        <div className="single_expart">
                            <img src="/img/Richard-Pollack.jpg" />                        
                            <div className="expart__overlay">
                                <p>Richard J. pollack</p>
                                <span>Advisor</span>
                            </div>
                        </div>

                        <div className="single_expart">
                            <img src="/img/avatar-image.jpg" />                        
                            <div className="expart__overlay">
                                <p>Geoffery van haeren</p>
                                <span>Advisor</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Expart
