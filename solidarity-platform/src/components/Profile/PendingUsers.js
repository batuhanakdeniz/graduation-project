import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchPendingUsers } from "../../redux";
import PendingUser from "./PendingUser";

import PaginatationComponent from "./PaginatationComponent";
function PendingUsers() {
	//const pendingUsers = useSelector((state) => state.pendingUsers);
	const dispatch = useDispatch();
	const pendingUsers = {
		loading: false,
		pendingUsersList: [
			{
				userName: "auster07",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
		],
		error: "",
	};
	useEffect(() => {
		dispatch(fetchPendingUsers());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		pendingUsers.pendingUsersList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			pendingUsers.pendingUsersList.slice(indexOfFirstPost, indexOfLastPost)
		);
		// eslint-disable-next-line
	}, [pendingUsers, currentPage]);

	return pendingUsers.loading ? (
		<h1>pendingUsers</h1>
	) : pendingUsers.error ? (
		<h1>{pendingUsers.error}</h1>
	) : (
		<div className="pendingUsers">
			<Row md={2}>
				{currentPosts.map((user, idx) => (
					<PendingUser key={idx} user={user} />
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
						totalFoundings={pendingUsers.pendingUsersList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default PendingUsers;
