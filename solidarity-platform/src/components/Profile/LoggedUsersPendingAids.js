import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import PaginatationComponent from "./PaginatationComponent";
import { fetchLoggedUsersPendingAids } from "../../redux";
import LoggedUsersAidsItem from "./LoggedUsersAidsItem";
function LoggedUsersPendingAids() {
	const loggedUsersAids = useSelector((state) => state.loggedUsersAids);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchLoggedUsersPendingAids());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		loggedUsersAids.pendingAidsList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			loggedUsersAids.pendingAidsList.slice(indexOfFirstPost, indexOfLastPost)
		);
		// eslint-disable-next-line
	}, [loggedUsersAids, currentPage]);

	return loggedUsersAids.loading ? (
		<h1>Loading!!!</h1>
	) : loggedUsersAids.error ? (
		<h1>{loggedUsersAids.error}</h1>
	) : (
		<>
			<Row md={2} className="allAidsContainer">
				{currentPosts.map((aid, idx) => (
					<LoggedUsersAidsItem key={idx} aid={aid} />
				))}
			</Row>
			<Row>
				<Col
					md={12}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<PaginatationComponent
						itemsPerPage={itemsPerPage}
						totalFoundings={loggedUsersAids.pendingAidsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</>
	);
}

export default LoggedUsersPendingAids;
