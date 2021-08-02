import React from 'react'

function MediaMention() {
    return (
        <>
        <section className='mediaMantion'>
            <div className="container">
                <div className="mediaMantion__topTiitle">
                    <h4>Media mentions</h4>
                    <p>We stay in the news for our incredible tech achievements</p>
                </div>

                <div className="media__all">
                    <div className="signle__media">
                        <a href="http://yahoo.com">
                            <img src="/img/yahoo-logo.svg" alt="" />
                            <p>There's finally a dating app for people with disabilities</p>
                        </a>
                    </div>

                    <div className="signle__media">
                        <a href="http://buzzfeed.com">
                            <img src="/img/BuzzFeed-logo.svg" alt="" />
                            <p>A new app just launched to make online dating more inclusive...</p>
                        </a>
                    </div>

                    <div className="signle__media">
                        <a href="http://mashable.com">
                            <img src="/img/mashable-logo.svg" alt="" />
                            <p>This startup helps you donate to charity when you see an infuriating tweet</p>
                        </a>
                    </div>
                </div>
            </div>
            </section>
            <div className="mediaUnder__img">
                <img src="/img/salman-lakhani-ceo-cubixinc.jpg" alt="" />
                </div>
            </>
    )
}

export default MediaMention
