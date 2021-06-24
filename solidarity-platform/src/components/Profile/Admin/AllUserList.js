import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../redux";
import UserListItem from "./UserListItem";

import PaginatationComponent from "../PaginatationComponent";
function AllUserList() {
	const allUsers = useSelector((state) => state.allUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllUsers());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		allUsers.allUsersList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			allUsers.allUsersList.slice(indexOfFirstPost, indexOfLastPost)
		);
		// eslint-disable-next-line
	}, [allUsers, currentPage]);

	return allUsers.loading ? (
		<h1>Loading!!!</h1>
	) : allUsers.error ? (
		<h1>{allUsers.error}</h1>
	) : (
		<div className="allUsersContainer">
			<Row md={1}>
				{currentPosts.map((user, idx) => (
					<UserListItem key={idx} user={user} />
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
						totalFoundings={allUsers.allUsersList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default AllUserList;
