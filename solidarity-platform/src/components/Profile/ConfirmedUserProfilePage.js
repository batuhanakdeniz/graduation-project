import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserData } from "../../redux";
import UserInfoColumn from "./UserInfoColumn";
import "./profileStyles.scss";
import ConfirmedUserPanel from "./ConfirmedUserPanel";
function ConfirmedUserProfilePage() {
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();

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
					<ConfirmedUserPanel />
				</Col>
			</Row>
		</div>
	);
}

export default ConfirmedUserProfilePage;
