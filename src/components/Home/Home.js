import { React, useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Section from '../Animation/Section.js'
import './Home.css';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { PiTextTBold } from "react-icons/pi";
import { FaAngleDoubleUp } from "react-icons/fa";


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


const Home = () => {
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


  const [rotatedText, setRotatedText] = useState('');
  useEffect(() => {
    const originalText = "I'm Frontend Developer, I'm MERN Stack Developer, I'm Desinger and I'm Freelancer.";
    setRotatedText(
      originalText.split("").map((char, i) => (
        <b key={i} style={{ transform: `rotate(${i * 4.3}deg)` }}>{char}</b>
      ))
    );
  }, []);

  return (
    <>
      {/* ========== Hero Section ========== */}
      <div className="heroSection" id='home'>
        <Section className="herodetails" variant={leftVariant}>
          <h4>Hello, I'm</h4>
          <h1>Uzair Ullah.</h1>
          <h2>Web Developer</h2>
          <p>Unleash the full potential of your online business with my expertise as a full stack developer.I specialize in crafting captivating and custom e-commerce websites. Let's create a stunning online platform that converts visitors into loyal customers. change this to new one </p>
          <button className='hireMebtn' ><Link to={'/Contect'} className='btnlink'>Hire Me <span>&gt;</span></Link></button>

          <a href="/uzair_cv.pdf" className='cvBtn' target='blank'>Download Resume &gt;</a>
        </Section>

        <Section className="heroImg" variant={rightVariant}>
          <div class="imgBox">
            <img src="/image/Uzair.png" alt="heroImage" />
            <div class="rotateText">
              <div class="text">
                <p>{rotatedText}</p>
              </div>
              <span><i></i></span>
            </div>
          </div>
        </Section>
      </div>

      {/* ============= About me Section ============ */}

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

      {/* =============== Resume Section ============= */}
      <div className="resume">
        <div className="lineDev">
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
        <div className="exp">

          

          <Section className="expdetail" variant={boxVariant}>
            <p>My Resume</p>
            <h3>Real <span>Problem Solutions </span> Experience</h3>
            <div className="expComp">
              <div className="expSide">
                <div className='uparrow'><LuArrowUpRight /></div>
                <div className='expSideDe'>
                  <p>2024 - present</p>
                  <h3>City University Peshawar</h3>
                  <p>City Uni</p>
                </div>
              </div>
              <div className="expSide">
                <div className='uparrow'><LuArrowUpRight /></div>
                <div className='expSideDe'>
                  <p>2023 - 2024</p>
                  <h3>React js Developer</h3>
                  <p>Company name</p>
                </div>
              </div>
              <div className="expSide">
                <div className='uparrow'><LuArrowUpRight /></div>
                <div className='expSideDe'>
                  <p>2023 - 2024</p>
                  <h3>MERN Stack Developer</h3>
                  <p>Company name</p>
                </div>
              </div>
              <div className="expSide">
                <div className='uparrow'><LuArrowUpRight /></div>
                <div className='expSideDe'>
                  <p>2023 - 2024</p>
                  <h3>MERN Stack Developer</h3>
                  <p>Company name</p>
                </div>
              </div>
            </div>
          </Section>
          <Section className="swLogo" variant={scaleVariant}>
            <img src="./image/smartweb_logo.png" alt="logo" />
          </Section>
        </div>
        {/* ================ Services Section ============= */}
        <Section className="services" variant={boxVariant}>
          <p>Popular Services</p>
          <h3>My <span>Special Services</span> For your Business Development</h3>
          <div className="serTypes">
            <Section className="serT" variant={leftVariant} >
              <h1>01.</h1>
              <div className="serDet">
                <h3>Website Development</h3>
                <p>I will Develop Full stack websites using MERN.</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
            <Section className="serT" variant={rightVariant}>
              <h1>02.</h1>
              <div className="serDet">
                <h3>Front End Development</h3>
                <p>I will Develop Front End using React js .</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
            <Section className="serT" variant={scaleVariant}>
              <h1>03.</h1>
              <div className="serDet">
                <h3>Back End Development</h3>
                <p>I will develop Back End using Node js.</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
            <Section className="serT" variant={scaleVariant}>
              <h1>04.</h1>
              <div className="serDet">
                <h3>Website Design</h3>
                <p>I will Design using Figma & Photoshop.</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
            <Section className="serT" variant={boxVariant}>
              <h1>05.</h1>
              <div className="serDet">
                <h3>UI/UX Design</h3>
                <p>I will Design using Figma & Photoshop.</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
            <Section className="serT" variant={boxVariant}>
              <h1>06.</h1>
              <div className="serDet">
                <h3>Photoshop Editing</h3>
                <p>creating banners & web design .</p>
              </div>
              <div className="uparrow"><LuArrowUpRight /></div>
            </Section>
          </div>
        </Section>
      </div>

      {/* ============== Skills Section ============= */}
      <div className="skills">
        <Section className="skilldetials" variant={boxVariant}>
          <span>My Skills</span>
          <h3>Let’s Explore Popular <span> Skills & Experience</span></h3>
          <p>Dive into in-demand skills and experience that drive success. Discover what sets top performers apart in today's competitive landscape.</p>
          <Link className='skillBtn' to={'/about'}>Learn More &gt;</Link>
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
        <Section variant={scaleVariant}>
          <Link className='viewmorebtn' to={'/Project'}>View More Projects &gt;</Link>
        </Section>
      </div>
      {/* ============ News and Blogs Section =========== */}
      <div className="news">
        <Section variant={boxVariant} className="newsDiv">
          <p>News & Blog</p>
          <h3>Latest <span>News & Blog</span></h3>
        </Section>
        
        <div className="newstype">
          <Section variant={leftVariant} className="newsBox">
            <img src="./image/Lwork.jpg" alt="" />
            <div className="newsdetails">
              <p>News Category</p>
              <Link className="newsLink">New MERN Stack Website is comming soon</Link>
              <div className="newsline"></div>
              <p><FaRegCalendarAlt /> March 23, 2024</p>
            </div>
          </Section>
          <Section variant={rightVariant} className="newsBox">
            <img src="./image/Lwork.jpg" alt="" />
            <div className="newsdetails">
              <p>News Category</p>
              <Link className="newsLink">New MERN Stack Website is comming soon</Link>
              <div className="newsline"></div>
              <p><FaRegCalendarAlt /> March 23, 2024</p>
            </div>
          </Section>
        </div>
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
    </>
  )
}

export default Home;