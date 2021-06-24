import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAids } from "../../../redux";

import AllAidListItem from "./AllAidListItem";
import PaginatationComponent from "../PaginatationComponent";
function AllAidsList() {
	const allAids = useSelector((state) => state.allAids);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllAids());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		allAids.allAidsList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			allAids.allAidsList.slice(indexOfFirstPost, indexOfLastPost)
		);
		// eslint-disable-next-line
	}, [allAids, currentPage]);

	return allAids.loading ? (
		<h1>Loading!!!</h1>
	) : allAids.error ? (
		<h1>{allAids.error}</h1>
	) : (
		<>
			<Row md={2} className="allAidsContainer">
				{currentPosts.map((aid, idx) => (
					<AllAidListItem key={idx} aid={aid} />
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
						totalFoundings={allAids.allAidsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</>
	);
}

export default AllAidsList;
