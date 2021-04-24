import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import '../mapStyle.scss'
import styled from 'styled-components'

const MyCard = styled.div`
    background : ${props => props.color ? props.color : "white"};
    margin-bottom: 0.5rem;
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 1rem;
    border-color: rgb(33, 6, 95);
    color: ${props => (
        props.color === 'black' ||
        props.color === 'red' ||
        props.color === 'purple'
    ) ? 'white' : 'black'} ;
    padding: 1rem;
    button{
        margin-top: 2rem;
    }
    .cardInfos{
        
    }
    .cardHeader{
        font-weight: bolder;
    }
`;

function AidCard({ aid }) {
    return (
        <Col>
            <MyCard
                color={
                    (aid.emergencyLevel > 5)
                        ?
                        ((aid.emergencyLevel > 9)
                            ? 'black'
                            : (aid.emergencyLevel <= 7) ? 'purple' : 'red')
                        :
                        ((aid.emergencyLevel < 3) ? 'green' : 'orange')
                }
            >
                <Row>
                    <Col md={8}>
                        <div className="cardHeader">
                            <Col>
                                {aid.header}
                            </Col>
                        </div>
                        <div className="cardInfos">
                            <Col>
                                Yardım Numarası : {aid.aidNo}
                            </Col>
                            <Col>
                                Ad : {aid.personName}
                            </Col>
                            <Col>
                                Soyad : {aid.personLastName}
                            </Col>
                            <Col>
                                Emergency Level : {aid.emergencyLevel}
                            </Col>

                        </div>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col>
                                <Button>Git</Button>
                            </Col>
                            <Col>
                                <Button>Yorumlar</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </MyCard>
        </Col >
    )
}

export default AidCard
