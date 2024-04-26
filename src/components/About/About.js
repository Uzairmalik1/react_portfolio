import React from 'react';
import Section from '../Animation/Section.js'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";
import './About.css';


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

const About = () => {
  return (
    <>
      {/* ============= About me Section ============ */}
      <div className='aboutTop'>
        <Section variant={boxVariant} className="aboutTop">
          <h1>.About Me</h1>
        </Section>
      </div>

      <div className="about_container">
        <Section className="ab-side-1" variant={boxVariant}>
          <h5>About Me</h5>
          <h2>Professional <span>Problem Solutions</span> For Web Technologies</h2>
          <p>I specialize in creating beautiful and responsive user interfaces using HTML, CSS, CSS Frameworks, JavaScript, Jquery, React js, Node js,express js, and MongoDB. I'm passionate about creating responsive, user-friendly websites that help businesses and individuals to achieve their online goals. </p>
          <div className="flex">
            <div className="side">
              <div className='popskills'><span><FaCheck /> </span> Web Development</div>
              <div className='popskills'><span><FaCheck />  </span> React js Development</div>
            </div>
            <div className="side">
              <div className='popskills'><span><FaCheck /> </span> UI/UX Design</div>
              <div className='popskills'><span><FaCheck /> </span> MERN Stack Development</div>
            </div>
          </div>
          <div className="email_call">
            <p>
              <div className="emIcon">
                <MdOutlineMail />
              </div>
              <div className="emDetails">
                <span>Email Us</span>
                <p>uzairullah397@gmail.com</p>
              </div>
            </p>
            <p>
              <div className="emIcon">
                <AiOutlinePhone />
              </div>
              <div className="emDetails">
                <span>Make a Call</span>
                <p>+92 342 990 85 24</p>
              </div>
            </p>
          </div>
        </Section>
        <Section className=" side-2" variant={scaleVariant}>
          <img src="/image/about.png" alt="" />
        </Section>
      </div>

      {/* ================ Services Section ============= */}
      <div className="resume">
        <div className="limitedlineDiv">
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
        <div className="skills aboutSkills">
          <Section className="skilldetials" variant={boxVariant}>
            <span>My Skills</span>
            <h3>Let’s Explore Popular <span> Skills & Experience</span></h3>
            <p>Dive into in-demand skills and experience that drive success. Discover what sets top performers apart in today's competitive landscape.</p>
            <a href="/uzair_cv.pdf" className='cvBtn aboutCvBtn' target='blank'>Download Resume &gt;</a>
          </Section>
          <div className="skillcont">
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/html&css.png" alt="" />
              <p>HTML/CSS</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/javascript.png" alt="" />
              <p>JavaScript</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/tailwind.png" alt="" />
              <p>Tailwind</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/jquery.png" alt="" />
              <p>JQuery</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/react.png" alt="" />
              <p>React js</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/nodejs.png" alt="" />
              <p>Node js</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/expressjs.png" alt="" />
              <p>ExpressJs</p>
              <h3>95%</h3>
            </Section>
            <Section className="skillTy" variant={boxVariant}>
              <img src="./image/mongdb.png" alt="" />
              <p>MongoDB</p>
              <h3>95%</h3>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}

export default About