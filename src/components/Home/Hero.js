import React,{useState} from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router-dom';

function Hero() {

    const history = useHistory();

const ShowControl = () => {
    document.querySelector('.control').classList.toggle('openControl');

}

    
const setColor = (val) => {
    document.querySelector(":root").style.setProperty("--customColor", val);
}
    
// window.addEventListener('scroll', function () {
//     if (document.querySelector('.control').classList.contains('openControl')) {
//         return document.querySelector('.control').classList.remove('openControl');
//     }
// })
    
    return (
                <div className="hero__contant">
                    <div className="overlay" />
                <img src="/img/hero.png" className="hero-img" alt="" />
            
            <div className="socials">
                <span ><a href="https://www.instagram.com/faysalmridha11/"><InstagramIcon /></a></span>
                <span ><a href="https://www.facebook.com/faysalahmed.munna.758/"><FacebookIcon /></a></span>
                <span><a href="https://app.slack.com/client/"><GitHubIcon /></a></span>
            </div>

            
            <div className="control">
                <div className="widget d-flex" onClick={ShowControl} >
                <SettingsIcon />
                </div>
                <div className="colors">
                <span onClick={()=> setColor('#ff6174')}></span>
                <span onClick={()=> setColor('#42caff')}></span>
                <span onClick={()=> setColor('#7462e1')}></span>
                <span onClick={()=> setColor('#ff4600')}></span>
                <span onClick={()=> setColor('#ce00ff')}></span>
                </div>
            </div>



            <div className="content">
                <span>Hello I ' am Faysal</span>
                <h1>I Am a <span id="mytext"></span></h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quis
                illum distinctio inventore necessitatibus animi quas aliquid at
                aliquam aspernatur.
                </p>
                <a href="https://www.facebook.com/faysalahmed.munna.758/" target="_blank" className="btn btn-hero">Hire me</a>
      </div>
            </div>
    )
}

export default Hero
