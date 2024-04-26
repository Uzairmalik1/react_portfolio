import React from 'react';
import Section from '../Animation/Section.js';
import './Footer.css';
import { Link } from 'react-router-dom';
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const boxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: .5, delay: .1, ease: "linear", staggerChildren: 0.2 } },
    hidden: { opacity: 0, y: 100 }
};

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
    hidden: { opacity: 0, scale: 0  }
  };
  

const Footer = () => {
  return (
    <div className='footer'>
        <Section variant={boxVariant} className="footerDetail">
            <Section className="swlogowidth" variant={scaleVariant}>
            <img src="./image/smartweb_logo.png" alt="logo" />
            </Section>
            <div className="quickLinkDetails">
                <p className='quick'>Quick Link</p>
                <ul className='quickul'>
                    <li><Link className='quicklink' to={'/about'}>About</Link></li>
                    <li><Link className='quicklink' to={'/Services'}>Services</Link></li>
                    <li><Link className='quicklink' to={'/Project'}>Project</Link></li>
                    <li><Link className='quicklink' to={'/Blog'}>Faqs</Link></li>
                    <li><Link className='quicklink' to={'/Contect'}>Contect</Link></li>
                </ul>
                <div className="footer_Signup">
                    <span className='quickSign'><MdOutlineEmail /></span>
                    <input type="text" placeholder='Email Address'/>
                    <button>Sign Up <span className='gt'>&gt;</span> </button>
                </div>
            </div>
            <div className="address">
                <h1>Address</h1>
                <p><span><LiaMapMarkerAltSolid /></span> Peshawar, Khyber Pakhtun Khwa,<br/>   <pre>     Pakistan</pre></p>
                <p><span><MdOutlineEmail /></span> Uzairullah397@gmail.com</p>
                <p><span><AiOutlinePhone /></span> +92 342 990 85 42</p>
            </div>
        </Section>
        <span className='hr'></span>
        <div className="copyright">
            <Section variant={leftVariant} className="CRDiv">
                <p>Copyright &#169;2024, SmartWeb All Rights Reserved</p>
            </Section>
            <Section variant={rightVariant} className="icon-section">
              <a href='https://www.linkedin.com/feed/' target='blank' className='icons'><FaLinkedin /></a>
              <a href='https://twitter.com/home' target='blank' className='icons'><FaXTwitter /></a>
              <a href='https://www.facebook.com/' target='blank' className='icons'><FaFacebookF /></a>
              <a href='https://www.instagram.com/uzairuzair40/' target='blank' className='icons'><CiInstagram /></a>
              <a href='https://github.com/Uzairmalik1' target='blank' className='icons'><FaGithub /></a>
            </Section>
        </div>
    </div>
  )
}

export default Footer