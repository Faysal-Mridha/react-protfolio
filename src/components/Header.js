import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import CloseIcon from '@material-ui/icons/Close';


function Header({itsHome}) {

    const [dark, setDark] = useState(false);

    const [showNav, setShowNav] = useState(false);
    const [navOpen,setNavOpen] =useState(false);
    
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }

         // Toggle Navigation

    // const openNav = () => {
    //      document.querySelector(".nav-list").classList.add("open");
    // }

    // const closeNav = () => {
    //      document.querySelector(".nav-list").classList.remove("open");
    // }

    const openNav = () => {
         setNavOpen(true)
    }

    const closeNav = () => {
         setNavOpen(false)
    }
    
    
    const DarkMode = () => {
        if (document.querySelector('.root').classList.contains('dark')) {
            document.querySelector('.root').classList.remove('dark');
            setDark(false)
        } else {
             document.querySelector('.root').classList.add('dark');
            setDark(true)
        }
    }

    
    
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return ()=> window.removeEventListener('scroll' ,transitionNavBar)
    },[])
    

    return (
            <nav class={`nav ${showNav && "fix-nav"}`}>
                <div class="nav-center flex">
                    <Link to="/" class="logo flex">
                        <span class="color">F.</span>
                        <span>Faysal</span>
                    </Link>
            
                    <ul class={`nav-list flex ${navOpen && 'openNav'}`}>
                    {!itsHome && (
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        )}
                        <li>
                           <Link to='/about'>About us</Link>
                        </li>
                        <li>
                            <Link to='/service'>Services</Link>
                        </li>
                        <li>
                            <Link to='/protfolio'>Protfolio</Link>
                        </li>
                    <li>
                        <Link to='/experience'>Experience</Link>
                    </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>

                    {/* for dexotp verstion */}
                    
                        <li class="nav-item theme-icon" onClick={DarkMode} >
                            {dark?<WbSunnyIcon /> :<Brightness2Icon />}
                        </li>
            
                        <div class="close" onClick={closeNav}>
                            <CloseIcon />
                        </div>
                    </ul>
            

                    <div class="theme theme-icon" onClick={DarkMode} >
                        {dark?<WbSunnyIcon /> :<Brightness2Icon />}
                    </div>
            
                    <div class="hamburger" onClick={openNav}>
                        <MenuIcon />
                    </div>
                </div>
            </nav>
    )
}

export default Header
