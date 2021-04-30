import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfilePage({ match }) {
	const [userInfo, setUserInfo] = useState([]);
	const getUser = async () => {
		await axios
			.get(`http://localhost:5000/profile/1`)
			.then((res) => {
				const loggedInRes = res;
				setUserInfo(loggedInRes.data);
				console.log("profil data : ", res);
			})
			.catch((err) => console.log(err));

		console.log("sefaasdasdasd");
	};

	useEffect(() => {
		getUser();
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>{userInfo.firstName}</h1>
			<h1>{userInfo.lastName}</h1>
		</div>
	);
}

export default ProfilePage;
