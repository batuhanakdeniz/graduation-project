import { Button } from "@chakra-ui/button";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import blank_avatar from "../blank-avatar.svg";
import {
	confirmPendingUserByUsername,
	deletePendingUserByUsername,
} from "../../../redux";
import { useDispatch } from "react-redux";

function PendingUser({ user }) {
	const dispatch = useDispatch();
	const confirmPendingUserButtonHandler = () => {
		dispatch(confirmPendingUserByUsername(user.userName));
	};
	const deletePendingUserButtonHandler = () => {
		dispatch(deletePendingUserByUsername(user.userName));
	};
	return (
		<Col className="pendingUser">
			<Row className="columnItems">
				<Col md={2} className="columnItem">
					<Image
						src={user.ppImage ? user.ppImage : blank_avatar}
						alt=""
						roundedCircle
					></Image>
				</Col>
				<Col md={8} className="columnItem">
					<Row>
						<Col md={5} className="key">
							<span>Ad:</span>
						</Col>
						<Col md={7} className="value">
							<span>{user.userName}</span>
						</Col>
						<Col md={5} className="key">
							<span>Soyad:</span>
						</Col>
						<Col md={7} className="value">
							<span>{user.lastName}</span>
						</Col>
						<Col md={5} className="key">
							<span>Email:</span>
						</Col>
						<Col md={7} className="value">
							<span>{user.email}</span>
						</Col>
						<Col md={5} className="key">
							<span>Eski Kullanıcı Tipi:</span>
						</Col>
						<Col md={7} className="value">
							<span>{user.userType}</span>
						</Col>
						<Col md={5} className="key">
							<span>Yeni Kullanıcı Tipi:</span>
						</Col>
						<Col md={7} className="value">
							<span>{user.statusUserType.applyUserType}</span>
						</Col>
					</Row>
				</Col>
				<Col md={1} className="columnItem">
					<Row style={{ height: "100%" }}>
						<Col md={12} className="buttonSection">
							<Button
								onClick={() => {
									confirmPendingUserButtonHandler();
								}}
								colorScheme="teal"
							>
								<GiCheckMark />
							</Button>
						</Col>
						<Col md={12} className="buttonSection">
							<Button
								onClick={() => {
									deletePendingUserButtonHandler();
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

export default PendingUser;
