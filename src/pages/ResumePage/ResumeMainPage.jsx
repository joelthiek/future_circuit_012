import { Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import InputResumeForm from "../../components/inputResumeForm/InputResumeForm"
import Template1 from "../../components/resumeTemplate/template1/Template1"
import Template2 from "../../components/resumeTemplate/template2/Template2"
import Template3 from "../../components/resumeTemplate/template3/Template3"
import "./ResumeMainPage.css"
import TemplateCard from "../../components/templateCard/TemplateCard"
import { useBreakpointValue } from "@chakra-ui/react"

import html2pdf from 'html2pdf.js';
import Navbar from "../../components/Navbar/Navbar"

const ResumeMainPage = () => {
  const [isExploreTemplate, setIsExploreTemplate] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("template1")

  const [formState, setFormState] = useState({
    profile: {
      name: "",
      email: "",
      phoneNo: "",
      locationAddress: "",
      linkedInUrl: "",
      githubUrl: "",
      portfolioUrl: "",
      role: "",
      photo:""
    },
    educations: [],
    technicalSkills: [],
    softSkills: [],
    profileSummary: "",
    experiences: [
      {
        companyName: "",
        role: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      },
    ],
    projects: [
      {
        projecttitle: "",
        liveDemoLink: "",
        githubLink: "",
        techStack: [""],
        responsinility: [""],
      },
    ],
  })

  const isMobileView = useBreakpointValue({ base: true, md: false });

  const handleFormChange = (section, field, value) => {
    setFormState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const addEducation = () => {
    setFormState((prev) => ({
      ...prev,
      educations: [
        ...prev.educations,
        {
          instituteName: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }))
  }

  const updateEducation = (index, field, value) => {
    setFormState((prev) => ({
      ...prev,
      educations: prev.educations.map((edu, idx) =>
        idx === index ? { ...edu, [field]: value } : edu
      ),
    }))
  }

  const handleDeleteEducation = (indexToDelete) => {
    setFormState((prevState) => ({
      ...prevState,
      educations: prevState.educations.filter(
        (_, index) => index !== indexToDelete
      ),
    }))
  }

  const handleSkillChange = (skillType, operation, index, value) => {
    setFormState((prev) => {
      const updatedSkills = [...prev[skillType]]

      switch (operation) {
        case "add":
          updatedSkills.push("")
          break

        case "update":
          updatedSkills[index] = value
          break

        case "delete":
          updatedSkills.splice(index, 1)
          break

        default:
          console.error("Invalid operation for skill change")
      }

      return {
        ...prev,
        [skillType]: updatedSkills,
      }
    })
  }

  const templateCard = [
    {
      resumeCard:
        "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
      templateName: "template1",
    },
    {
      resumeCard:
        "https://www.jobhero.com/resources/wp-content/uploads/2023/07/tutor-template-resume-JH.svg",
      templateName: "template2",
    },
    {
      resumeCard:
        "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
      templateName: "template3",
    },
  ]

  const onExploreTemplateToggle = () => {
    setIsExploreTemplate((prev) => !prev)
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 formState={formState} />
      case "template2":
        return <Template2 formState={formState}/>
      case "template3":
        return <Template3 formState={formState}/>
      default:
        return <div>Please select a template.</div>
    }
  }

  const addExperience = () => {
    setFormState((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          companyName: "",
          role: "",
          startDate: "",
          endDate: "",
          responsibilities: [""],
        },
      ],
    }))
  }

  const updateExperience = (index, field, value) => {
    setFormState((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp, idx) =>
        idx === index ? { ...exp, [field]: value } : exp
      ),
    }))
  }
  const addResponsibility = (index) => {
    const updatedExperiences = [...formState.experiences]
    updatedExperiences[index].responsibilities.push("")
    setFormState({ ...formState, experiences: updatedExperiences })
  }

  const updateResponsibility = (expIndex, resIndex, value) => {
    const updatedExperiences = [...formState.experiences]
    updatedExperiences[expIndex].responsibilities[resIndex] = value
    setFormState({ ...formState, experiences: updatedExperiences })
  }

  const deleteResponsibility = (expIndex, resIndex) => {
    const updatedExperiences = [...formState.experiences]
    updatedExperiences[expIndex].responsibilities.splice(resIndex, 1)
    setFormState({ ...formState, experiences: updatedExperiences })
  }

  const deleteExperience = (index) => {
    setFormState((prevState) => ({
      ...prevState,
      experiences: prevState.experiences.filter((_, idx) => idx !== index),
    }))
  }

  const addProject = () => {
    setFormState((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          projectTitle: "",
          liveDemoLink: "",
          githubLink: "",
          techStack: [""],
          responsinility: [""],
        },
      ],
    }))
  }

  const deleteProject = (projectIndex) => {
    setFormState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((_, index) => index !== projectIndex),
    }))
  }

  const updateProject = (projectIndex, field, value) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex][field] = value

      return { ...prevState, projects: updatedProjects }
    })
  }

  const addTechStack = (projectIndex) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].techStack.push("")

      return { ...prevState, projects: updatedProjects }
    })
  }

  const updateTechStack = (projectIndex, techIndex, value) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].techStack[techIndex] = value

      return { ...prevState, projects: updatedProjects }
    })
  }

  const deleteTechStack = (projectIndex, techIndex) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].techStack.splice(techIndex, 1)

      return { ...prevState, projects: updatedProjects }
    })
  }

  const addProjectResponsibility = (projectIndex) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].responsinility.push("")

      return { ...prevState, projects: updatedProjects }
    })
  }

  const updateProjectResponsibility = (projectIndex, respIndex, value) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].responsinility[respIndex] = value

      return { ...prevState, projects: updatedProjects }
    })
  }

  const deleteProjectResponsibility = (projectIndex, respIndex) => {
    setFormState((prevState) => {
      const updatedProjects = [...prevState.projects]
      updatedProjects[projectIndex].responsinility.splice(respIndex, 1)

      return { ...prevState, projects: updatedProjects }
    })
  }


const downloadResumeAsPDF = () => {
  const resumeContent = document.querySelector('.resumeRightMain');

  const options = {
    margin:0,
    padding:0,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(resumeContent).set(options).save();
}

const handlePhotoUpload = (e) => {
   const file = e.target.files[0]

   if (file){
    const reader = new FileReader()
    reader.onload = () => {
      setFormState((prevState)=> ({
        ...prevState, 
        profile:{...prevState.profile, photo:reader.result}
      }))
    }
    reader.readAsDataURL(file)
   }
}
  

  return (
    <div>
    <Navbar/>
    <div className='resumeMain'>
    {isMobileView && (
          <p className="note">
            Note : Use Laptop/Desktop or Tablet for best Experience
          </p>
        )}
      <div className='resumeLeftMain'>
        <Box>
          <Button
            onClick={onExploreTemplateToggle}
            width='100%'
            size='sm'
            colorScheme='blue'
          >
            {isExploreTemplate ? "Fill Input Form" : "Explore Template"}
          </Button>
        </Box>

        {isExploreTemplate ? (
          <Box display='grid'  gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}   gap='10px'>
            {templateCard.map((card) => (
              <TemplateCard
                key={card.templateName}
                card={card.resumeCard}
                templateName={card.templateName}
                handleSelect={setSelectedTemplate}
              />
            ))}
          </Box>
        ) : (
          <Box>
            <InputResumeForm
              formState={formState}
              handleFormChange={handleFormChange}
              addEducation={addEducation}
              updateEducation={updateEducation}
              handleDeleteEducation={handleDeleteEducation}
              handleSkillChange={handleSkillChange}
              setFormState={setFormState}
              addExperience={addExperience}
              updateExperience={updateExperience}
              deleteExperience={deleteExperience}
              addResponsibility={addResponsibility}
              updateResponsibility={updateResponsibility}
              deleteResponsibility={deleteResponsibility}
              addProject={addProject}
              updateProject={updateProject}
              deleteProject={deleteProject}
              addTechStack = {addTechStack}
              deleteTechStack={deleteTechStack}
              updateTechStack = {updateTechStack}
              addProjectResponsibility={addProjectResponsibility}
              updateProjectResponsibility={updateProjectResponsibility}
              deleteProjectResponsibility={deleteProjectResponsibility}
              downloadResumeAsPDF={downloadResumeAsPDF}
              handlePhotoUpload={handlePhotoUpload}
            />
          </Box>
        )}
      </div>

      <div className='resumeRightMain'>{renderTemplate()}</div>
    </div>
    </div>

  )
}

export default ResumeMainPage
