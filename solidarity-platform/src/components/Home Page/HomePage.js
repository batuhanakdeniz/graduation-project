import React from "react";
import { Row, Col } from "react-bootstrap";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import İllisturation1 from "./undraw_map_1r69.svg";
import İllisturation2 from "./undraw_Location_tracking_re_n3ok.svg";
import İllisturation3 from "./undraw_Map_dark_re_36sy.svg";
import "./HomePage.scss";

function HomePage() {
	return (
		<div className="myHomePage">
			<div className="myRow1">
				<Row>
					<Col md={7}>
						<Row>
							<Col md={12}>
								<Heading>
									Meeting scheduling{" "}
									<Text as={"span"} color={"green.400"}>
										made easy
									</Text>
								</Heading>
							</Col>
							<Col md={12}>
								<Text color={"gray.500"} maxW={"3xl"}>
									Never miss a meeting. Never be late for one too. Keep track of
									your meetings and receive smart reminders in appropriate
									times. Read your smart “Daily Agenda” every morning.
								</Text>
							</Col>
							<Col md={12}>
								<Button
									rounded={"full"}
									px={6}
									colorScheme={"green"}
									bg={"green.400"}
									_hover={{ bg: "green.500" }}
								>
									Get started
								</Button>
								<Button rounded={"full"} px={6}>
									Learn more
								</Button>
							</Col>
						</Row>
					</Col>
					<Col md={5}>
						<Box boxSize="xl">
							<Image src={İllisturation1} alt="Login Page" />
						</Box>
					</Col>
				</Row>
			</div>
			<hr />
			<div className="myRow">
				<Row>
					<Col md={6}>
						<Box boxSize="xl">
							<Image src={İllisturation2} alt="Login Page" />
						</Box>
					</Col>
					<Col md={6}>
						<Row>
							<Col md={12}>
								<Heading>
									Meeting scheduling{" "}
									<Text as={"span"} color={"green.400"}>
										made easy
									</Text>
								</Heading>
							</Col>
							<Col md={12}>
								<Text color={"gray.500"} maxW={"3xl"}>
									Never miss a meeting. Never be late for one too. Keep track of
									your meetings and receive smart reminders in appropriate
									times. Read your smart “Daily Agenda” every morning.
								</Text>
							</Col>
							<Col md={12}>
								<Button
									rounded={"full"}
									px={6}
									colorScheme={"green"}
									bg={"green.400"}
									_hover={{ bg: "green.500" }}
								>
									Get started
								</Button>
								<Button rounded={"full"} px={6}>
									Learn more
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
			<hr />
			<div className="myRow">
				<Row>
					<Col md={6}>
						<Row>
							<Col md={12}>
								<Heading>
									Meeting scheduling{" "}
									<Text as={"span"} color={"green.400"}>
										made easy
									</Text>
								</Heading>
							</Col>
							<Col md={12}>
								<Text color={"gray.500"} maxW={"3xl"}>
									Never miss a meeting. Never be late for one too. Keep track of
									your meetings and receive smart reminders in appropriate
									times. Read your smart “Daily Agenda” every morning.
								</Text>
							</Col>
							<Col md={12}>
								<Button
									rounded={"full"}
									px={6}
									colorScheme={"green"}
									bg={"green.400"}
									_hover={{ bg: "green.500" }}
								>
									Get started
								</Button>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Box boxSize="xl">
							<Image src={İllisturation3} alt="Login Page" />
						</Box>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default HomePage;
