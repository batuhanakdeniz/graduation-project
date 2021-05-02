import React from "react";

import { Popup } from "react-leaflet";

import { Button, Col, Row, Image } from "react-bootstrap";
import {
	popupInnerContent,
	popupHead,
	popupButtons,
	popupText,
} from "./PopupStyles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailContent, fetchPopupContent } from "../../../redux";
import { useDisclosure } from "@chakra-ui/hooks";
import DetailModal from "../ThirdLayer/DetailModal";

function AidPopUp({ aidId }) {
	const popupContent = useSelector((state) => state.popupContent);

	const dispatch = useDispatch();

	const popUpHandler = () => {
		dispatch(fetchPopupContent(aidId));
	};
	const detailModalHandler = () => {
		dispatch(fetchDetailContent(aidId));
		console.log("aidID", aidId);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleModalClick = () => {
		onOpen();
	};

	return (
		<div>
			<Popup id={1} onOpen={popUpHandler} className="request-popup">
				<div style={popupInnerContent}>
					<div style={popupHead}>{popupContent.aidHeader}</div>
					<div style={popupText}>
						<Row>
							<Col md={4} xs={12}>
								<Image src="https://picsum.photos/200/300" fluid rounded />
							</Col>
							<Col md={8} xs={12}>
								Aid No: {popupContent.aidNo}
								<br />
								Aid Name: {popupContent.aidName}
								<br />
								Aid LastName: {popupContent.aidSurname}
								<br />
								Aid EmercenyLevel: {popupContent.aidEmercenyLevel}
							</Col>
						</Row>
						<br />
					</div>
					<div style={popupButtons}>
						<Col md={4} xs={12}>
							<Button variant="danger">Rapor Et</Button>
						</Col>
						<Col md={4} xs={12}>
							<Button
								onClick={() => {
									handleModalClick();
									detailModalHandler();
								}}
								key={"full"}
								m={4}
							>
								Detayları Gör
							</Button>
							<DetailModal onClose={onClose} isOpen={isOpen} />
						</Col>
						<Col md={4} xs={12}>
							<Link to={`/detail/${popupContent.aidId}`}>
								<Button variant="outline-primary">Yardım Et</Button>
							</Link>
						</Col>
					</div>
					<br />
				</div>
			</Popup>
		</div>
	);
}

export default AidPopUp;
