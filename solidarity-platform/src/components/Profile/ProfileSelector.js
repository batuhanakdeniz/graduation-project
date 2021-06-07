import React from "react";
import { useSelector } from "react-redux";
import AdminProfilePage from "./AdminProfilePage";
import ConfirmedUserProfilePage from "./ConfirmedUserProfilePage";

function ProfileSelector() {
	const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
	const memberType = "admin";
	//const memberType = "confirmed";
	return (
		<>
			{isLoggedIn !== undefined && isLoggedIn ? (
				memberType === "admin" ? (
					<AdminProfilePage />
				) : memberType === "confirmed" ? (
					<ConfirmedUserProfilePage />
				) : (
					<h1>Sayfaya Ulaşılamıyor!!!!</h1>
				)
			) : (
				<h1>Sayfaya Ulaşılamıyor!!!!</h1>
			)}
		</>
	);
}

export default ProfileSelector;
