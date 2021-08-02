import React from 'react'
import { Link } from 'react-router-dom'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ComputerIcon from '@material-ui/icons/Computer';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

function Services() {
    return (
        <section className='services'>
            <div className="services__titile">
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>Services</h3>
            </div>

            <div className="sevices___contant">
                <div className="single__item">
                    <Link to='/uiusDesign'>
                         {/* Icon */}
                        <WbIncandescentIcon />
                        <div className="sigleItem__info">
                        {/* project number */}
                            <span>103 Project</span>
                        {/* title */}
                        <h3>UI & UX Design</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>

                <div className="single__item">
                    <Link to='/graphicDesign'>
                        {/* Icon */}
                        <AssessmentIcon />
                        <div className="sigleItem__info">
                        {/* project number */}
                            <span>106 Project</span>
                        {/* title */}
                        <h3>Graphic Design</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>

                <div className="single__item">
                    <Link to='/webDesign'>
                        {/* Icon */}
                        <ComputerIcon />
                       <div className="sigleItem__info">
                        {/* project number */}
                            <span>109 Project</span>
                        {/* title */}
                        <h3>Web Design</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>

                <div className="single__item">
                    <Link to='/seo'>
                         {/* Icon */}
                        <MarkunreadMailboxIcon />
                        <div className="sigleItem__info">
                        {/* project number */}
                            <span>99 Project</span>
                        {/* title */}
                        <h3>Seo</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>

                <div className="single__item">
                    <Link to='/googletranslate'>
                        {/* Icon */}
                        <GTranslateIcon />
                        <div className="sigleItem__info">
                        {/* project number */}
                            <span>100 Project</span>
                        {/* title */}
                        <h3>Groogle Translate</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>

                <div className="single__item">
                    <Link to='/webDesign'>
                        {/* Icon */}
                        <GroupWorkIcon />
                       <div className="sigleItem__info">
                        {/* project number */}
                            <span>111 Project</span>
                        {/* title */}
                        <h3>Group Work</h3>
                        {/* description */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium necessitatibus impedit deserunt quaerat nihil! Voluptatibus nemo necessitatibus fugiat dolore atque!</p>
                        </div>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Services
