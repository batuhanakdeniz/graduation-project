import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import PaginatationComponent from "./PaginatationComponent";
import { fetchLoggedUsersActiveAids } from "../../redux";
import LoggedUsersAidsItem from "./LoggedUsersAidsItem";
function LoggedUsersActiveAids() {
	const loggedUsersAids = useSelector((state) => state.loggedUsersAids);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchLoggedUsersActiveAids());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		loggedUsersAids.activeAidsList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			loggedUsersAids.activeAidsList.slice(indexOfFirstPost, indexOfLastPost)
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
						totalFoundings={loggedUsersAids.activeAidsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</>
	);
}

export default LoggedUsersActiveAids;
