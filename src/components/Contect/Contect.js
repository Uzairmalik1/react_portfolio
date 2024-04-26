import { React, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contect.css';
import Section from '../Animation/Section.js'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { PiTextTBold } from "react-icons/pi";

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

const Contect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert(`Message is send successfully!`)
    emailjs
      .sendForm('service_01jdt69', 'template_s4u0vx9', form.current, {
        publicKey: 'g0MoVtECPvib2jJ0j',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert(`Message is not send there is any error!`)
        },
      );
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setText("");
  };


  return (
    <>
      <div className='aboutTop'>
        <Section variant={boxVariant} className="aboutTop">
          <h1>.Contact Us</h1>
        </Section>
      </div>
      <div className="resume">
        <div className="contactlineDiv">
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
        {/* ============ Contact Section ========== */}
        <div className="contactSection">
          <Section variant={boxVariant} className="contactDetails">
            <h5>Get In Touch</h5>
            <h3>Let's Talk For your <span> Next Projects</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, facilis.</p>
            <h4><span><FaCheck /></span> 1+ Years Of Experience</h4>
            <h4><span><FaCheck /></span> Professional Web Developer</h4>
            <h4><span><FaCheck /></span> MERN Stack Developer</h4>
            <h4><span><FaCheck /></span> Data Scientest</h4>
          </Section>
          <Section  variant={boxVariant} className="contactForm">
            <form ref={form} onSubmit={sendEmail}>

              <div className="contactinputss">
                <div className="formInput">
                  <p>Full Name</p>
                  <input type="text" name='user_name' required value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' />
                  <div className="formIcons"><BsPerson /></div>
                </div>

                <div className="formInput">
                  <p>Email Address</p>
                  <input type="email" name="user_email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='support@gmail.com' />
                  <div className="formIcons"><MdOutlineMail /></div>
                </div>

                <div className="formInput">
                  <p>Phone Number</p>
                  <input type="number" name='user_number' required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+92 342 990 85 23' />
                  <div className="formIcons"><AiOutlinePhone /></div>
                </div>

                <div className="formInput">
                  <p>Subject</p>
                  <input type="text" name='subject' required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                  <div className="formIcons"><PiTextTBold /></div>
                </div>
              </div>
              <p>Message</p>
              <textarea name="message" required value={text} onChange={(e) => setText(e.target.value)} id="" cols="30" rows="7" placeholder='Write Message'></textarea>

              <input type="submit" className='msgSubmitBtn' value="Send Us Message &gt;" />
            </form>
          </Section>
        </div>
      </div>
    </>
  )
}

export default Contect