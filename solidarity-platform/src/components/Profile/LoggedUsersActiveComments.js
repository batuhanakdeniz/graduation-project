import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchLoggedUsersActiveComments } from "../../redux";
import CommentItem from "./CommentItem";
import PaginatationComponent from "./PaginatationComponent";

function LoggedUsersActiveComments() {
	//const loggedUsersComments = useSelector((state) => state.loggedUsersComments);
	const dispatch = useDispatch();
	const loggedUsersComments = {
		loading: false,
		activeCommentsList: [
			{
				userName: "auster07",
				aidID: "1",
				userProfilPicture: "https://picsum.photos/200/200",
				comment:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				images: [
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
				],
			},
			{
				userName: "auster07",
				aidID: "1",
				userProfilPicture: "https://picsum.photos/200/200",
				comment:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				images: [
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
				],
			},
			{
				userName: "auster07",
				aidID: "1",
				userProfilPicture: "https://picsum.photos/200/200",
				comment:
					"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				images: [
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
				],
			},
			{
				userName: "auster07",
				aidID: "1",
				userProfilPicture: "https://picsum.photos/200/200",
				comment:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				images: [
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
				],
			},
			{
				userName: "auster07",
				aidID: "1",
				userProfilPicture: "https://picsum.photos/200/200",
				comment:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				images: [
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
					{
						src: "https://picsum.photos/200/200",
					},
				],
			},
		],
		error: "",
	};
	useEffect(() => {
		//dispatch(fetchLoggedUsersActiveComments());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		loggedUsersComments.activeCommentsList.slice(
			indexOfFirstPost,
			indexOfLastPost
		)
	);
	useEffect(() => {
		setCurrentPosts(
			loggedUsersComments.activeCommentsList.slice(
				indexOfFirstPost,
				indexOfLastPost
			)
		);
		// eslint-disable-next-line
	}, [/* pendingComments, */ currentPage]);

	return loggedUsersComments.loading ? (
		<h1>Loaading</h1>
	) : loggedUsersComments.error ? (
		<h1>{loggedUsersComments.error}</h1>
	) : (
		<div className="pendingComments">
			<Row md={2}>
				{currentPosts.map((Comment, idx) => (
					<CommentItem key={idx} Comment={Comment} />
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
						totalFoundings={loggedUsersComments.activeCommentsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default LoggedUsersActiveComments;
