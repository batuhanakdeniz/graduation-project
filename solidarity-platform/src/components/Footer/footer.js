import React from "react";
import "./Footer.scss";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { background, Text } from "@chakra-ui/react";
const Container = styled.div`
	padding: 30px 60px;
	background: linear-gradient(
		268.54deg,
		#77a066 0.55%,
		rgba(69, 147, 86, 0.743636) 100%
	);
	box-shadow: inset 0px 0px 109px 18px rgba(0, 0, 0, 0.25);
	justify-content: center;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`;
const MyRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	p {
		text-align: ${(props) => props.textAlign || ""};
	}
	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 10px;
	}
`;
const MyColumn = styled.div`
	text-align: center;
	display: flex;
	flex-direction: row;
	* {
		margin: 1rem;
	}
	max-width: 600px;
	margin: 0 auto;
`;
const Title = styled.p`
	color: #255249;
	max-width: 200px;
	text-align: center;
	font-size: x-large;
	margin-bottom: 1rem;
`;

const Link = styled.a`
	color: rgb(15, 89, 57);
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	max-width: 200px;
	&:hover {
		color: rgb(0, 153, 255);
		transition: 200ms ease-in;
		text-decoration: none;
	}
`;

const MyIcons = styled.i`
	margin-right: 12px;
	font-size: 20px;
`;
const CopyRightSection = styled.div`
	color: whitesmoke;
	text-align: center;
	padding: 0.5rem;
	background: linear-gradient(#6d6e6e 10%, #4c4d4d 30%, #252626 100%);
`;

function footer() {
	return (
		<>
			<Container>
				<Wrapper>
					<MyColumn>
						<Title>Social</Title>
					</MyColumn>
					<MyColumn>
						<Link href="#">
							<MyIcons className="fab fa-youtube" />
							Youtube
						</Link>
						<Link href="#">
							<MyIcons className="fab fa-twitter" />
							Twitter
						</Link>
						<Link href="#">
							{" "}
							<MyIcons className="fab fa-facebook" />
							Facebook
						</Link>
					</MyColumn>
				</Wrapper>
			</Container>
			<CopyRightSection>
				<Text>© Social Aid and Solidarity Platform</Text>
			</CopyRightSection>
		</>
	);
}

export default footer;
