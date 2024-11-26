import React, { useState } from "react"
import "./ResumeMainPage.css"
import { Box, Button } from "@chakra-ui/react"
import TemplateCard from "../../components/templateCard/TemplateCard"
import InputResumeForm from "../../components/inputResumeForm/InputResumeForm"
import Template1 from "../../components/resumeTemplate/template1/Template1"
import Template2 from "../../components/resumeTemplate/template2/Template2"
import Template3 from "../../components/resumeTemplate/template3/Template3"

const ResumeMainPage = () => {
  const [isExploreTemplate, setIsExploreTemplate] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("template1")

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

  const onExploreTemplateTOggle = () => {
    setIsExploreTemplate((prev) => !prev)
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 />
      case "template2":
        return <Template2 />
      case "template3":
        return <Template3 />
      default:
        return <div>Please select a template.</div>
    }
  }

  return (
    <div className='resumeMain'>
      <div className='resumeLeftMain'>
        <Box>
          <Button
            onClick={onExploreTemplateTOggle}
            width='100%'
            size='sm'
            colorScheme='blue'
          >
            {isExploreTemplate ? "Fill Input Form" : "Explore Template"}
          </Button>
        </Box>

        {isExploreTemplate ? (
          <Box display='grid' gridTemplateColumns='repeat(2,1fr)' gap='10px'>
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
            <InputResumeForm />
          </Box>
        )}
      </div>

      <div className='resumeRightMain'>
         {renderTemplate()}
      </div>
    </div>
  )
}

export default ResumeMainPage
