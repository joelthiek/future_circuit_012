import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { CgProfile } from "react-icons/cg"
import { CiPhone } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineEmail } from "react-icons/md"
import { IoIosInformationCircle } from "react-icons/io"

const InputResumeForm = () => {
  return (
    <Box mt='20px'>
      <Text fontSize='sm' textAlign='center' fontWeight='600'>
        FILL IN THE REQUIRE INFORMATION:
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
                    <Input type='text' placeholder='Enter Full Name' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <MdOutlineEmail color='gray.300' />
                    </InputLeftElement>
                    <Input type='email' placeholder='Enter Email' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiPhone color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Enter Phone number' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiLocationOn color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Enter Location Address' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <CiLinkedin color='gray.300' />
                    </InputLeftElement>
                    <Input type='url' placeholder='Enter LinkedIn URL' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FaGithub color='gray.300' />
                    </InputLeftElement>
                    <Input type='url' placeholder='Enter Github URL' />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <IoIosInformationCircle color='gray.300' />
                    </InputLeftElement>
                    <Input type='url' placeholder='Enter Portfolio URL' />
                  </InputGroup>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  )
}

export default InputResumeForm
