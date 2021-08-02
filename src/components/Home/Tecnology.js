import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Tecnology() {

    const [tecnology, setTecnology] = useState({
        mobile: true,
        fontend: false,
        database: false,
        backend: false,
        cms: false,
        infraDev: false,

    });


const FilterButton = (value) => {

    if (value == 'mobile') {

    setTecnology({mobile: true,fontend: false,database: false,backend: false,cms: false,infraDev: false,})

    }else if(value == 'fontendDev'){

    setTecnology({mobile: false,fontend: true,database: false,backend: false,cms: false,infraDev: false,})

    }else if(value == 'database'){

    setTecnology({mobile: false,fontend: false,database: true,backend: false,cms: false,infraDev: false,})

    }else if(value == 'backend'){

    setTecnology({mobile: false,fontend: false,database: false,backend: true,cms: false,infraDev: false,})

    }else if(value == 'cms'){

    setTecnology({mobile: false,fontend: false,database: false,backend: false,cms: true,infraDev: false,})

    } else if (value == 'infraDev') {
        
    setTecnology({ mobile: false, fontend: false, database: false, backend: false, cms: false, infraDev: true, })
        
    }
    
}

    return (
        <section className='tecnology'>
            <div className="services__titile tecnology__title">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <h3>Technologies we work with</h3>
            </div>

        <div className="services__contant">
                <div className="filterMenu">
                    <span onClick={() => FilterButton('mobile')} className={`filter-btn ${tecnology.mobile && 'active'}`}>Mobile</span>
                    
                    <span onClick={() =>FilterButton('fontendDev')} className={`filter-btn ${tecnology.fontend && 'active'}`}>Font-end Developer</span>
                    <span onClick={() => FilterButton('database')} className={`filter-btn ${tecnology.database && 'active'}`}>Database</span>
                    
                    <span onClick={() => FilterButton('backend')} className={`filter-btn ${tecnology.backend && 'active'}`}>Backend</span>
                    
                    <span onClick={() => FilterButton('cms')} className={`filter-btn ${tecnology.cms && 'active'}`}>CMS</span>
                    
                    <span onClick={() =>FilterButton('infraDev')} className={`filter-btn ${tecnology.infraDev && 'active'}`}>Infra and devops</span>
                </div>
                
            <div className="all__tecnology">
                    <div className={`mobile mobileItem hide ${tecnology.mobile && 'active'}`}>
                    <Link to="/ios">
                        <img src="/img/apple-brands.svg" alt="" />
                        <p>Ios</p>
                    </Link>

                    <Link to="/android">
                        <img src="/img/robot-solid.svg" alt="" />
                        <p>Android</p>
                        </Link>

                    <Link to="/reactnative">
                        <img src="/img/react-brands.svg" alt="" />
                        <p>React Native</p>
                        </Link>

                    <Link to="/fullter">
                        <img src="/img/foursquare-brands.svg" alt="" />
                        <p>Fullter</p>
                        </Link>


                    <Link to="/lonic">
                        <img src="/img/watchman-monitoring-brands.svg" alt="" />
                        <p>Lonic</p>
                        </Link>


                    <Link to="/swift">
                        <img src="/img/swift-brands.svg" alt="" />
                        <p>Swift</p>
                        </Link>


                    <Link to="/kotlin">
                        <img src="/img/korvue-brands.svg" alt="" />
                        <p>Kotlin</p>
                        </Link>
                     <Link to="/objectivec">
                        <img src="/img/object-group-regular.svg" alt="" />
                        <p>Objectivec</p>
                    </Link>       

                    </div>
                    
            {/* fron end devloper */}
                <div className={`mobile fontend hide ${tecnology.fontend && 'active'}`}>
                    <Link to="/reactjs">
                        <img src="/img/react-brands.svg" alt="" />
                        <p>React .js</p>
                    </Link>

                    <Link to="/angular">
                        <img src="/img/angular-brands.svg" alt="" />
                        <p>Angular .js</p>
                        </Link>

                    <Link to="/typescript">
                        <img src="/img/tumblr-square-brands.svg" alt="" />
                        <p>TypeScript</p>
                        </Link>

                    <Link to="/vue">
                        <img src="/img/vimeo-brands.svg" alt="" />
                        <p>Vue</p>
                        </Link>


                    <Link to="/wpf">
                        <img src="/img/wpressr-brands.svg" alt="" />
                        <p>Wpf</p>
                        </Link>


                    <Link to="/html">
                        <img src="/img/html5-brands.svg" alt="" />
                        <p>Html</p>
                        </Link>      

                </div>

                    

                 {/* Database */}
                    <div className={`mobile databse hide ${tecnology.database && 'active'}`}>
                    <Link to="/mysqldatabase">
                        <img src="/img/database-solid.svg" alt="" />
                        <p>Mysql Database</p>
                    </Link>

                    <Link to="/phpdatabase">
                        <img src="/img/server-solid.svg" alt="" />
                        <p>Php Database</p>
                        </Link>

                    <Link to="/mongodb">
                        <img src="/img/digital-tachograph-solid.svg" alt="" />
                        <p>Mongo DB</p>
                        </Link>    

                    </div>
                
                {/* backend devlopmen */}
                  <div className={`mobile backend hide ${tecnology.backend && 'active'}`}>
                    <Link to="/php">
                        <img src="/img/php-brands.svg" alt="" />
                        <p>Php</p>
                    </Link>

                    <Link to="/java">
                        <img src="/img/java-brands.svg" alt="" />
                        <p>Java</p>
                        </Link>

                    <Link to="/nodejs">
                        <img src="/img/node-brands.svg" alt="" />
                        <p>Node js</p>
                        </Link>    

                    </div>

                 {/* cms devlopmen */}
                  <div className={`mobile cms hide ${tecnology.cms && 'active'}`}>
                    <Link to="/wordpress">
                        <img src="/img/wordpress-brands.svg" alt="" />
                        <p>Wordpress</p>
                    </Link>

                    <Link to="/magento">
                        <img src="/img/magento-brands.svg" alt="" />
                        <p>Magento</p>
                        </Link>

                    <Link to="/shopify">
                        <img src="/img/shopify-brands.svg" alt="" />
                        <p>Shopify</p>
                        </Link>    

                    </div>


              <div className={`mobile infroDev hide ${tecnology.infraDev && 'active'}`}>
                    <Link to="/aws">
                        <img src="/img/aws-brands.svg" alt="" />
                        <p>Aws</p>
                    </Link>

                        <Link to="/elefent">
                        <img src="/img/elephant.png" alt="" />
                        <p>Gradle</p>
                        </Link>

                        <Link to="/jenkis">
                        <img src="/img/jenkins-brands.svg" alt="" />
                        <p>Jenkis</p>
                        </Link>

                    <Link to="/appium">
                        <img src="/img/gg-circle-brands.svg" alt="" />
                        <p>Appium</p>
                        </Link>

                    <Link to="/selenium">
                        <img src="/img/sellcast-brands.svg" alt="" />
                        <p>Selenium</p>
                        </Link>


                    <Link to="/azure">
                        <img src="/img/artstation-brands.svg" alt="" />
                        <p>Azure</p>
                        </Link>


                    <Link to="/digifalocean">
                        <img src="/img/digital-ocean-brands.svg" alt="" />
                        <p>Digital ocean</p>
                        </Link>


                    <Link to="/rackspace">
                        <img src="/img/rockrms-brands.svg" alt="" />
                        <p>Rackspace</p>
                        </Link>
                     <Link to="/linode">
                        <img src="/img/linode-brands.svg" alt="" />
                        <p>Linode</p>
                    </Link>       

                    </div>    


            </div>

        </div>

            
        </section>
    )
}

export default Tecnology
