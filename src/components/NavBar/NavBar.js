import React, { useState, useEffect } from 'react'
import Section from '../Animation/Section.js'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const leftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: .8, delay: .1, ease: "linear" } },
  hidden: { opacity: 0, x: -100 }
};

const rightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: .8, delay: .1, ease: "linear" } },
  hidden: { opacity: 0, x: 100 }
};

const scaleVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: .8, delay: .1, ease: "linear" } },
  hidden: { opacity: 0, scale: 0 }
};


const NavBar = () => {

  const [openBtn, setOpenBtn] = useState('1600px');
  const [closeBtn, setCloseBtn] = useState('0px');

  const handleBtnopen = () => {
    setOpenBtn('0px');
    setCloseBtn('1600px');
  };

  const handleBtnClose = () => {
    setOpenBtn('1600px')
  };



  return (
    <>
      <div className="NavBar">
        <Section variant={leftVariant} className="logo_box">
          <Link className='logo' to={'/'}> SmartWeb</Link>
        </Section>
        <Section variant={scaleVariant} className="ulBox">
          <li><Link className='Navlink' to={'/'}>Home</Link></li>
          <li><Link className='Navlink' to={'/about'}>About</Link></li>
          <li><Link className='Navlink' to={'/Services'}>Services</Link></li>
          <li><Link className='Navlink' to={'/Project'}>Project</Link></li>
          <li><Link className='Navlink' to={'/Contect'}>Contect</Link></li>
        </Section>
        <Section className="resBtn" variant={rightVariant}>
          <button onClick={handleBtnopen} className='btn_form' ><CgMenuRight /></button>
        </Section>
      </div>

      <div className="resNavCon" style={{ left: `${openBtn}` }}>
        <div className="RssNav" >
          <button onClick={handleBtnClose} className='btn_cross'><ImCross /></button>
          <div className="resUlBox">
            <li><Link onClick={handleBtnClose} className='Navlink' to={'/'}>Home</Link></li>
            <li><Link onClick={handleBtnClose} className='Navlink' to={'/about'}>About</Link></li>
            <li><Link onClick={handleBtnClose} className='Navlink' to={'/Services'}>Services</Link></li>
            <li><Link onClick={handleBtnClose} className='Navlink' to={'/Project'}>Project</Link></li>
            <li><Link onClick={handleBtnClose} className='Navlink' to={'/Contect'}>Contect</Link></li>
          </div>
          <Section variant={rightVariant} className="icon-section">
              <a href='https://www.linkedin.com/feed/' target='blank' className='icons'><FaLinkedin /></a>
              <a href='https://twitter.com/home' target='blank' className='icons'><FaXTwitter /></a>
              <a href='https://www.facebook.com/' target='blank' className='icons'><FaFacebookF /></a>
              <a href='https://www.instagram.com/uzairuzair40/' target='blank' className='icons'><CiInstagram /></a>
              <a href='https://github.com/Uzairmalik1' target='blank' className='icons'><FaGithub /></a>
            </Section>
        </div>
      </div>

    </>
  )
}

export default NavBar;