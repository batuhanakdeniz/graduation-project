import React from 'react'
import styled from 'styled-components'


const MyContainer = styled.div`
    margin: 5rem 5rem 5rem 50rem;
    padding-top: 10rem;
    font-size: xx-large;
    @media (max-width: 780px){
        margin: 0;
        padding: 0; 
    }
`
function ProfilePage() {
    return (
        <MyContainer>
            <h1>ProfilePage</h1>
        </MyContainer>
    )
}

export default ProfilePage;