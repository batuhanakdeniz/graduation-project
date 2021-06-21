import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserData } from "../../redux";
import AdminProfilePage from "./Admin/AdminProfilePage";
import ConfirmedUserProfilePage from "./ConfirmedUser/ConfirmedUserProfilePage";
import UncorfimedUserProfilePage from "./UnconfirmedUser/UncorfimedUserProfilePage";

function ProfileSelector() {
	const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLoggedUserData());
		// eslint-disable-next-line
	}, []);
	return (
		<>
			{isLoggedIn !== undefined && isLoggedIn ? (
				loggedUserData.userType === "Admin" ? (
					<AdminProfilePage />
				) : loggedUserData.userType === "Confirmed" ? (
					<ConfirmedUserProfilePage />
				) : loggedUserData.userType === "Unconfirmed" ? (
					<UncorfimedUserProfilePage />
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
