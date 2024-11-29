import React from "react";
import "./Template2.css";
import { CiPhone, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Template2 = ({ formState }) => {
  return (
    <div className="template2Main">
      <div className="template2Container">
        {/* Left Section */}
        <div className="template2Left">
          <h1 className="template2Name">{formState.profile.name}</h1>
          <h3 className="template2Role">{formState.profile.role}</h3>

          {/* Contact Info */}
          <div className="template2Contact">
            <ul>
              {formState.profile.phoneNo && (
                <li><CiPhone /> {formState.profile.phoneNo}</li>
              )}
              {formState.profile.email && (
                <li><MdOutlineEmail /> {formState.profile.email}</li>
              )}
              {formState.profile.locationAddress && (
                <li><CiLocationOn /> {formState.profile.locationAddress}</li>
              )}
              {formState.profile.linkedInUrl && (
                <li><CiLinkedin /> <a href={formState.profile.linkedInUrl}>LinkedIn</a></li>
              )}
              {formState.profile.githubUrl && (
                <li><FaGithub /> <a href={formState.profile.githubUrl}>GitHub</a></li>
              )}
            </ul>
          </div>

          {/* Education Section */}
          <div className="template2Section">
            <h2>Education</h2>
            {formState.educations.map((edu, index) => (
              <div key={index}>
                <h3>{edu.degree}</h3>
                <p>{edu.instituteName}</p>
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="template2Section">
            <h2>Technical Skills</h2>
            <ul>
              {formState.technicalSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="template2Section">
            <h2>Soft Skills</h2>
            <ul>
              {formState.softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="template2Right">
          <div className="template2PhotoContainer">
            <img
              className="template2Img"
              src={
                formState.profile.photo
                  ? formState.profile.photo
                  : "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
              }
              alt="Profile"
            />
          </div>

          {/* Professional Summary */}
          <div className="template2Section">
            <h2>Professional Summary</h2>
            <p>{formState.profileSummary}</p>
          </div>

          {/* Projects Section */}
          <div className="template2Section">
            <h2>Projects</h2>
            {formState.projects.map((project, index) => (
              <div key={index} className="template2Project">
                <h3>{project.title} | <span>{project.technologies}</span></h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div className="template2Section">
            <h2>Work Experience</h2>
            {formState.experiences.map((experience, index) => (
              <div key={index}>
                <h3>{experience.companyName}</h3>
                <p>{experience.role}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
                <ul>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
