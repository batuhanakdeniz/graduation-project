import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProfilePage({ match }) {

    const [userInfo, setUserInfo] = useState([])
    const getUser = async () => {

        const loggedInRes = await axios.get(`http://localhost:5000/profile/${match.params.id}`);
        console.log("profil data : ", loggedInRes);
        setUserInfo(loggedInRes.data);
        console.log("sefaasdasdasd")
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

        </div>
    )
}

export default ProfilePage;
