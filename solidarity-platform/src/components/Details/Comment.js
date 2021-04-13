import React from 'react'
import { Col, Row } from 'react-bootstrap'



function Comment({ comment }) {
    return (
        <div>
            <Feed events={comment} />
        </div>
    )
}

export default Comment
