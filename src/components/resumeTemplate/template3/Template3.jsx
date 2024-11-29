import React from "react"
import "./template3.css"

const Template3 = ({ formState }) => {
  return (
    <div className='template3MainContainer'>
      <div className='a4TemplateHeightCheck'>
        <div className='template3headingSec'>
          <p className='template3ProfileName'>{formState.profile.name}</p>
          <p className='template3profileRole'>{formState.profile.role}</p>
        </div>

        <div className='template3ProfileSummary'>
          <p>PROFILE SUMMARY</p>
          <hr />
          <p>{formState.profileSummary}</p>
        </div>

        <div className='template3ContactSection'>
          <p>CONTACT</p>
          <hr />
          <ul className='template3ContactList'>
            <li>{formState.profile.phoneNo} | </li>
            <li>{formState.profile.email} | </li>
            <li>{formState.profile.locationAddress} | </li>
            <li>
              {" "}
              <a href={formState.profile.portfolioUrl}>Portfolio | </a>
            </li>
            <li>
              {" "}
              <a href={formState.profile.githubUrl}>Github</a> |{" "}
            </li>
            <li>
              {" "}
              <a href={formState.profile.linkedInUrl}>LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className='template3TecnicalSkillsSec'>
          <p>TECHNICAL SKILLS</p>
          <hr />
          <ul className='template3SkillsList'>
            {formState.technicalSkills.map((skill) => (
              <li key={skill}>{skill} | </li>
            ))}
          </ul>
        </div>

        <div className='template3ProjectSec'>
          <p>PROJECTS</p>
          <hr />
          {formState.projects.map((project, index) => (
            <div key={index} className='template3ProjectList'>
              <div className='template3ProjectHead'>
                <p>{index + 1}.</p>
                <p>{project.projectTitle}</p>
                <a href={project.liveDemoLink}>Live Demo Link</a>
                <a href={project.liveDemoLink}>Github Repo</a>
              </div>

              <ul className='template3projectTechList'>
                {project.techStack.map((stack) => (
                  <li key={stack}>{stack} | </li>
                ))}
              </ul>

              <p className='template3FeaturesTitle'>Features :</p>
              <ul className='template3FeatureList'>
                {project.responsinility.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='template3ExpSec'>
          <p className='template3ExpTitle'>EXPERIENCE</p>
          <hr />
          {formState.experiences.map((exp, index) => (
            <div key={index}>
              <div className='template3ExpHeadList'>
                <p>{exp.companyName} | </p>
                <p>{exp.startDate}</p>
                <p>{exp.endDate}</p>
              </div>

              <ul className='template3ExpResponsilty'>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Template3
