import React from "react"
import "./Template1.css"
import { CgProfile } from "react-icons/cg"
import { CiPhone } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { IoIosInformationCircle, IoMdInformation } from "react-icons/io"

const Template1 = () => {
  return (
    <div className='template1Main'>
      <div className='a4TemplateHeightCheck'>
        <div className='template1Conatainer'>
          <div className='template1Left'>
            <div className='template1PhotoContainer'>
              <img
                className='template1Img'
                src='https://www.zica.co.zm/wp-content/uploads/2020/08/Passport-Size-Photo.jpg'
                alt='passportPhoto'
              />
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Contact</p>
              <hr />

              <ul className='template1contactUl'>
                <li>
                  <CiPhone /> <span>8901263445</span>
                </li>
                <li>
                  <MdOutlineEmail /> <span>joel@gmail.com</span>
                </li>
                <li>
                  <CiLocationOn /> <span>Bangalore,India</span>
                </li>
                <li>
                  <CiLinkedin /> <span>https://linkedin/joel</span>
                </li>
                <li>
                  <FaGithub /> <span>http://github/joel</span>
                </li>
                <li>
                  <IoMdInformation /> <span>https://myportfolio.com</span>
                </li>
              </ul>
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Education</p>
              <hr />

              <div className='template1EducationContainer'>
                <p>Bachelor of commerce</p>
                <p>Gurucharan College</p>
                <p>June 2017 - April 2022</p>
              </div>
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Technical Skills</p>
              <hr />

              <ul className='template1TechSkills'>
                <li>React</li>
                <li>Javascript</li>
                <li>AWS</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Soft Skills</p>
              <hr />
              <ul className='template1TechSkills'>
                <li>Adaptability</li>
                <li>Problem Solving</li>
                <li>Analytic Thinking</li>
              </ul>
            </div>
          </div>
          <div className='template1Right'>
            <p className='template1RightName'>Joel Rokiemlo Thiek</p>
            <p className='template1Role'>Full-Stack Developer</p>

            <div className='template1RightSec'>
              <p className='template1Righttitle'>Profile Summary</p>
              <p className='template1RightSummary'>
                Full Stack Web Developer skilled in the MERN stack and
                JavaScript, with a focus on code quality, problem-solving, and
                team collaboration. Quick to adapt to new technologies,
                including Generative AI.
              </p>
            </div>

            <div className='template1RightSec'>
              <p className='template1Righttitle'>Experience</p>
              <p className='template1ExpTitle'>Grace English School</p>
              <p className='template1ExpRole'>Assistant Teacher</p>
              <p className='template1ExpRole'>August 2022 - February 2023</p>

              <p className='template1ExpResponsibility'>
                Job responsibilities:
              </p>
              <ul className='template1ExpList'>
                <li>
                  Collaborated with school staff and administration to manage
                  and organize activities, showcasing strong teamwork and
                  communication skills.
                </li>
                <li>
                  Conducted assessments and prepared exams, demonstrating
                  attention to detail and problem-solving abilities.
                </li>
                <li>
                  Typed and prepared exam questions to ensure smooth assessment
                  processes.
                </li>
                <li>Occasionally took on responsibilities as a warden.</li>
              </ul>
            </div>

            <div className='template1RightSec'>
              <p className='template1Righttitle'>Projects</p>
              
              <div className='template1RightProject'>
                <p className="template1ProjectTitle">Finance Flow - Tracker</p>
                <a className="template1ProjectLink" href='#'>Live Demo Link</a>
                <a className="template1ProjectLink" href='#'>Github Repo</a>
              </div>
              <ul className='template1RightTechStacks'>
                <li>React | </li>
                <li>AWS | </li>
                <li>Tailwind | </li>
                <li>Firebase | </li>
                <li>Node.js | </li>
              </ul>

              <ul className="template1ProjectResponsibility">
                <li>
                  Income Tracking: Visual and tabular representations to display
                  total income, categorized by source or period.
                </li>
                <li>
                  Expense Tracking: Visualization of expenses with detailed
                  breakdowns and categories.
                </li>
                <li>
                  Dark and Light Mode: Option to switch between dark and light
                  themes for user preference.
                </li>
                <li>
                  Chat: Integrated chat feature for communication with support
                  or team members.
                </li>
              </ul>


              <div className='template1RightProject'>
                <p className="template1ProjectTitle">Finance Flow - Tracker</p>
                <a className="template1ProjectLink" href='#'>Live Demo Link</a>
                <a className="template1ProjectLink" href='#'>Github Repo</a>
              </div>
              <ul className='template1RightTechStacks'>
                <li>React | </li>
                <li>AWS | </li>
                <li>Tailwind | </li>
                <li>Firebase | </li>
                <li>Node.js | </li>
              </ul>

              <ul className="template1ProjectResponsibility">
                <li>
                  Income Tracking: Visual and tabular representations to display
                  total income, categorized by source or period.
                </li>
                <li>
                  Expense Tracking: Visualization of expenses with detailed
                  breakdowns and categories.
                </li>
                <li>
                  Dark and Light Mode: Option to switch between dark and light
                  themes for user preference.
                </li>
                <li>
                  Chat: Integrated chat feature for communication with support
                  or team members.
                </li>
              </ul>
            </div>
            
          </div>
          

          
        </div>
      </div>
    </div>
  )
}

export default Template1
