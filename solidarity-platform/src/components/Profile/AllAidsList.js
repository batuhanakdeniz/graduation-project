import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllAids } from "../../redux";
import UserListItem from "./UserListItem";
import aidData from "../aidData";
import PendingAid from "./PendingAid";
function AllAidsList() {
	//const allAids = useSelector((state) => state.allAids);
	const dispatch = useDispatch();
	const allAids = {
		loading: false,
		allAidsList: aidData,
		error: "",
	};
	useEffect(() => {
		dispatch(fetchAllAids());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return allAids.loading ? (
		<h1>Loading!!!</h1>
	) : allAids.error ? (
		<h1>{allAids.error}</h1>
	) : (
		<div className="allUsersContainer">
			<Row md={1}>allAids</Row>
		</div>
	);
}

export default AllAidsList;
