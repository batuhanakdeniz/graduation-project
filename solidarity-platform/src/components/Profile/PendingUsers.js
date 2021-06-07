import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchPendingUsers } from "../../redux";
import PendingUser from "./PendingUser";
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
		],
		error: "",
	};
	useEffect(() => {
		dispatch(fetchPendingUsers());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return pendingUsers.loading ? (
		<h1>pendingUsers</h1>
	) : pendingUsers.error ? (
		<h1>{pendingUsers.error}</h1>
	) : (
		<div className="pendingUsers">
			<Row md={2}>
				{pendingUsers.pendingUsersList.map((user, idx) => (
					<PendingUser key={idx} user={user} />
				))}
			</Row>
		</div>
	);
}

export default PendingUsers;
