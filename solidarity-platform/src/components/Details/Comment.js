import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const MyComment = styled.div`
    margin-bottom: 1rem;
    background-color: lightcoral;
    border-radius: 1rem;
    padding: 1rem;
    h2{
        font-size:larger;
        font-weight: bold;
    }
    p{

    }
`

function Comment({ comment }) {
    return (
        <MyComment>
            <Row>
                <Col md={12}>
                    <h2>Kullanıcı Adı : {comment[0]}</h2>
                </Col>
                <Col md={{ offset: 1 }}>
                    Yorum : {comment[1]}
                </Col>
            </Row>
        </MyComment>
    )
}

export default Comment
