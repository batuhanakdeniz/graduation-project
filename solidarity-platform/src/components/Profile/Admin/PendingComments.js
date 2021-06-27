import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingComments } from "../../../redux";
import PendingCommentItem from "./PendingCommentItem";
import PaginatationComponent from "../PaginatationComponent";

function PendingComments() {
	const pendingComments = useSelector((state) => state.pendingComments);
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPendingComments());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		pendingComments &&
			pendingComments.pendingCommentsList &&
			pendingComments.pendingCommentsList.slice(
				indexOfFirstPost,
				indexOfLastPost
			)
	);
	useEffect(() => {
		setCurrentPosts(
			pendingComments &&
				pendingComments.pendingCommentsList &&
				pendingComments.pendingCommentsList.slice(
					indexOfFirstPost,
					indexOfLastPost
				)
		);
		// eslint-disable-next-line
	}, [pendingComments, currentPage]);

	return pendingComments.loading ? (
		<h1>Loaading</h1>
	) : pendingComments.error ? (
		<h1>{pendingComments.error}</h1>
	) : (
		<div className="pendingComments">
			<Row md={2}>
				{currentPosts &&
					currentPosts.map((Comment, idx) => (
						<PendingCommentItem
							key={idx}
							Comment={Comment}
							userName={loggedUserData.userName}
						/>
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
						totalFoundings={pendingComments.pendingCommentsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default PendingComments;
