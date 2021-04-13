import React from 'react'
import './Footer.scss'

import styled from 'styled-components'

const Container = styled.div`
    padding: 30px 60px;
    background : radial-gradient(circle, #8bc34a , #8bc34a);
    justify-content:center;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    max-width : 1000px;
    margin: 0 auto;
`
const MyRow = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    @media (max-width: 1000px){
        grid-template-columns : repeat(auto-fill, minmax(200px,1fr));
        grid-gap : 20px;
    }
`
const MyColumn = styled.div`
    text-align: center;
    display:flex;
    flex-direction : column;
    max-width : 200px;
    margin: 0 auto;

`
const Title = styled.p`
    color: #255249;
    max-width: 200px;
    text-align: center;
    font-size : x-large;
    margin-bottom: 1rem;
`

const Link = styled.a`
    color : rgb(15, 89, 57);
    margin-bottom: 20px;
    font-size : 18px;
    text-decoration: none;
    max-width:200px;
    &:hover {
        color : rgb(0,153,255); 
        transition:200ms ease-in;
        text-decoration:none;
    }
`

const MyIcons = styled.i`
    margin-right : 12px;
    font-size : 20px;
`




function footer() {
    return (
        <Container>
            <Wrapper>
                <MyRow>
                    <MyColumn>
                        <Title>About</Title>
                        <Link href="#">About Us</Link>
                        <Link href="#">xxxx</Link>
                        <Link href="#">yyyy</Link>
                        <Link href="#">zzzz</Link>
                    </MyColumn>
                    <MyColumn>
                        <Title>Services</Title>
                        <Link href="#">aaaa</Link>
                        <Link href="#">bbbb</Link>
                        <Link href="#">cccc</Link>
                        <Link href="#">dddd</Link>
                    </MyColumn>
                    <MyColumn>
                        <Title>Social</Title>
                        <Link href="#"><MyIcons className="fab fa-youtube" />Youtube</Link>
                        <Link href="#"><MyIcons className="fab fa-twitter" />Twitter</Link>
                        <Link href="#"><MyIcons className="fab fa-instagram" />Instagram</Link>
                        <Link href="#"> <MyIcons className="fab fa-facebook" />Facebook</Link>
                    </MyColumn>
                </MyRow>
            </Wrapper>
        </Container>
    )
}

export default footer
