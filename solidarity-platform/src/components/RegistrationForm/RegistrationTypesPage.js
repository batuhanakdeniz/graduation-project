import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './RegistrationTypes.scss'

function RegistrationTypesPage() {

    return (
        <div className="TypesBackground">
            <Container>
                <div className="types">
                    <Row xs={2} md={4}>
                        <Col>
                            <div className="type">
                                <div className="typeHeader">
                                    <h1>Üye No:1</h1>
                                </div>
                                <div className="typeContent">
                                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                </div>
                                <div className="typeButton">
                                    <Link to={`/signup/${1}`}>
                                        <Button variant="outline-success" type="submit" >
                                            Üye Ol
                                </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="type">
                                <div className="typeHeader">
                                    <h1>Üye No: 2</h1>
                                </div>
                                <div className="typeContent">
                                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                </div>
                                <div className="typeButton">
                                    <Link to={`/signup/${2}`}>
                                        <Button variant="outline-success" type="submit" >
                                            Üye Ol
                                </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="type">
                                <div className="typeHeader">
                                    <h1>Üye No: 3</h1>
                                </div>
                                <div className="typeContent">
                                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                </div>
                                <div className="typeButton">
                                    <Link to={`/signup/${3}`}>
                                        <Button variant="outline-success" type="submit" >
                                            Üye Ol
                                </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="type">
                                <div className="typeHeader">
                                    <h1>Üye No: 4</h1>
                                </div>
                                <div className="typeContent">
                                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                                </div>
                                <div className="typeButton">
                                    <Link to={`/signup/${4}`}>
                                        <Button variant="outline-success" type="submit" >
                                            Üye Ol
                                </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default RegistrationTypesPage

