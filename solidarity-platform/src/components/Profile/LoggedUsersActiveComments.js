import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedUsersActiveComments } from "../../redux";
import CommentItem from "./CommentItem";
import PaginatationComponent from "./PaginatationComponent";

function LoggedUsersActiveComments() {
	const loggedUsersComments = useSelector((state) => state.loggedUsersComments);
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLoggedUsersActiveComments());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		loggedUsersComments &&
			loggedUsersComments.activeCommentsList &&
			loggedUsersComments.activeCommentsList.slice(
				indexOfFirstPost,
				indexOfLastPost
			)
	);
	useEffect(() => {
		setCurrentPosts(
			loggedUsersComments &&
				loggedUsersComments.activeCommentsList &&
				loggedUsersComments.activeCommentsList.slice(
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
							loggedUsersComments.activeCommentsList &&
							loggedUsersComments.activeCommentsList.length
						}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default LoggedUsersActiveComments;
