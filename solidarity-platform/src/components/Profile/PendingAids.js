import React, { useEffect } from "react";
import { CardDeck, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchPendingAids } from "../../redux";
import PendingAid from "./PendingAid";
import aidData from "../aidData";
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
	return pendingAids.loading ? (
		<h1>Loaading</h1>
	) : pendingAids.error ? (
		<h1>{pendingAids.error}</h1>
	) : (
		<div className="pendingAids">
			<CardDeck>
				<Row md={3}>
					{pendingAids.pendingAidsList.map((aid, idx) => (
						<PendingAid key={idx} aid={aid} />
					))}
				</Row>
			</CardDeck>
		</div>
	);
}

export default PendingAids;
