import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { Col, Image, Row } from "react-bootstrap";
import UserTypeSelector from "./UserTypeSelector";
import { GrEdit } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";
import blank_avatar from "../blank-avatar.svg";
import { useDispatch } from "react-redux";
import { deleteUserByUsername } from "../../../redux";
function UserListItem({ user }) {
	const [userTypeEditMode, setUserTypeEditMode] = useState(false);
	const dispatch = useDispatch();
	const deleteUserButtonHandler = () => {
		dispatch(deleteUserByUsername(user.userName));
	};
	return (
		<Col>
			<Row className="pendingUser">
				<Col md={2} className="columnItem">
					<Image
						src={user.ppImage ? user.ppImage : blank_avatar}
						alt=""
						fluid
						roundedCircle
					></Image>
				</Col>
				<Col md={6} className="columnItem">
					<Row>
						<Col md={4} className="key">
							<span>Ad:</span>
						</Col>
						<Col md={8} className="value">
							<span>{user.userName}</span>
						</Col>
						<Col md={4} className="key">
							<span>Soyadı:</span>
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
								<span>Kullanıcı Tipi </span>
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
							<Button
								onClick={() => {
									deleteUserButtonHandler();
								}}
								colorScheme="warningRed"
							>
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
