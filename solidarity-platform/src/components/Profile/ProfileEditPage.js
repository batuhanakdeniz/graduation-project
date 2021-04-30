import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedUserData } from "../../redux";
function ProfileEditPage() {

    const loggedUserData = useSelector((state) => state.userData.loggedUserData);
    const dispatch = useDispatch();
	const getUser = () => {
		dispatch(getLoggedUserData());
	};

	useEffect(() => {
		getUser();
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return (
        <div>
            {console.log("loggedUserData",loggedUserData)}

            <h1>{loggedUserData.firstName}</h1>
            <h1>{loggedUserData.lastName}</h1>
            <h1>Edit yapılacak alan</h1>

        </div>
    )
}

export default ProfileEditPage;
