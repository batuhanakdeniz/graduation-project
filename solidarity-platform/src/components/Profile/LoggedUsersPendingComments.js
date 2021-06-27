import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedUsersPendingComments } from "../../redux";
import CommentItem from "./CommentItem";
import PaginatationComponent from "./PaginatationComponent";

function LoggedUsersPendingComments() {
	const loggedUsersComments = useSelector((state) => state.loggedUsersComments);
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLoggedUsersPendingComments());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		loggedUsersComments &&
			loggedUsersComments.pendingCommentsList &&
			loggedUsersComments.pendingCommentsList.slice(
				indexOfFirstPost,
				indexOfLastPost
			)
	);
	useEffect(() => {
		setCurrentPosts(
			loggedUsersComments &&
				loggedUsersComments.pendingCommentsList &&
				loggedUsersComments.pendingCommentsList.slice(
					indexOfFirstPost,
					indexOfLastPost
				)
		);
		// eslint-disable-next-line
	}, [loggedUsersComments, currentPage]);

	return loggedUsersComments.loading ? (
		<h1>Loaading</h1>
	) : loggedUsersComments.error ? (
		<h1>{loggedUsersComments.error}</h1>
	) : (
		<div className="pendingComments">
			<Row md={2}>
				{currentPosts &&
					currentPosts.map((Comment, idx) => (
						<CommentItem
							key={idx}
							Comment={Comment}
							userName={loggedUserData.userName}
						/>
					))}
				{console.log("currentPosts", currentPosts)}
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
						totalFoundings={
							loggedUsersComments.pendingCommentsList &&
							loggedUsersComments.pendingCommentsList.length
						}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default LoggedUsersPendingComments;
