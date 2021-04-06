import React from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'
import AidCard from './AidCard'
import './mapStyle.scss'
import { FixedSizeList as List } from 'react-window';


function AidCards({ aidData }) {
    return (
        <div>
            <br />
            <br />
            <Row md={1}>
                <Col>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <br />
                </Col>
                <List
                    className="List"
                    height={700}
                    itemCount={aidData.length}
                    itemSize={200}
                    width={300}
                >
                    {
                        ({ index, style }) => (
                            <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
                                {<AidCard aid={aidData[index]} />}
                            </div>
                        )
                    }
                </List>
            </Row>
        </div >

    )
}

export default AidCards
