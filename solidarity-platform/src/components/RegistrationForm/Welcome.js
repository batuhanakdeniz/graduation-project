import React, { useEffect, useState } from "react";
import verifyUser from "../services/auth.service";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Text } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Welcome = (props) => {
	const [message, setMessage] = useState("");
	const [successful, setSuccessful] = useState(false);
	useEffect(() => {
		if (props.match.path === "/confirm/:confirmationCode") {
			verifyUser(props.match.params.confirmationCode)
				.then((response) => {
					setMessage(response.message);
					setSuccessful(true);
				})
				.catch((error) => {
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();
					setMessage(resMessage);
					setSuccessful(false);
				});
		}
		// eslint-disable-next-line
	}, []);

	return (
		<Container
			style={{
				height: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				className={successful ? "alert alert-success" : "alert alert-danger"}
				role="alert"
				style={{ height: "70%" }}
			>
				<Row style={{ height: "100%" }}>
					<Col
						md={12}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "2rem",
						}}
					>
						{successful ? (
							<AiOutlineCheckCircle size="20rem" />
						) : (
							<ImCancelCircle size="20rem" />
						)}
					</Col>
					<Col
						md={12}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "2rem",
						}}
					>
						<span
							style={{
								fontSize: "3.6rem",
								fontWeight: "800",
								textAlign: "center",
							}}
						>
							{message}
						</span>
					</Col>

					<Col md={12}>
						{successful ? (
							<Link to={"/login"}>
								<Button colorScheme="green" size="lg" isFullWidth>
									Lütfen Giriş Yapınız!
								</Button>
							</Link>
						) : (
							<Text
								color="red.700"
								fontWeight="700"
								align="center"
								fontSize="4xl"
							>
								Lütfen bilgilerinizi gözden geçirin yada bizimle iletişime
								geçin!
							</Text>
						)}
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Welcome;
