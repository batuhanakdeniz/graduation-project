import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RegistrationCard from "./RegistrationCard";
import "./RegistrationTypes.scss";

import typesData from "./typesData";
function RegistrationTypesPage() {
	return (
		<Container fluid>
			<div className="typesContainer">
				<Row className="justify-content-center" xs={1} sm={1} md={2} xl={4}>
					{typesData.map((typeInfo) => (
						<Col>
							<RegistrationCard typeInfo={typeInfo} />
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
}

export default RegistrationTypesPage;

/*
<Link to={`/signup/${4}`}>
										<Button variant="outline-success" type="submit">
											Üye Ol
										</Button>
									</Link>
                                    */
