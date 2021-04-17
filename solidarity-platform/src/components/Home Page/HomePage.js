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
        <div>
            <Row>
                <Col>
                <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Meeting scheduling{' '}
          <Text as={'span'} color={'green.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
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
        </Stack>
      </Stack>
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    )
}

export default HomePage


