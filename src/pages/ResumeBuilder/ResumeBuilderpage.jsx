import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeBuilderpage.css';
import Navbar from '../../components/Navbar/Navbar';

const templates = {
  modern: {
    backgroundColor: '#f0f8ff',
    headerColor: '#4a90e2',
    fontFamily: 'Arial, sans-serif',
  },
  classic: {
    backgroundColor: '#fff5e6',
    headerColor: '#8b4513',
    fontFamily: 'Georgia, serif',
  },
  minimalist: {
    backgroundColor: '#ffffff',
    headerColor: '#333333',
    fontFamily: 'Helvetica, sans-serif',
  },
};

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: 'HIMANSHU DILIP LADEKAR',
    title: 'Full Stack Web Developer',
    summary: 'Innovative and adaptable Full Stack Developer skilled in the MERN stack with expertise in building scalable web applications. Adept at utilizing Generative AI and quickly mastering new technologies. Strong collaboration and problem-solving skills, committed to delivering efficient and reliable solutions.',
    contact: {
      phone: '+9195',
      email: 'himanshuladekar21@gmail.com',
      location: 'Maharashtra',
      linkedin: 'himanshu-ladekar-7566b9194',
      website: 'himanshuladekar',
    },
    education: [
      {
        degree: 'Full Stack Web Development',
        school: 'Masai School',
        date: 'March 2023-present',
      },
      {
        degree: 'Bachelor of Engineering (Electrical Engineering)',
        school: 'Rajiv Gandhi College of Engineering and Research, Nagpur',
        date: 'July 2018 - June 2022',
      },
    ],
    skills: {
      technical: 'HTML5 | MongoDB | JavaScript | Git | CSS3 | Responsive Web Design | MySQL | React',
      soft: 'Teamwork | Effective Communication | Attention to Detail',
    },
    profilePhoto: '/placeholder.svg?height=150&width=150',
    experience: [
      {
        title: 'Web Developer Intern',
        company: 'Tech Solutions Inc.',
        date: 'June 2022 - August 2022',
        description: 'Assisted in developing responsive web applications using React and Node.js.',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        date: 'September 2023',
      },
    ],
    projects: [
      {
        name: 'Personal Portfolio Website',
        description: 'Developed a responsive personal portfolio website using React and Tailwind CSS.',
        technologies: 'React, Tailwind CSS, Netlify',
        link: 'https://myportfolio.com'
      }
    ],
  });

  const [currentTemplate, setCurrentTemplate] = useState(templates.modern);
  const resumeRef = useRef(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleInputChange = (section, field, value, index = null) => {
    setUserInfo(prevInfo => {
      if (['education', 'experience', 'certifications', 'projects'].includes(section) && index !== null) {
        const newArray = [...prevInfo[section]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prevInfo, [section]: newArray };
      } else if (typeof prevInfo[section] === 'object' && !Array.isArray(prevInfo[section])) {
        return { ...prevInfo, [section]: { ...prevInfo[section], [field]: value } };
      } else {
        return { ...prevInfo, [section]: value };
      }
    });
  };

  const addItem = (section) => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [section]: [...prevInfo[section], 
        section === 'experience'
          ? { title: '', company: '', date: '', description: '' }
          : section === 'projects'
          ? { name: '', description: '', technologies: '', link: '' }
          : { name: '', issuer: '', date: '' }
      ]
    }));
  };

  const removeItem = (section, index) => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [section]: prevInfo[section].filter((_, i) => i !== index)
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo(prevInfo => ({ ...prevInfo, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const applyTemplate = (templateName) => {
    setCurrentTemplate(templates[templateName]);
  };

  const generatePDF = async () => {
    const content = resumeRef.current;
    const canvas = await html2canvas(content, {
      scrollY: -window.scrollY,
      scale: 2, // Increase scale for better quality
      useCORS: true, // This might help with loading images
      onclone: (clonedDoc) => {
        // Force the cloned document to have a height that fits all content
        clonedDoc.querySelector('.hima-rb-right-panel').style.height = 'auto';
      }
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;

    // Calculate the number of pages needed
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgPages = Math.ceil(imgHeight * ratio / pageHeight);

    // Add image across multiple pages if necessary
    for (let i = 0; i < imgPages; i++) {
      if (i > 0) {
        pdf.addPage();
      }
      const position = -i * pageHeight;
      pdf.addImage(imgData, 'PNG', imgX, position + imgY, imgWidth * ratio, imgHeight * ratio);
    }

    pdf.save('resume.pdf');
  };

  return (
    <div className="hima-rb-resume-builder" style={{ fontFamily: currentTemplate.fontFamily, backgroundColor: currentTemplate.backgroundColor }}>
      <div className="hima-rb-left-panel">
        <button className="hima-rb-explore-button" style={{ backgroundColor: currentTemplate.headerColor }}>
          🔍 EXPLORE TEMPLATES
        </button>
        <div className="hima-rb-template-buttons">
          {Object.keys(templates).map((templateName) => (
            <button key={templateName} onClick={() => applyTemplate(templateName)} className="hima-rb-template-button">
              {templateName}
            </button>
          ))}
        </div>
        <div>
          {['name', 'title', 'summary', 'contact', 'education', 'skills', 'experience', 'projects', 'certifications', 'profilePhoto'].map((section) => (
            <div key={section} className="hima-rb-section">
              <button onClick={() => toggleSection(section)} className="hima-rb-section-button">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span style={{ float: 'right', transform: activeSection === section ? 'rotate(180deg)' : 'none' }}>▼</span>
              </button>
              {activeSection === section && (
                <div className="hima-rb-section-content">
                  {section === 'contact' ? (
                    Object.keys(userInfo.contact).map((field) => (
                      <div key={field}>
                        <label>{field}: </label>
                        <input
                          value={userInfo.contact[field]}
                          onChange={(e) => handleInputChange('contact', field, e.target.value)}
                          className="hima-rb-input-field"
                        />
                      </div>
                    ))
                  ) : section === 'skills' ? (
                    Object.keys(userInfo.skills).map((skillType) => (
                      <div key={skillType}>
                        <label>{skillType}: </label>
                        <input
                          value={userInfo.skills[skillType]}
                          onChange={(e) => handleInputChange('skills', skillType, e.target.value)}
                          className="hima-rb-input-field"
                        />
                      </div>
                    ))
                  ) : ['education', 'experience', 'certifications', 'projects'].includes(section) ? (
                    <div>
                      {userInfo[section].map((item, index) => (
                        <div key={index} className={`hima-rb-${section}-item`}>
                          {Object.keys(item).map((field) => (
                            <input
                              key={field}
                              value={item[field]}
                              onChange={(e) => handleInputChange(section, field, e.target.value, index)}
                              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                              className="hima-rb-input-field"
                            />
                          ))}
                          <button onClick={() => removeItem(section, index)} className="hima-rb-remove-button">Remove</button>
                        </div>
                      ))}
                      <button onClick={() => addItem(section)} className="hima-rb-add-button">Add {section.charAt(0).toUpperCase() + section.slice(1)}</button>
                    </div>
                  ) : section === 'profilePhoto' ? (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hima-rb-input-field"
                      />
                    </div>
                  ) : (
                    <div>
                      <label>{section}: </label>
                      <input
                        value={userInfo[section]}
                        onChange={(e) => handleInputChange(section, null, e.target.value)}
                        className="hima-rb-input-field"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hima-rb-right-panel" ref={resumeRef}>
        <div className="hima-rb-resume-header">
          <img src={userInfo.profilePhoto} alt="Profile" className="hima-rb-profile-pic" />
          <div className="hima-rb-name-title">
            <h1 style={{ color: currentTemplate.headerColor }}>{userInfo.name}</h1>
            <h2>{userInfo.title}</h2>
          </div>
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>PROFESSIONAL SUMMARY</h3>
          <p>{userInfo.summary}</p>
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>CONTACT</h3>
          {Object.entries(userInfo.contact).map(([key, value]) => (
            <p key={key}>
              {key === 'phone' && '📞 '}
              {key === 'email' && '✉ '}
              {key === 'location' && '📍 '}
              {key === 'linkedin' && '🔗 '}
              {key === 'website' && '🌐 '}
              {value}
            </p>
          ))}
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>EXPERIENCE</h3>
          {userInfo.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>{exp.title}</strong> at {exp.company}</p>
              <p>{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>PROJECTS</h3>
          {userInfo.projects.map((project, index) => (
            <div key={index}>
              <p><strong>{project.name}</strong></p>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
              <p>Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            </div>
          ))}
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>EDUCATION</h3>
          {userInfo.education.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.degree}</strong></p>
              <p>{edu.school}</p>
              <p>{edu.date}</p>
            </div>
          ))}
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>CERTIFICATIONS</h3>
          {userInfo.certifications.map((cert, index) => (
            <div key={index}>
              <p><strong>{cert.name}</strong></p>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
            </div>
          ))}
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>TECHNICAL SKILLS</h3>
          <p>{userInfo.skills.technical}</p>
        </div>
        <div className="hima-rb-resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>SOFT SKILLS</h3>
          <p>{userInfo.skills.soft}</p>
        </div>
      </div>
      <div className="hima-rb-bottom-panel">
        <button className="hima-rb-download" style={{ backgroundColor: currentTemplate.headerColor }} onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
}