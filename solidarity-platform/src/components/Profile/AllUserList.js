import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../../redux";
import UserListItem from "./UserListItem";

function AllUserList() {
	//const allUsers = useSelector((state) => state.allUsers);
	const dispatch = useDispatch();
	const allUsers = {
		loading: false,
		allUsersList: [
			{
				id: 1,
				userName: "auster07",
				firstName: "sefa",
				userType: "Admin",
				lastName: "aydogan",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				id: 2,
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				userType: "Admin",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				id: 3,
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				userType: "Confirmed",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				id: 4,
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				userType: "Confirmed",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				id: 5,
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				userType: "Unconfirmed",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
			{
				id: 6,
				userName: "auster08",
				firstName: "sefa",
				lastName: "aydogan",
				userType: "Cooperate",
				email: "aydogan@itu.edu.tr",
				ppImage: "https://picsum.photos/200",
			},
		],
		error: "",
	};
	useEffect(() => {
		dispatch(fetchAllUsers());
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return allUsers.loading ? (
		<h1>Loading!!!</h1>
	) : allUsers.error ? (
		<h1>{allUsers.error}</h1>
	) : (
		<div className="allUsersContainer">
			<Row md={1}>
				{allUsers.allUsersList.map((user, idx) => (
					<UserListItem key={idx} user={user} />
				))}
			</Row>
		</div>
	);
}

export default AllUserList;
