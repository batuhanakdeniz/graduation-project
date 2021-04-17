import React, { useState } from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'
import AidCard from './AidCard'
import './mapStyle.scss'
import { FixedSizeList as List } from 'react-window';


function AidCards({ aidData }) {

    const [isSearch, setIsSearch] = useState(false)
    const handleSearchClick = () => {
        setIsSearch(true);
    }

    return (
        <div>
            <br />
            <Row md={1}>
                <Col>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={handleSearchClick} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <br />
                </Col>
                {isSearch ?
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
                    :
                    null
                }

            </Row>
        </div >

    )
}

export default AidCards
