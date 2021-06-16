import React, { useEffect, useState } from "react";
import { CardDeck, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchPendingAids } from "../../redux";
import PendingAid from "./PendingAid";
import aidData from "../aidData";
import PaginatationComponent from "./PaginatationComponent";
function PendingAids() {
	//const pendingAids = useSelector((state) => state.pendingAids);
	const dispatch = useDispatch();
	const pendingAids = {
		loading: false,
		pendingAidsList: aidData,
		error: "",
	};
	useEffect(() => {
		dispatch(fetchPendingAids());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const indexOfLastPost = currentPage * itemsPerPage;
	const indexOfFirstPost = indexOfLastPost - itemsPerPage;
	const [currentPosts, setCurrentPosts] = useState(
		pendingAids.pendingAidsList.slice(indexOfFirstPost, indexOfLastPost)
	);
	useEffect(() => {
		setCurrentPosts(
			pendingAids.pendingAidsList.slice(indexOfFirstPost, indexOfLastPost)
		);
		// eslint-disable-next-line
	}, [/* pendingAids, */ currentPage]);

	return pendingAids.loading ? (
		<h1>Loaading</h1>
	) : pendingAids.error ? (
		<h1>{pendingAids.error}</h1>
	) : (
		<div className="pendingAids">
			<CardDeck>
				<Row md={2}>
					{currentPosts.map((aid, idx) => (
						<PendingAid key={idx} aid={aid} />
					))}
				</Row>
			</CardDeck>
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
						totalFoundings={pendingAids.pendingAidsList.length}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default PendingAids;
