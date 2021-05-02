import React from "react";
import { Card, CardDeck, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import aidData from "../aidData";

function CreatedHelps({ setMapmod }) {
	const thisAidData = {
		aidNo: aidData[0].aidNo,
		person: aidData[0].personName,
		personLastname: aidData[0].personLastName,
		Emergency: aidData[0].emergencyLevel,
		img: aidData[0].img,
		comments: aidData[0].comments,
	};

	return (
		<CardDeck>
			<Row>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</Row>
			<Row>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card border="light">
					<Card.Header>Yardım</Card.Header>
					<ImageGallery items={thisAidData.img} thumbnail />;
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</Row>
		</CardDeck>
	);
}

export default CreatedHelps;
