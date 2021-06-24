import { Button } from "@chakra-ui/button";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
function PendingUser({ user }) {
	return (
		<Col className="pendingUser">
			<Row className="columnItems">
				<Col md={3} className="columnItem">
					<Image src={user.ppImage} alt="" roundedCircle></Image>
				</Col>
				<Col md={7} className="columnItem">
					<Row>
						<Col md={4} className="key">
							<span>Name:</span>
						</Col>
						<Col md={8} className="value">
							<span>{user.userName}</span>
						</Col>
						<Col md={4} className="key">
							<span>Surname:</span>
						</Col>
						<Col md={8} className="value">
							<span>{user.lastName}</span>
						</Col>
						<Col md={4} className="key">
							<span>Email:</span>
						</Col>
						<Col md={8} className="value">
							<span>{user.email}</span>
						</Col>
					</Row>
				</Col>
				<Col md={1} className="columnItem">
					<Row style={{ height: "100%" }}>
						<Col md={12} className="buttonSection">
							<Button colorScheme="teal">
								<GiCheckMark />
							</Button>
						</Col>
						<Col md={12} className="buttonSection">
							<Button colorScheme="warningRed">
								<FaTrashAlt />
							</Button>
						</Col>
					</Row>
				</Col>
				<Col md={12}>
					<hr />
				</Col>
			</Row>
		</Col>
	);
}

export default PendingUser;
