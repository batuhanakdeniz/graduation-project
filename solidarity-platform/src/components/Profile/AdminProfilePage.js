import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserData } from "../../redux";
import UserInfoColumn from "./UserInfoColumn";
import "./profileStyles.scss";
import AdminPanel from "./AdminPanel";
function AdminProfilePage() {
	//const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();
	const loggedUserData = {
		firstName: "Sefa",
		lastName: "Aydoğan",
		email: "aydgan@itu.edu.tr",
		img: "https://picsum.photos/200",
	};
	useEffect(() => {
		dispatch(getLoggedUserData());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={{ margin: "3rem 6rem 3rem 6rem" }}>
			<Row className="profilePage">
				<Col md={3}>
					<UserInfoColumn loggedUserData={loggedUserData} />
				</Col>
				<Col md={9}>
					<AdminPanel />
				</Col>
			</Row>
		</div>
	);
}

export default AdminProfilePage;
