import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import aidData from '../aidData'
import './DetailPage.scss'
import ImageGallery from 'react-image-gallery';
import { Feed } from 'semantic-ui-react'

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

function Detail({ match }) {
    const aidId = match.params.id

    const thisAidData = {
        aidNo: aidData[aidId].aidNo,
        person: aidData[aidId].personName,
        personLastname: aidData[aidId].personLastName,
        Emergency: aidData[aidId].emergencyLevel,
        img: aidData[aidId].img,
        comments: aidData[aidId].comments
    }

    /*const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    */

    return (
        <div>
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
                                    <ImageGallery items={thisAidData.img} />;
                                </Col>
                            </Row>
                        </ImageSection>
                    </Col>
                    <Col>
                        <InfoSection>
                            <h1> Aid No : {thisAidData.aidNo} </h1>
                            <p> Person Name :  {thisAidData.person} </p>
                            <p> Person Surname :  {thisAidData.personLastname} </p>
                            <p> Person EmergencyLevel :  {thisAidData.Emergency} </p>
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
                                <Feed events={thisAidData.comments} />
                            </Row>
                        </CommentSection>
                    </Col>
                </Row>
            </Container>


        </div >
    )
}

export default Detail
