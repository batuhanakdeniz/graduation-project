import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Card, Button, Image, Nav} from 'react-bootstrap'
import styled from 'styled-components'
import CreatedHelps from './CreatedHelps'
const ImageSection = styled.div`
    min-height : 10rem;
    border-radius: 1rem;
    background-color: #6DF2B0;
    padding : 1rem;
    center{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
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



function ProfilePage() {
    const [userInfo, setUserInfo] = useState([])
    const getUser = async () => {

        const loggedInRes = await axios.get(`http://localhost:5000/api/loggedUser`);
        setUserInfo(loggedInRes.data);
    }

    useEffect(() => {
        getUser();
        // ! Alt satır kalacak silme
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [navlink, setNavLink] = useState("Profile")
    const handleSelect = (eventKey) => {
        if(eventKey === "Profile"){
            setNavLink("Profile");
            console.log("navLink: ",navlink);
        }
        else{
            setNavLink("Posts");
            console.log("navLink: ",navlink);

        }
    };


    return (
        <div style={{ marginLeft: "1rem" }}>
            <Container fluid>
                <br />
                <Row>
                    <Col md={{ span:6, offset:4 }}>
                        <Nav justify variant="tabs" defaultActiveKey="Profile" onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="Profile">Profil</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Posts">Oluşturulan Yardımlar</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} md={{ span:2, offset:1 }}>
                        <Card border="light" >
                            <Card.Header>Profil</Card.Header>
                            <Image variant="top" src="https://picsum.photos/200/200" roundedCircle/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={{ offset:1}}>
                        {navlink === "Profile" &&(
                        <h1>profile</h1>
                        )}
                        {navlink === "Posts" &&
                        (
                            <CreatedHelps />
                        )}
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProfilePage;