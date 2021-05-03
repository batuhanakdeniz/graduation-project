import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationCard from "./RegistrationCard";
import RegistrationForm from "./RegistrationForm";
import "./RegistrationTypes.scss";

import typesData from "./typesData";
function RegistrationTypesPage() {
	return (
		<Container fluid>
			<div className="registrationContainer">
				<Row>
					<Col md={8}>
						<Row
							style={{ height: "100%" }}
							className="justify-content-center noMargin"
							xs={1}
							sm={1}
							md={2}
							xl={2}
						>
							{typesData.map((typeInfo) => (
								<Col className="noPadding">
									<RegistrationCard typeInfo={typeInfo} />
								</Col>
							))}
						</Row>
					</Col>
					<Col md={4}>
						<RegistrationForm />
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default RegistrationTypesPage;
