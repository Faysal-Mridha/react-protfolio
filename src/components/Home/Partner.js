import React from 'react'

function Partner() {
    return (
        <section className='partner'>
            <div className="container partner__contant">
                <div className="partner__titile">
                    <h3>We partner with the world's tecnology</h3>
                </div>

                <div className="partner__main">
                    <div className="single__partner">
                        <img src="/img/Google-Developer-Certified-Agency.png" alt="" />
                        <h3>Google developer certificate agency</h3>
                    </div>

                     <div className="single__partner">
                        <img src="/img/Adobe-Solution-Partner-Program.png" alt="" />
                        <h3>Adobe soluton partner program</h3>
                    </div>

                     <div className="single__partner">
                        <img src="/img/Microsoft-Certified-Consulting-Partner.png" alt="" />
                        <h3>Microsoft certified consulting partner</h3>
                    </div>

                     <div className="single__partner">
                        <img src="/img/Amazon-Web-Services-Partner.png" alt="" />
                        <h3>Amazon web services partner</h3>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Partner
