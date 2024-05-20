import Logo from './assets/logo.svg';
import data from './data.json'
import { useState } from 'react';

function Header() {

  
  
    const url =  window.location.pathname;
    console.log(url);
  
  

  return (
    <>
    <div className='header'>
     <div className='logo'>
    <img src={Logo} alt="s"/>
    </div> 
    <div className='line'></div>
    
    <ul className='navMenu'>
      <li className={`${url === "/" ? 'nav-active' : ''}`}> <a href="/">00 Home</a></li>
      <li className={`${url === "/dest" ? 'nav-active' : ''}`}><a href="/dest">01 Destination</a></li>
      <li className={`${url === "/crew" ? 'nav-active' : ''}`}><a href="/crew">02 Crew</a></li>
      <li className={`${url === "/tech" ? 'nav-active' : ''}`}><a href="/tech">03 Technology</a></li>
    </ul>
    </div>
    </>
  )
}

export default Header