import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Col, Image, Row } from "react-bootstrap";
import ChangeUserTypeModal from "./ChangeUserTypeModal";
import blank_avatar from "./blank-avatar.svg";
function UserInfoColumn({ loggedUserData }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="userInfoColumn">
			<Row style={{ height: "20rem", marginBottom: "1rem" }}>
				<Col md={12} className="userProfilPicture">
					<Image
						src={loggedUserData.ppImage ? loggedUserData.ppImage : blank_avatar}
						alt=""
						rounded
					/>
				</Col>
			</Row>
			<Row className="columnItems">
				<Col md={12} className="key">
					<span>Ad</span>
				</Col>
				<Col md={12} className="value">
					<span>{loggedUserData.firstName}</span>
				</Col>
			</Row>
			<Row className="columnItems">
				<Col md={12} className="key">
					<span>Soyad</span>
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
					{loggedUserData.email ? (
						<span>{loggedUserData.email}</span>
					) : (
						<span>E-mail adresi bulunmamaktadır</span>
					)}
				</Col>
			</Row>
			{loggedUserData &&
				(loggedUserData.userType === "Confirmed" ||
					loggedUserData.userType === "Unconfirmed") && (
					<Row className="columnItems">
						<Col md={12} className="applicationSection">
							<span>Üyeliğinizi değiştirmek ister misiniz?</span>
						</Col>
						<Col md={12} style={{ padding: "0rem", marginTop: "1rem" }}>
							<Button colorScheme="green" onClick={handleShow} isFullWidth>
								Başvuru Yap
							</Button>
							<ChangeUserTypeModal
								type={loggedUserData.userType}
								handleClose={handleClose}
								show={show}
							/>
						</Col>
					</Row>
				)}
		</div>
	);
}

export default UserInfoColumn;
