import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function UserInfoColumn(props) {
	const { loggedUserData } = props;
	return (
		<div className="userInfoColumn">
			<Row>
				<Col md={12} className="columnItems">
					<Image src={loggedUserData.img} alt="" roundedCircle />
				</Col>
			</Row>
			<Row className="columnItems">
				<Col md={12} className="key">
					<span>Name</span>
				</Col>
				<Col md={12} className="value">
					<span>{loggedUserData.firstName}</span>
				</Col>
			</Row>
			<Row className="columnItems">
				<Col md={12} className="key">
					<span>Surname</span>
				</Col>
				<Col md={12} className="value">
					<span>{loggedUserData.lastName}</span>
				</Col>
			</Row>
			<Row className="columnItems">
				<Col md={12} className="key">
					<span>E-mail</span>
				</Col>
				<Col md={12} className="value">
					<span>{loggedUserData.email}</span>
				</Col>
			</Row>
		</div>
	);
}

export default UserInfoColumn;
