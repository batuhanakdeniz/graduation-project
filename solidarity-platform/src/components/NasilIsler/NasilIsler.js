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
function NasilIsler() {
    return (
        <MyContainer>
            Nasıl İşler
        </MyContainer>
    )
}

export default NasilIsler
