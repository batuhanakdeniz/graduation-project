import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'
import './profileImage.jpeg'
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

    return (
        <div>
            <Container>
                <br />
                <Row xs={1} md={2}>
                    <Col>
                        <ImageSection>
                            <Row>
                                <Col>
                                    <h1>Profile Image</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>                                
                                    <Image src="https://picsum.photos/300/300" roundedCircle />
                                </Col>
                                <Col></Col>

                            </Row>
                        </ImageSection>
                    </Col>
                    <Col>
                        <InfoSection>
                            <p> User Name :  {userInfo.userName} </p>
                            <p> Firstname :  {userInfo.firstName} </p>
                            <p> Lastname :  {userInfo.lastName} </p>
                        </InfoSection>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <InfoSection>
                            <h1>{userInfo.firstName}</h1>
                            <h1>{userInfo.lastName}</h1> 
                        </InfoSection>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default ProfilePage;
