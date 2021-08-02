import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SBanner() {
    return (
        <div className='sbanner'>
            <div className="container">
                <div className="sBanner_text">
                    <h2>World - class software solutions for business across the globe.</h2>
                    <p>Design. Development. Consultancy</p>
                </div>

                <a href="#digital" className="arro_icon">
                    <KeyboardArrowDownIcon />
                </a>
            </div>
        </div>
    )
}

export default SBanner
