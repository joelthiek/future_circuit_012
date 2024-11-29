import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { CgProfile } from "react-icons/cg"
import { CiCalendar, CiPhone } from "react-icons/ci"
import { FaGithub, FaGraduationCap } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineEmail, MdOutlineSchool } from "react-icons/md"
import { IoIosInformationCircle } from "react-icons/io"
import { AiOutlineDelete } from "react-icons/ai"
import { MdOutlinePhoto } from "react-icons/md";
import { MdWork } from "react-icons/md";

const InputResumeForm = ({
  formState,
  handleFormChange,
  addEducation,
  updateEducation,
  handleDeleteEducation,
  handleSkillChange,
  setFormState,
  deleteExperience,
  updateExperience,
  addResponsibility,
  updateResponsibility,
  deleteResponsibility,
  addExperience,
  addProject,
  updateProject,
  deleteProject,
  addTechStack,
  deleteTechStack,
  updateTechStack,
  addProjectResponsibility,
  updateProjectResponsibility,
  deleteProjectResponsibility,
  downloadResumeAsPDF,
  handlePhotoUpload
}) => {
  const profile = formState.profile

  return (
    <Box mt='20px'>
      <Text fontSize='sm' textAlign='center' fontWeight='600'>
        FILL IN THE REQUIRED INFORMATION:
      </Text>

      <Box>
        <Box mt='20px'>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Profile Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CgProfile color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='text'
                      placeholder='Enter Full Name'
                      value={profile.name}
                      onChange={(e) =>
                        handleFormChange("profile", "name", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <MdWork color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='text'
                      placeholder='Enter your role'
                      value={profile.role}
                      onChange={(e) =>
                        handleFormChange("profile", "role", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <MdOutlineEmail color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='email'
                      placeholder='Enter Email'
                      value={profile.email}
                      onChange={(e) =>
                        handleFormChange("profile", "email", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiPhone color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='tel'
                      placeholder='Enter Phone Number'
                      value={profile.phoneNo}
                      onChange={(e) =>
                        handleFormChange("profile", "phoneNo", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiLocationOn color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='text'
                      placeholder='Enter Location Address'
                      value={profile.locationAddress}
                      onChange={(e) =>
                        handleFormChange(
                          "profile",
                          "locationAddress",
                          e.target.value
                        )
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiLinkedin color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='url'
                      placeholder='Enter LinkedIn URL'
                      value={profile.linkedInUrl}
                      onChange={(e) =>
                        handleFormChange(
                          "profile",
                          "linkedInUrl",
                          e.target.value
                        )
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FaGithub color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='url'
                      placeholder='Enter Github URL'
                      value={profile.githubUrl}
                      onChange={(e) =>
                        handleFormChange("profile", "githubUrl", e.target.value)
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <IoIosInformationCircle color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='url'
                      placeholder='Enter Portfolio URL'
                      value={profile.portfolioUrl}
                      onChange={(e) =>
                        handleFormChange(
                          "profile",
                          "portfolioUrl",
                          e.target.value
                        )
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <MdOutlinePhoto color='gray.300' />
                    </InputLeftElement>
                    <Input
                      type='file'
                      accept="image/*"
                      placeholder='Enter Portfolio URL'
                      onChange={handlePhotoUpload}
                    />
                  </InputGroup>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Educations
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={4}>
                  <Button size='sm' colorScheme='blue' onClick={addEducation}>
                    Add Education
                  </Button>

                  {formState.educations.map((edu, index) => (
                    <Box
                      key={index}
                      borderWidth='1px'
                      borderRadius='lg'
                      p={4}
                      mt={4}
                      position='relative'
                    >
                      <Text fontWeight='600'>Education {index + 1}</Text>
                      <InputGroup mt={2}>
                        <InputLeftElement pointerEvents='none'>
                          <MdOutlineSchool color='gray.300' />
                        </InputLeftElement>
                        <Input
                          type='text'
                          placeholder='Institute Name'
                          value={edu.instituteName}
                          onChange={(e) =>
                            updateEducation(
                              index,
                              "instituteName",
                              e.target.value
                            )
                          }
                        />
                      </InputGroup>
                      <InputGroup mt={2}>
                        <InputLeftElement pointerEvents='none'>
                          <FaGraduationCap color='gray.300' />
                        </InputLeftElement>
                        <Input
                          type='text'
                          placeholder='Degree'
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(index, "degree", e.target.value)
                          }
                        />
                      </InputGroup>
                      <InputGroup mt={2}>
                        <InputLeftElement pointerEvents='none'>
                          <CiCalendar color='gray.300' />
                        </InputLeftElement>
                        <Input
                          type='date'
                          placeholder='Start Date'
                          value={edu.startDate}
                          onChange={(e) =>
                            updateEducation(index, "startDate", e.target.value)
                          }
                        />
                      </InputGroup>
                      <InputGroup mt={2}>
                        <InputLeftElement pointerEvents='none'>
                          <CiCalendar color='gray.300' />
                        </InputLeftElement>
                        <Input
                          type='date'
                          placeholder='End Date'
                          value={edu.endDate}
                          onChange={(e) =>
                            updateEducation(index, "endDate", e.target.value)
                          }
                        />
                      </InputGroup>
                      <Button
                        position='absolute'
                        top='4'
                        right='4'
                        colorScheme='red'
                        size='sm'
                        onClick={() => handleDeleteEducation(index)}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Technical Skills
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing={4} align='stretch'>
                  {formState.technicalSkills.map((skill, index) => (
                    <HStack key={index}>
                      <Input
                        value={skill}
                        onChange={(e) =>
                          handleSkillChange(
                            "technicalSkills",
                            "update",
                            index,
                            e.target.value
                          )
                        }
                        placeholder='Enter Tech Skill'
                      />
                      <Button
                        colorScheme='red'
                        size='sm'
                        onClick={() =>
                          handleSkillChange("technicalSkills", "delete", index)
                        }
                      >
                        Delete
                      </Button>
                    </HStack>
                  ))}
                  <Button
                    colorScheme='blue'
                    size='sm'
                    onClick={() => handleSkillChange("technicalSkills", "add")}
                  >
                    Add Skill
                  </Button>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Soft Skills
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing={4} align='stretch'>
                  {formState.softSkills.map((skill, index) => (
                    <HStack key={index}>
                      <Input
                        value={skill}
                        onChange={(e) =>
                          handleSkillChange(
                            "softSkills",
                            "update",
                            index,
                            e.target.value
                          )
                        }
                        placeholder='Enter Soft Skill'
                      />
                      <Button
                        colorScheme='red'
                        size='sm'
                        onClick={() =>
                          handleSkillChange("softSkills", "delete", index)
                        }
                      >
                        Delete
                      </Button>
                    </HStack>
                  ))}
                  <Button
                    colorScheme='blue'
                    size='sm'
                    onClick={() => handleSkillChange("softSkills", "add")}
                  >
                    Add Soft Skills
                  </Button>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Profile Summary
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Textarea
                  value={formState.profileSummary}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      profileSummary: e.target.value,
                    }))
                  }
                  placeholder='Write your profile summary...'
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Experiences
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* Add experience form for each experience item */}
                {formState.experiences.map((experience, index) => (
                  <Box key={index} mb={4}>
                    <Input
                      value={experience.companyName}
                      onChange={(e) =>
                        updateExperience(index, "companyName", e.target.value)
                      }
                      placeholder='Company Name'
                      mb={2}
                    />
                    <Input
                      value={experience.role}
                      onChange={(e) =>
                        updateExperience(index, "role", e.target.value)
                      }
                      placeholder='Role'
                      mb={2}
                    />
                    <Input
                      type='date'
                      value={experience.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                      placeholder='Start Date'
                      mb={2}
                    />
                    <Input
                      type='date'
                      value={experience.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                      placeholder='End Date'
                      mb={2}
                    />

                    {/* Add responsibilities */}
                    <Box>
                      <Button
                        onClick={() => addResponsibility(index)}
                        colorScheme='teal'
                        size='sm'
                        mb={2}
                      >
                        Add Responsibility
                      </Button>
                    </Box>

                    {experience.responsibilities.map(
                      (responsibility, resIndex) => (
                        <Box
                          key={resIndex}
                          display='flex'
                          alignItems='center'
                          mb={2}
                        >
                          <Textarea
                            value={responsibility}
                            onChange={(e) =>
                              updateResponsibility(
                                index,
                                resIndex,
                                e.target.value
                              )
                            }
                            placeholder='Responsibility'
                            size='sm'
                            mr={2}
                          />
                          <Button
                            onClick={() =>
                              deleteResponsibility(index, resIndex)
                            }
                            colorScheme='red'
                            size='sm'
                          >
                            Delete
                          </Button>
                        </Box>
                      )
                    )}
                    <Box mt={2}>
                      <Button
                        onClick={() => deleteExperience(index)}
                        colorScheme='red'
                        size='sm'
                      >
                        Delete Experience
                      </Button>
                    </Box>
                  </Box>
                ))}

                {/* Add button to add new experience */}
                <Button
                  onClick={addExperience}
                  colorScheme='blue'
                  size='sm'
                  width='100%'
                >
                  Add Experience
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {formState.projects.map((project, index) => (
                  <Box key={index} mb={4}>
                    <Input
                      value={project.projectTitle}
                      onChange={(e) =>
                        updateProject(index, "projectTitle", e.target.value)
                      }
                      placeholder='Enter Project Name/title'
                      type='text'
                      mb={2}
                    />
                    <Input
                      type='url'
                      value={project.liveDemoLink}
                      onChange={(e) =>
                        updateProject(index, "liveDemoLink", e.target.value)
                      }
                      placeholder='Enter Live Demo Link'
                      mb={2}
                    />
                    <Input
                      type='url'
                      value={project.githubLink}
                      onChange={(e) =>
                        updateProject(index, "githubLink", e.target.value)
                      }
                      placeholder='Enter Project Github Link'
                      mb={2}
                    />

                    {/* Accordion for Tech Stack */}
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              Tech Stack
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <VStack spacing={4} align='stretch'>
                            {project.techStack.map((skill, skillIndex) => (
                              <HStack key={skillIndex}>
                                <Input
                                  value={skill}
                                  onChange={(e) =>
                                    updateTechStack(
                                      index,
                                      skillIndex,
                                      e.target.value
                                    )
                                  }
                                  placeholder='Enter Tech Stack'
                                />
                                <Button
                                  colorScheme='red'
                                  size='sm'
                                  onClick={() =>
                                    deleteTechStack(index, skillIndex)
                                  }
                                >
                                  Delete
                                </Button>
                              </HStack>
                            ))}
                            <Button
                              colorScheme='blue'
                              size='sm'
                              onClick={() => addTechStack(index)}
                            >
                              Add Tech Stack
                            </Button>
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    {/* Accordion for Responsibilities */}
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              Responsibilities
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <VStack spacing={4} align='stretch'>
                            {project.responsinility.map((resp, resIndex) => (
                              <HStack key={resIndex}>
                                <Textarea
                                  value={resp}
                                  onChange={(e) =>
                                    updateProjectResponsibility(
                                      index,
                                      resIndex,
                                      e.target.value
                                    )
                                  }
                                  placeholder='Enter Responsibility'
                                  size='sm'
                                />
                                <Button
                                  colorScheme='red'
                                  size='sm'
                                  onClick={() =>
                                    deleteProjectResponsibility(index, resIndex)
                                  }
                                >
                                  Delete
                                </Button>
                              </HStack>
                            ))}
                            <Button
                              colorScheme='blue'
                              size='sm'
                              onClick={() => addProjectResponsibility(index)}
                            >
                              Add Responsibility
                            </Button>
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <Box mt={2}>
                      <Button
                        onClick={() => deleteProject(index)}
                        colorScheme='red'
                        size='sm'
                      >
                        Delete Project
                      </Button>
                    </Box>
                  </Box>
                ))}

                {/* Add button to add new project */}
                <Button
                  onClick={addProject}
                  colorScheme='blue'
                  size='sm'
                  width='100%'
                >
                  Add Project
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box display='flex' justifyContent='flex-end' mt='4'>
          <Button onClick={downloadResumeAsPDF}>Download as PDF</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default InputResumeForm
