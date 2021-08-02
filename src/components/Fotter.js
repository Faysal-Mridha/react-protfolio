import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';


function Fotter() {
    return (
        <footer>
            <div className="container">
                <div className="fotter__contant">
                                <div className="fotter__top">
                <p>@Copyright 2021 | Faysal</p>
            </div>

            <div className="fotter__bottom">
<a href="https://www.instagram.com/faysalmridha11/"><InstagramIcon /></a>
<a href="https://app.slack.com/client/"><TwitterIcon /></a>
<a href="https://www.facebook.com/faysalahmed.munna.758/"><LinkedInIcon /></a>
<a href="https://www.facebook.com/faysalahmed.munna.758/"><FacebookIcon /></a>
<a href="https://www.youtube.com"><GitHubIcon /></a>
            </div>
                </div>
            </div>
        </footer>
    )
}

export default Fotter
