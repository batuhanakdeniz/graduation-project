import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import aidData from '../aidData'


const ImageSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 1rem;        
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
    }
`
const CommentSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 1rem;
    h1{
    font-size: 1.5rem;
    text-align: center;
    margin-bottom : 1rem;
    }
`

function Detail({ match }) {
    const aidId = match.params.id

    const thisAidData = {
        aidNo: aidData[aidId].aidNo,
        person: aidData[aidId].personName,
        img: aidData[aidId].img
    }

    return (
        <div>
            <Container>
                <br />
                <Row xs={1} md={2}>
                    <Col>
                        <ImageSection>
                            <Row xs={3}>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                                <Col style={{ marginBottom: "1rem" }}>
                                    <Image src={thisAidData.img} fluid rounded />
                                </Col>
                            </Row>
                        </ImageSection>
                    </Col>
                    <Col>
                        <InfoSection>
                            <h1> Aid No : {thisAidData.aidNo} </h1>
                            <p> Person Name :  {thisAidData.person} </p>
                        </InfoSection>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <CommentSection>
                            <h1>Comments</h1>
                        </CommentSection>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Detail
