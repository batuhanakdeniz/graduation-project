import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'
import {Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Flex,
    Image,
    Icon,
    useColorModeValue,} from '@chakra-ui/react'
    import İllisturation1 from './undraw_map_1r69.svg'
    import İllisturation2 from './undraw_Location_tracking_re_n3ok.svg'
    import İllisturation3 from './undraw_Map_dark_re_36sy.svg'

const MyContainer = styled.div`
    margin: 5rem 5rem 5rem 50rem;
    padding-top: 10rem;
    font-size: xx-large;
    background-color: #ffffff;
    @media (max-width: 780px){
        margin: 0;
        padding: 0; 
    }
`
function HomePage() {
    return (
        <div style={{ marginLeft: "1rem" }}>
            <Row md={12}>
                <Col md={7}>
                  <Row md={{cols:2}}>
                    <Col md={{ span:6, offset:3 }}>
                      <Heading>
                          Meeting scheduling{' '}
                          <Text as={'span'} color={'green.400'}>
                            made easy
                          </Text>
                      </Heading>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={{ span:8, offset:2 }}>

                  <Text color={'gray.500'} maxW={'3xl'}>
                          Never miss a meeting. Never be late for one too. Keep track of your
                          meetings and receive smart reminders in appropriate times. Read your
                          smart “Daily Agenda” every morning.
                  </Text>
                  </Col>
                  </Row>
                    <Row>
                    <Col md={{ span:6, offset:4 }}>

                    <Button
                              rounded={'full'}
                              px={6}
                              colorScheme={'green'}
                              bg={'green.400'}
                              _hover={{ bg: 'green.500' }}>
                              Get started
                            </Button>
                                <Button rounded={'full'} px={6}>
                                  Learn more
                                </Button>
                    </Col>
                </Row>
              </Col>
              <Col md={{ span:5, offset:7 }}>
              <Box boxSize="xl">
                      <Image src={İllisturation1} alt="Login Page" />
                </Box>
              </Col>
            </Row>

            <Row>
                <Col md={{ span:4, offset:1 }}>
                <Box boxSize="xl">
                        <Image src={İllisturation2} alt="Login Page" />
                  </Box>
                </Col>
                <Col md={7}>
                  <Row md={{cols:2}}>
                    <Col md={{ span:6, offset:3 }}>
                      <Heading>
                          Meeting scheduling{' '}
                          <Text as={'span'} color={'green.400'}>
                            made easy
                          </Text>
                      </Heading>
                    </Col>
                  </Row>
                  <Row>
                      <Col md={{ span:8, offset:6 }}>

                        <Text color={'gray.500'} maxW={'3xl'}>
                                Never miss a meeting. Never be late for one too. Keep track of your
                                meetings and receive smart reminders in appropriate times. Read your
                                smart “Daily Agenda” every morning.
                        </Text>
                      </Col>
                  </Row>
                    <Row>
                      <Col md={{ span:6, offset:4 }}>
                        <Button
                          rounded={'full'}
                          px={6}
                          colorScheme={'green'}
                          bg={'green.400'}
                          _hover={{ bg: 'green.500' }}>
                          Get started
                        </Button>
                        <Button rounded={'full'} px={6}>
                          Learn more
                        </Button>
                      </Col>
                  </Row>
                </Col>
            </Row>
            <Row md={12}>
                <Col md={7}>
                  <Row md={{cols:2}}>
                    <Col md={{ span:6, offset:3 }}>
                      <Heading>
                          Meeting scheduling{' '}
                          <Text as={'span'} color={'green.400'}>
                            made easy
                          </Text>
                      </Heading>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={{ span:8, offset:2 }}>

                  <Text color={'gray.500'} maxW={'3xl'}>
                          Never miss a meeting. Never be late for one too. Keep track of your
                          meetings and receive smart reminders in appropriate times. Read your
                          smart “Daily Agenda” every morning.
                  </Text>
                  </Col>
                  </Row>
                    <Row>
                    <Col md={{ span:6, offset:4 }}>

                    <Button
                              rounded={'full'}
                              px={6}
                              colorScheme={'green'}
                              bg={'green.400'}
                              _hover={{ bg: 'green.500' }}>
                              Get started
                            </Button>
                                <Button rounded={'full'} px={6}>
                                  Learn more
                                </Button>
                    </Col>
                </Row>
              </Col>
              <Col md={{ span:5, offset:7 }}>
              <Box boxSize="xl">
                      <Image src={İllisturation3} alt="Login Page" />
                </Box>
              </Col>
            </Row>







        </div>

        
    )
}

export default HomePage


