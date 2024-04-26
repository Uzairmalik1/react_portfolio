import React from 'react';
import './Project.css';
import Section from '../Animation/Section.js'
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from "react-icons/lu";

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
  hidden: { opacity: 0, scale: 0 }
};

const Project = () => {
  return (
    <>
      <div className='aboutTop'>
        <Section variant={boxVariant} className="aboutTop">
          <h1>.Latest Works</h1>
        </Section>
      </div>
      <div className="resume">
        <div className="latestworklineDiv">
          <span style={{ left: '10%' }} className='line'></span>
          <span style={{ left: '20%' }} className='line'></span>
          <span style={{ left: '30%' }} className='line'></span>
          <span style={{ left: '40%' }} className='line'></span>
          <span style={{ left: '50%' }} className='line'></span>
          <span style={{ left: '60%' }} className='line'></span>
          <span style={{ left: '70%' }} className='line'></span>
          <span style={{ left: '80%' }} className='line'></span>
          <span style={{ left: '90%' }} className='line'></span>
        </div>
        {/* ======== Latest Work Section ======== */}
        <div className="Latestwork">
          <Section className="LWdiv" variant={boxVariant}>
            <p>Latest Works</p>
            <h3>Explore My Popular <span>Projects</span></h3>
          </Section>

          <div className="LworkType">
            <div className="LworkBox">
              <Section className="LworkBoxImg" variant={leftVariant}>
                <img src="./image/portfolio.png" alt="" />
              </Section>
              <Section variant={boxVariant} className="LWBdetails">
                <h4>Portfolio Website</h4><br />
                <a href="https://uzairmalik1.github.io/smartweb/" target='blank' className="LWBLink">Portfolio Website Development</a>
                <p>This is my second portfolio website, i created this in HTML, CSS, Javascript this is fully responsive website.</p>
                <a href='https://uzairmalik1.github.io/smartweb/' target='blank' className='LWBbtn'><LuArrowUpRight /></a>
              </Section>
            </div>
            <div className="LworkBox column-reverse">
              <Section variant={boxVariant} className="LWBdetails">
                <h4>Color Picker</h4><br />
                <a href='https://uzairmalik1.github.io/color_piker/' target='blank' className="LWBLink">Color Picker Website</a>
                <p>This is the best color picker website, give you a rendoms colors with regenarte button it generate the color paletts.</p>
                <a href='https://uzairmalik1.github.io/color_piker/' target='blank' className='LWBbtn'><LuArrowUpRight /></a>
              </Section>
              <Section className="LworkBoxImg" variant={rightVariant}>
                <img src="./image/color_piker.png" alt="" />
              </Section>
            </div>
            <div className="LworkBox">
              <Section className="LworkBoxImg" variant={leftVariant}>
                <img src="./image/spotify_clone.png" alt="" />
              </Section>
              <Section variant={boxVariant} className="LWBdetails">
                <h4>Spotify Clone</h4><br />
                <a href='https://uzairmalik1.github.io/spotify_clone/' target='blank' className="LWBLink">Spotify Clone Website</a>
                <p>This is the best mp3 songe player i have created many intersting things just check it ones.</p>
                <a href='https://uzairmalik1.github.io/spotify_clone/' target='blank' className='LWBbtn'><LuArrowUpRight /></a>
              </Section>
            </div>
            <div className="LworkBox column-reverse">
              <Section variant={boxVariant} className="LWBdetails">
                <h4>Image Slider</h4><br />
                <a href='https://uzairmalik1.github.io/image_slider/' target='blank' className="LWBLink">Image Slider Website</a>
                <p>This is the best Image slider website, I have created many option in this web page this is intersting.</p>
                <a href='https://uzairmalik1.github.io/image_slider/' target='blank' className='LWBbtn'><LuArrowUpRight /></a>
              </Section>
              <Section className="LworkBoxImg" variant={rightVariant}>
                <img src="./image/image_slider.png" alt="" />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project