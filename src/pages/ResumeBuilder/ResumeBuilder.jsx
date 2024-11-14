import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumeBuilder.css';

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
      phone: '+919594558862',
      email: 'himanshuladekar21@gmail.com',
      location: 'Umred, Maharashtra',
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
  });

  const [currentTemplate, setCurrentTemplate] = useState(templates.modern);
  const resumeRef = useRef(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleInputChange = (section, field, value, index = null) => {
    setUserInfo(prevInfo => {
      if (section === 'education' && index !== null) {
        const newEducation = [...prevInfo.education];
        newEducation[index] = { ...newEducation[index], [field]: value };
        return { ...prevInfo, education: newEducation };
      } else if (typeof prevInfo[section] === 'object' && !Array.isArray(prevInfo[section])) {
        return { ...prevInfo, [section]: { ...prevInfo[section], [field]: value } };
      } else {
        return { ...prevInfo, [section]: value };
      }
    });
  };

  const addEducation = () => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      education: [...prevInfo.education, { degree: '', school: '', date: '' }]
    }));
  };

  const removeEducation = (index) => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      education: prevInfo.education.filter((_, i) => i !== index)
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
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('resume.pdf');
  };

  return (
    <div className="resume-builder" style={{fontFamily: currentTemplate.fontFamily, backgroundColor: currentTemplate.backgroundColor}}>
      <div className="left-panel">
        <button className="explore-button" style={{backgroundColor: currentTemplate.headerColor}}>
          🔍 EXPLORE TEMPLATES
        </button>
        <div className="template-buttons">
          {Object.keys(templates).map((templateName) => (
            <button key={templateName} onClick={() => applyTemplate(templateName)} className="template-button">
              {templateName}
            </button>
          ))}
        </div>
        <div>
          {['name', 'title', 'summary', 'contact', 'education', 'skills', 'profilePhoto'].map((section) => (
            <div key={section} className="section">
              <button onClick={() => toggleSection(section)} className="section-button">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span style={{ float: 'right', transform: activeSection === section ? 'rotate(180deg)' : 'none' }}>▼</span>
              </button>
              {activeSection === section && (
                <div className="section-content">
                  {section === 'contact' ? (
                    Object.keys(userInfo.contact).map((field) => (
                      <div key={field}>
                        <label>{field}: </label>
                        <input
                          value={userInfo.contact[field]}
                          onChange={(e) => handleInputChange('contact', field, e.target.value)}
                          className="input-field"
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
                          className="input-field"
                        />
                      </div>
                    ))
                  ) : section === 'education' ? (
                    <div>
                      {userInfo.education.map((edu, index) => (
                        <div key={index} className="education-item">
                          <input
                            value={edu.degree}
                            onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                            placeholder="Degree"
                            className="input-field"
                          />
                          <input
                            value={edu.school}
                            onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                            placeholder="School"
                            className="input-field"
                          />
                          <input
                            value={edu.date}
                            onChange={(e) => handleInputChange('education', 'date', e.target.value, index)}
                            placeholder="Date"
                            className="input-field"
                          />
                          <button onClick={() => removeEducation(index)} className="remove-button">Remove</button>
                        </div>
                      ))}
                      <button onClick={addEducation} className="add-button">Add Education</button>
                    </div>
                  ) : section === 'profilePhoto' ? (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="input-field"
                      />
                    </div>
                  ) : (
                    <div>
                      <label>{section}: </label>
                      <input
                        value={userInfo[section]}
                        onChange={(e) => handleInputChange(section, null, e.target.value)}
                        className="input-field"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="right-panel" ref={resumeRef}>
        <div className="resume-header">
          <img src={userInfo.profilePhoto} alt="Profile" className="profile-pic" />
          <div className="name-title">
            <h1 style={{ color: currentTemplate.headerColor }}>{userInfo.name}</h1>
            <h2>{userInfo.title}</h2>
          </div>
        </div>
        <div className="resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>PROFESSIONAL SUMMARY</h3>
          <p>{userInfo.summary}</p>
        </div>
        <div className="resume-section">
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
        <div className="resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>EDUCATION</h3>
          {userInfo.education.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.degree}</strong></p>
              <p>{edu.school}</p>
              <p>{edu.date}</p>
            </div>
          ))}
        </div>
        <div className="resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>TECHNICAL SKILLS</h3>
          <p>{userInfo.skills.technical}</p>
        </div>
        <div className="resume-section">
          <h3 style={{ color: currentTemplate.headerColor, borderBottomColor: currentTemplate.headerColor }}>SOFT SKILLS</h3>
          <p>{userInfo.skills.soft}</p>
        </div>
      </div>
      <div className="bottom-panel">
        <button className="edit-profile">Edit Profile</button>
        <button className="download" style={{backgroundColor: currentTemplate.headerColor}} onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
}