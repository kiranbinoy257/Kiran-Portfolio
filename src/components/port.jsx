import './Port.css'
import img from '../assets/image/kiran.png'




function Port(){
  
 return (
    <>
   {/* <div>
   <main className="container">
  <p>Hello 👋 I'm</p>
  <section className="animation">
    <div className="first"><div>Carlos Córdova</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="third"><div>Systems Engineer</div></div>
  </section>
</main>
      </div> */}
      
       <header>
        <h1>Portfolio.</h1>
        <nav>
          <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#About_me">About</a></li>
            <li><a href="#education-section">Qualification</a></li>
            <li><a href="#skills-section">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <div id="intro">
          <p className="greeting">Hello, It's Me</p>
          <h2>Kiran Binoy</h2>
          <p className="role">And I'm a <span >
          
          {/* id="changing-text">Web Developer */}
            </span></p>
          <div className="animation">
    <div className="first"><div>Mern Stack Developer</div></div>
    <div className="second"><div>Web Developer</div></div>
    
    </div>
          {/* <p className="description">
            Hello there, tech-savvy minds and visionary leaders! I'm  Kiran Binoy, a passionate web developer, programmer, and all-around tech enthusiast, eager to embark on new adventures in the digital realm.
          </p> */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kiran-binoy-18b9a32b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="https://www.freeiconspng.com/uploads/linkedin-icon-1.png" alt="LinkedIn" /></a>
            <a href="https://github.com/kiranbinoy257"><img src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwAAAA?rs=1&pid=ImgDetMain" alt="GitHub" /></a>
            <a href="https://www.facebook.com/profile.php?id=100004267757982&mibextid=ZbWKwL"><img src="https://www.mmppicture.co.in/wp-content/uploads/2021/03/Facebook-Icon-PNG-31-768x768.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com/kiran__binoy?igsh=emVwOHM1bWFkNXNh"><img src="https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Free-Download.png" alt="Instagram" /></a>
            <a href="#"><img src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="Twitter" /></a>
          </div>
          <div className="buttons">
            <a href="#" className="btn">Contact Me</a>
            <a href="#" className="btn">See Resume</a>
          </div>
        </div>
        <div className="illustration">
          <img src="https://cdn.dribbble.com/users/1019864/screenshots/3079099/media/9e5055da2ee6c899aab9403ceb7d0dc3.gif" alt="Illustration" />
        </div>
      </main>
      <section id="About_me">
      <div className="container2">
        <div className="profile-pic">
          <img src={img} alt="" />
        </div>
        <div id="About">
          <h1 id="h11">About Me</h1>
          <p className="subheading">My introduction</p>
          <p>
            I'm a MERN Stack Developer, passionate about technology and an avid reader. I have a
            self-motivated and can-do attitude, thriving in challenging and dynamic environments.
            Seeking a competitive position to enhance my skills and contribute to a professional
            organization. I'm very much passionate to learn new stuff that interests me and can help
            me to get better.
          </p>
          <div className="stats">
            <div className="stat">
              <h2>03+</h2>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h2>01+</h2>
              <p>Months experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="education-section">
            <h2><i className="icon"></i> Education</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>SSLC</h3>
                        <p>St.Thomas HSS Thankamany</p>
                        <p><i className="date-icon"></i> 2016</p>
                        <a href="#" className="view-more">View More →</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Class 12th</h3>
                        <p>St.Thomas HSS Thankamany</p>
                        <p><i className="date-icon"></i> 2018</p>
                        <a href="#" className="view-more">View More →</a>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>College</h3>
                        <p>Girijyothi Colleage Idukki</p>
                        <p><i className="date-icon"></i> 2018 - 2021</p>
                        <a href="#" className="view-more">View More →</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
          />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML"
          />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            alt="CSS"
          />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img
            src="https://www.pngrepo.com/download/354431/tailwindcss-icon.png"
            alt="Tailwind CSS"
          />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt="Bootstrap"
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt="Express"
          />
          <p>Express</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS"
          />
          <p>AWS</p>
        </div>
        <div className="skill-item">
          <img
            src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwAAAA?rs=1&pid=ImgDetMain"
            alt="Git"
          />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            alt="MongoDB"
          />
          <p>MongoDB</p>
        </div>
       
        
      </div>
    </section>
   <section id='project'>
   <section className="works">
            <h2>Works</h2>
            <div className="works-container">
                <div className="work-item">
                    <img src="https://th.bing.com/th/id/OIP.S2QdOQgUfeirWg4hMPuzsQHaDq?w=338&h=172&c=7&r=0&o=5&pid=1.7" alt="Project 1" />
                </div>
                <div className="work-item">
                    <img src="image2.jpg" alt="Project 2" />
                </div>
                <div className="work-item">
                    <img src="image3.jpg" alt="Project 3" />
                </div>
            </div>
        </section>

   </section>
  <section id='contact'>
   
  <div className="contact-container">
    <div className="contact-info">
        <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
                <h4>Contact Me</h4>
                <p>9747624958</p>
            </div>
        </div>
        <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
                <h4>Email</h4>
                <p>kiranbinoy257@gmail.com</p>
            </div>
        </div>
        <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
                <h4>Location</h4>
                <p>Kerala, idukki Thankmany</p>
            </div>
        </div>
    </div>
    <div className="contact-form">
        <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">
                Send Message <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    </div>
        </div>
  </section>
 
      
      
    

</>
 )
}
 export default Port