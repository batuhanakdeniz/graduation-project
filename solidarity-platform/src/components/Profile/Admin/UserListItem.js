import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { Col, Image, Row } from "react-bootstrap";
import UserTypeSelector from "./UserTypeSelector";
import { GrEdit } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";
function UserListItem({ user }) {
	const [userTypeEditMode, setUserTypeEditMode] = useState(false);
	return (
		<Col>
			<Row className="pendingUser">
				<Col md={2} className="columnItem">
					<Image
						src={user.ppImage ? user.ppImage : "https://picsum.photos/200"}
						alt=""
						fluid
						roundedCircle
					></Image>
				</Col>
				<Col md={6} className="columnItem">
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
				<Col md={3} className="columnItem">
					{userTypeEditMode ? (
						<UserTypeSelector
							setUserTypeEditMode={setUserTypeEditMode}
							user={user}
						/>
					) : (
						<Row className="selectType">
							<Col md={12} className="key">
								<span>User Type </span>
								<Button size="sm" onClick={() => setUserTypeEditMode(true)}>
									<GrEdit />
								</Button>
							</Col>
							<Col md={8} className="value">
								<h1>{user.userType}</h1>
							</Col>
						</Row>
					)}
				</Col>
				<Col md={1} className="columnItem">
					<Row style={{ height: "100%" }}>
						<Col md={12} className="buttonSection">
							<Button colorScheme="blackAlpha">
								<CgDetailsMore />
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

export default UserListItem;
