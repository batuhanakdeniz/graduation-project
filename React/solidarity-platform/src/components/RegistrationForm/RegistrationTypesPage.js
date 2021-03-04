import React from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './RegistrationTypes.scss'

function RegistrationTypesPage() {
    const buttonStyle = {
        marginTop: "2rem"
    }
    const cardStyle = {
        margin: "1rem 0rem 0rem 0rem",
        padding: "3rem 0rem 3rem 0rem"
    }
    const cardContainerStyle = {
        marginTop: "4rem",
        marginBottom: "4rem"
    }
    const cardInBodyStyle = {
        padding: "0rem 0rem 3rem 0rem"
    }
    const headerStyle = {
        fontSize: "2rem",
        color: "#438a62"
    }
    return (
        <Container style={cardContainerStyle}>
            <Card className="text-center">
                <Card.Header style={headerStyle}>Üye Tipleri</Card.Header>
                <Row>
                    <Col xs={12} md={3}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardInBodyStyle}>Üye Tipi : X</Card.Title>
                                <Card.Text style={cardInBodyStyle}>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Link to={`/signup/${1}`}>
                                    <Button style={buttonStyle} variant="outline-success" type="submit" >
                                        Üye Ol
                                </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardInBodyStyle}>Üye Tipi : X</Card.Title>
                                <Card.Text style={cardInBodyStyle}>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                                <Link to={`/signup/${2}`}>
                                    <Button style={buttonStyle} variant="outline-success" type="submit" >
                                        Üye Ol
                                </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardInBodyStyle}>Üye Tipi : X</Card.Title>
                                <Card.Text style={cardInBodyStyle}>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                                <Link to={`/signup/${3}`}>
                                    <Button style={buttonStyle} variant="outline-success" type="submit" >
                                        Üye Ol
                                </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardInBodyStyle}>Üye Tipi : X</Card.Title>
                                <Card.Text style={cardInBodyStyle}>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                                <Link to={`/signup/${4}`}>
                                    <Button style={buttonStyle} variant="outline-success" type="submit" >
                                        Üye Ol
                                </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default RegistrationTypesPage

