import React, { useEffect } from 'react'
import './DetailModal.scss'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import { Feed } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailContent } from '../../../redux'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
const ImageSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 1rem;
    img{
        margin-bottom: 1rem;
    }
    h1{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom : 1rem;
        font-weight:bold;
    }    
`

const InfoSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 1rem;
    h1{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom : 1rem;
        font-weight:bold;
    }
`
const CommentSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 2rem;
    h1{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom : 1rem;
        font-weight:bold;
    }
    margin-bottom: 1rem;
`

function DetailModal({ isOpen, onOpen, onClose }) {
    const detailContent = useSelector(state => state.detailContent)
    return (
        <div>
            <Modal scrollBehavior="inside" onClose={onClose} size={"full"} isOpen={isOpen} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Detay</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container>
                            <br />
                            <Row xs={1} md={2}>
                                <Col>
                                    <ImageSection>
                                        <Row>
                                            <Col md={12}>
                                                <h1>Images</h1>
                                            </Col>
                                            <Col md={12}>
                                                <ImageGallery items={detailContent.aidImgSrc} />;
                                </Col>
                                        </Row>
                                    </ImageSection>
                                </Col>
                                <Col>
                                    <InfoSection>
                                        <h1> Aid No : {detailContent.aidId} </h1>
                                        <p> Person Name :  {detailContent.aidName} </p>
                                        <p> Person Surname :  {detailContent.aidSurname} </p>
                                        <p> Person EmergencyLevel :  {detailContent.aidEmercenyLevel} </p>
                                    </InfoSection>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <CommentSection>
                                        <Row>
                                            <Col md={12}>
                                                <h1>Comments</h1>
                                            </Col>
                                            <Feed events={detailContent.comments} />
                                        </Row>
                                    </CommentSection>
                                </Col>
                            </Row>
                        </Container>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >

        </div >
    )
}

export default DetailModal
