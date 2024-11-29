import React from "react"
import "./Template2.css"
import { CgProfile } from "react-icons/cg"
import { CiPhone } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { IoMdInformation } from "react-icons/io"
import { BsPersonWorkspace } from "react-icons/bs"

const Template2 = ({ formState }) => {
  return (
    <div className='template2Main'>
      <div className='a4TemplateHeightCheck'>
        <div className='template2Heading'>
          <div className='template2headLeft'>
            <p>{formState.profile.name}</p>
            <p>{formState.profile.role}</p>
          </div>
          <div className='template2headRight'>
            <div className='template2headRightPhotoConatiner'>
              <img
                src={
                  formState.profile.photo
                    ? formState.profile.photo
                    : "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
                }
                alt='photo'
              />
            </div>
          </div>
        </div>
        <div className='template2body'>
          <div className='template2bodyLeft'>
            <div className='template2ContactSec'>
              <p className='Template2bodyTitle'>CONTACT</p>
              <ul className='template2contactlist'>
                {formState.profile.phoneNo && (
                  <li>
                    <CiPhone />
                    {formState.profile.phoneNo}
                  </li>
                )}
                {formState.profile.email && (
                  <li>
                    <CgProfile />
                    {formState.profile.email}
                  </li>
                )}
                {formState.profile.locationAddress && (
                  <li>
                    <CiLocationOn />
                    {formState.profile.locationAddress}
                  </li>
                )}
                {formState.profile.portfolioUrl && (
                  <a href={formState.profile.portfolioUrl}>
                    <IoMdInformation />
                    Portfolio
                  </a>
                )}
                {formState.profile.githubUrl && (
                  <a href={formState.profile.githubUrl}>
                    <FaGithub />
                    Github
                  </a>
                )}
                {formState.profile.linkedInUrl && (
                  <a href={formState.profile.linkedInUrl}>
                    <CiLinkedin />
                    LinkedIn
                  </a>
                )}
              </ul>
            </div>

            <div className='template2EductionSec'>
              <p className='Template2bodyTitle'>EDUCATION</p>
              {formState.educations.map((education, index) => (
                <div key={index} className='template2EducationList'>
                  <p>{education.instituteName}</p>
                  <p>{education.degree}</p>
                  <p>
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
              ))}
            </div>

            <div className='template2TechnicalSkillsSec'>
              <p className='Template2bodyTitle'>TECHNICAL SKILLS</p>

              <ul className='template2TechnicalskillsList'>
                {formState.technicalSkills.map((skill) => (
                  <li key={skill}>{skill + " " + "|"}</li>
                ))}
              </ul>
            </div>

            <div className='template2TechnicalSkillsSec'>
              <p className='Template2bodyTitle'>SOFT SKILLS</p>

              <ul className='template2TechnicalskillsList'>
                {formState.softSkills.map((skill) => (
                  <li key={skill}>{skill + " " + "|"}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='template2bodyRight'>
            <div className='template2SummarySec'>
              <p className='Template2bodyTitle'>PROFILE SUMMARY</p>
              <p>{formState.profileSummary}</p>
            </div>

            <div className='template2SummarySec'>
              <p className='Template2bodyTitle'>PROJECTS</p>
              {formState.projects.map((project, index) => (
                <div key={index}>
                  <div className='template2ProjectHead'>
                    <p>{index + 1}. </p>
                    <p>{project.projectTitle}</p>
                    <a href={project.liveDemoLink}>Live Link</a>
                    <a href={project.githubLink}>Github Link</a>
                  </div>

                  <ul className='template2ProjectSkills'>
                    {project.techStack.map((skill) => (
                      <li key={skill}>{skill + " " + "|"}</li>
                    ))}
                  </ul>
                  <p className='template2RespTitle'>Responsibility :</p>
                  <ul className='template2RespList'>
                    {project.responsinility.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='template2ExperienceSec'>
              <p className='Template2bodyTitle'>WORK EXPERIENCE</p>
              {formState.experiences.map((exp, index) => (
                <div key={index}>
                  <div className='template2ExpList'>
                    <p>{exp.companyName}</p>
                    <p>
                      {exp.role} | {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  {exp.responsibilities.length > 0 && (
                    <p className='template2ExpResp'>Job Responsibility :</p>
                  )}
                  <ul className='template2expRespList'>
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template2
