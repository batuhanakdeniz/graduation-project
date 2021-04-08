import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const MyContainer = styled.div`
    margin: 5rem 5rem 5rem 50rem;
    padding-top: 10rem;
    font-size: xx-large;
    background-color:red;
    @media (max-width: 780px){
        margin: 0;
        padding: 0; 
    }
`
function ProfilePage({ match }) {

    const [userInfo, setUserInfo] = useState([])
    async function getUser() {

        const loggedInRes = await axios.get(`http://localhost:5000/profile/${match.params.id}`);
        console.log("profil data : ", loggedInRes);
        setUserInfo(loggedInRes);
        console.log("sefaasdasdasd")
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h1>{userInfo.data.firstName}</h1>
            <h1>{userInfo.data.lastName}</h1>
        </div>
    )
}

export default ProfilePage;
