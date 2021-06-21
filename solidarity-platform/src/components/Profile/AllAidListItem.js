import { Button } from "@chakra-ui/button";
import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
function AllAidListItem({ aid }) {
	return (
		<Col className="aidItem">
			<Card border="black">
				<Card.Header className="text-center mb-4">{aid.header}</Card.Header>
				<Row style={{ marginLeft: "0rem", marginRight: "0rem" }}>
					<Col md={5} className="aidImg">
						<Image
							src={"http://localhost:5000/upload/" + aid.img[0].filename}
							alt="aidImage"
							style={{ height: "100%" }}
							fluid
							thumbnail
						/>
					</Col>
					<Col md={7} style={{ paddingLeft: "2rem" }}>
						<Card.Body>
							<Row>
								<Col md={12} className="property">
									<span className="key">Ad : </span>
									<span className="value">{aid.personName}</span>
								</Col>
								<Col md={12} className="property">
									<span className="key">Soyadı : </span>
									<span className="value">{aid.personLastName}</span>
								</Col>
								<Col md={12} className="property">
									<span className="key">Önem Derecesi : </span>
									<span className="value">{aid.emergencyLevel.level}</span>
								</Col>
							</Row>
						</Card.Body>
					</Col>
				</Row>
				<Row style={{ marginTop: "2rem" }}>
					<Col>
						<Card.Footer
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button colorScheme="blackAlpha" ml="1rem">
								<CgDetailsMore />
							</Button>
							<Button colorScheme="warningRed" ml="1rem">
								<FaTrashAlt />
							</Button>
						</Card.Footer>
					</Col>
				</Row>
			</Card>
		</Col>
	);
}

export default AllAidListItem;
