import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import İllisturation1 from "./undraw_map_1r69.svg";
import "./AboutPage.scss";
import BasicStatistics from "./BasicStatistics";

function AboutPage() {
	return (
		<div className="about-page">
			<Container className="about-page-container">
				<Row>
					<Col md={8}>
						<Row>
							<Col md={12}>
								<Heading>
									<BasicStatistics />
								</Heading>
							</Col>
							<Col md={12} className="statictic-buttons">
								<Row>
									<Col md={6}>
										<Link href="/" style={{ textDecoration: "none" }}>
											<Button
												px={6}
												size="md"
												colorScheme={"green"}
												bg={"green.400"}
												_hover={{ bg: "green.500" }}
												isFullWidth
											>
												Yardım eklemek ister misiniz?
											</Button>
										</Link>
									</Col>
									<Col md={6}>
										<Link href="/signup" style={{ textDecoration: "none" }}>
											<Button colorScheme="orange" isFullWidth px={6}>
												Üye değil misiniz?
											</Button>
										</Link>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col md={4} className="about-page-illustration">
						<Image src={İllisturation1} alt="About Page" />
					</Col>
				</Row>
				<Row>
					<Col>
						<Text></Text>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AboutPage;
