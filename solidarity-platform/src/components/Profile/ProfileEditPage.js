import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProfileEditPage() {

    const [userInfo, setUserInfo] = useState([])
    const getUser = async () => {

        const loggedInRes = await axios.get(`http://localhost:5000/api/loggedUser`);
        setUserInfo(loggedInRes.data);
    }

    useEffect(() => {
        getUser();
        // ! Alt satır kalacak silme
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>

            <h1>{userInfo.firstName}</h1>
            <h1>{userInfo.lastName}</h1>
            <h1>Edit yapılacak alan</h1>

        </div>
    )
}

export default ProfileEditPage;
