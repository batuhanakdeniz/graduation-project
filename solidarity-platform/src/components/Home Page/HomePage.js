import React from 'react'
import styled from 'styled-components'

const MyContainer = styled.div`
    margin: 5rem 5rem 5rem 50rem;
    padding-top: 10rem;
    font-size: xx-large;
    background-color: #ffffff;
    @media (max-width: 780px){
        margin: 0;
        padding: 0; 
    }
`
function HomePage() {
    return (
        <MyContainer>
            <h1>Home Page</h1>
        </MyContainer>
    )
}

export default HomePage
