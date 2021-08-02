import React from 'react'
import Header from '../components/Header'
import './About.css'
import Awards from '../components/About/Awards'
import AWordPatner from '../components/About/AWordPatner'
import MediaMention from '../components/About/MediaMention'
import Expart from '../components/About/Expart'
import HeadsQueters from '../components/About/HeadsQueters'
import LiveOffice from '../components/About/LiveOffice'
import OurClaints from '../components/About/OurClaints'


function About() {
    return (
        <div className="about__page">
            <header className='header'>
                <Header />

                <main>
                    <div className="container">
                        <div className="aboutHero__contant">
                            <div className="about__left">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
                                    <defs>
                                    </defs>
                                    <path class="cls-1" d="M348.966,185.028C352.5,133.656,390.75,98.4,408.679,84.919c65.653-49.37,156.979-31.683,212.511,6.147,66.582,45.359,84.381,124.626,87.814,168.6,11.7,149.93-115.48,312.737-230.073,307.349-36.811-1.731-88.125-21.605-104.5-62.348-21.744-54.1,38.923-101.571,32.491-167.725C400.873,274.711,344.529,249.615,348.966,185.028Z" />
                                                        
                                    </svg>
                                    <img className='about__img' src="/img/faysal Untitled-1.png" />

                            </div>

                            <div className="aboutP__right">
                                <span>ABOUT ME</span>
                                <h3>Hey, My name is Faysal! I'm a Freelance Web Designer & Wev Developer and Wordpress Developer</h3>
                                <p>My job is to build your website so that it is functional and user friendly but at the same time attractive. Keeping in mind scalability and clean code that is maintainable and readable.</p>

                                <p>I've worked with conpanies of all shapes and size,so contact me if you'd like to work together on your next project. By night as a Freelance Web Developer and Web Developer. I spend my time working on freelance projects and building my own products.</p>
                            </div>
                        </div>
                        {/* end the about hero contant */}

                        <div className="allSkills">
                            {/* fontend skill */}
                         <div className="fontend myskill">
                                <div className="title">
                                    <h3>Font-end Skill</h3>
                                </div>
                            <div className="bar">
                                <div className="info">
                                    <span>HTML</span>
                                </div>

                                <div className="progress html"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                </div>

                                <div className="progress css"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>JAVASCRIPT</span>
                                </div>

                                <div className="progress js"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>REACT JS</span>
                             </div>

                                <div className="progress react"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>NEXT JS</span>
                                </div>

                                <div className="progress next"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>JQUERY</span>
                                </div>

                                <div className="progress jquery"><span></span></div>
                                </div>
                                
                            <div className="bar">
                                <div className="info">
                                    <span>WORDPRESS</span>
                                </div>

                                <div className="progress wordpress"><span></span></div>
                            </div>
                                
                            </div>
                            

                            {/* backed skill */}
                            <div className="backend myskill">
                                <div className="title">
                                    <h3>Backend-end Skill</h3>
                                </div>

                            <div className="bar">
                                <div className="info">
                                    <span>NODE JS</span>
                                </div>

                                <div className="progress nodejs"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>PHP</span>
                                </div>

                                <div className="progress php"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>DJANGO</span>
                                </div>

                                <div className="progress django"><span></span></div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>MONGO DB (Database)</span>
                                </div>

                                <div className="progress mongo"><span></span></div>
                            </div>
                        </div>
                        </div>

                    </div>
                </main>
            </header>

            <Awards />
            <AWordPatner />
            <MediaMention />
            <Expart />
            <HeadsQueters />
            <LiveOffice />
            <OurClaints />
        </div>

    )
}

export default About
