import React from "react"
import "./Template1.css"
import { CgProfile } from "react-icons/cg"
import { CiPhone } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { IoMdInformation } from "react-icons/io"
import { BsPersonWorkspace } from "react-icons/bs"

const Template1 = ({ formState }) => {
  return (
    <div className='template1Main'>
      <div className='a4TemplateHeightCheck'>
        <div className='template1Conatainer'>
          <div className='template1Left'>
            <div className='template1PhotoContainer'>
              <img
                className='template1Img'
                src={
                  formState.profile.photo
                    ? formState.profile.photo
                    : "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
                }
                alt='passportPhoto'
              />
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Contact</p>
              <hr />

              <ul className='template1contactUl'>
                {formState.profile.phoneNo && (
                  <li>
                    <CiPhone /> <span>{formState.profile.phoneNo}</span>
                  </li>
                )}

                {formState.profile.email && (
                  <li>
                    <MdOutlineEmail /> <span>{formState.profile.email}</span>
                  </li>
                )}

                {formState.profile.locationAddress && (
                  <li>
                    <CiLocationOn />{" "}
                    <span>{formState.profile.locationAddress}</span>
                  </li>
                )}
                {formState.profile.linkedInUrl && (
                  <a href={formState.profile.linkedInUrl}>
                    <CiLinkedin /> <span>{formState.profile.linkedInUrl}</span>
                  </a>
                )}

                {formState.profile.githubUrl && (
                  <a href={formState.profile.githubUrl}>
                    <FaGithub /> <span>{formState.profile.githubUrl}</span>
                  </a>
                )}

                {formState.profile.portfolioUrl && (
                  <a href={formState.profile.portfolioUrl}>
                    <IoMdInformation />{" "}
                    <span>{formState.profile.portfolioUrl}</span>
                  </a>
                )}
              </ul>
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Education</p>
              <hr />
              {formState.educations.map((edu, index) => (
                <div className='template1EducationContainer' key={index}>
                  <p>{edu.degree}</p>
                  <p>{edu.instituteName}</p>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Technical Skills</p>
              <hr />

              {formState.technicalSkills.length > 0 && (
                <ul className='template1TechSkills'>
                  {formState.technicalSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className='template1LeftSec'>
              <p className='template1SecTitle'>Soft Skills</p>
              <hr />

              {formState.softSkills.length > 0 && (
                <ul className='template1TechSkills'>
                  {formState.softSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className='template1Right'>
            {formState.profile.name && (
              <p className='template1RightName'>{formState.profile.name}</p>
            )}
            {formState.profile.role && (
              <p className='template1RightName'>{formState.profile.role}</p>
            )}

            <div className='template1RightSec'>
              <p className='template1Righttitle'>Profile Summary</p>

              {formState.profileSummary && (
                <p className='template1RightSummary'>
                  {formState.profileSummary}
                </p>
              )}
            </div>

            <div className='template1RightSec'>
              {formState.experiences.responsibilities > 0 && (
                <p className='template1Righttitle'>Experience</p>
              )}
              {formState.experiences.map((exp) => (
                <>
                  <p className='template1ExpTitle'>{exp.companyName}</p>
                  <p className='template1ExpRole'>{exp.role}</p>
                  <p className='template1ExpRole'>
                    {exp.startDate} - {exp.endDate}
                  </p>

                  <p className='template1ExpResponsibility'>
                    Job responsibilities:
                  </p>
                  <ul className='template1ExpList'>
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </>
              ))}
            </div>

            <div className='template1RightSec'>
              <p className='template1Righttitle'>Projects</p>

              {formState.projects.map((project) => (
                <>
                  <div className='template1RightProject'>
                    <p className='template1ProjectTitle'>
                      {project.projectTitle}
                    </p>
                    <a className='template1ProjectLink' href='#'>
                      {project.liveDemoLink}
                    </a>
                    <a className='template1ProjectLink' href='#'>
                      {project.githubLink}
                    </a>
                  </div>
                  <ul className='template1RightTechStacks'>
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech + " " + "|"} </li>
                    ))}
                  </ul>

                  <ul className='template1ProjectResponsibility'>
                    {project.responsinility.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template1
