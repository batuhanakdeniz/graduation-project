import React, { useEffect, useState } from "react";

import { Popup } from "react-leaflet";

import { Col, Row, Image } from "react-bootstrap";
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
import DetailModal from "../Layer_4/DetailModal";
import VoteAid from "../Layer_4/VoteAid";
import { Button } from "@chakra-ui/button";
import ReactStars from "react-rating-stars-component";
import { IoHelpBuoy } from "react-icons/io5";

const aidStars = {
	size: 20,
	count: 5,
	color: "black",
	activeColor: "red",
	a11y: true,
	isHalf: true,
	edit: false,
	emptyIcon: <i className="far fa-star" />,
	halfIcon: <i className="fa fa-star-half-alt" />,
	filledIcon: <i className="fa fa-star" />,
	onChange: (newValue) => {
		console.log(`Example 2: new value is ${newValue}`);
	},
};

function AidPopUp({ aidId }) {
	const popupContent = useSelector((state) => state.popupContent);
	const [voteDisplay, setVoteDisplay] = useState(false);
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

	useEffect(() => {
		setVoteDisplay(false);
	}, []);

	return (
		<div>
			<Popup onOpen={popUpHandler} className="request-popup">
				<div className="popupContainer">
					<div className="popupHeader">{popupContent.aidHeader}</div>
					<div className="popupBody">
						<Row>
							<Col md={12} xs={12}>
								<Image
									src={"http://localhost:5000/upload/" + popupContent.aidImgSrc}
									fluid
									rounded
								/>
							</Col>
							<Col md={12} xs={12} className="popupText">
								<Row>
									<Col md={6}>
										<div className="aidInfoHeader">Yardım Numarası: </div>
									</Col>
									<Col md={6}>
										<div className="aidInfoText">{popupContent.aidNo}</div>
									</Col>
									<Col md={6}>
										<div className="aidInfoHeader">İsim: </div>
									</Col>
									<Col md={6}>
										<div className="aidInfoText">{popupContent.aidName}</div>
									</Col>
									<Col md={6}>
										<div className="aidInfoHeader">Soyisim: </div>
									</Col>
									<Col md={6}>
										<div className="aidInfoText">{popupContent.aidSurname}</div>
									</Col>
									<Col md={6}>
										<div className="aidInfoHeader">Yardım Önem Derecesi: </div>
									</Col>
									<Col md={6}>
										<div className="aidInfoText">
											<ReactStars
												{...aidStars}
												value={popupContent.aidEmercenyLevel}
											/>
										</div>
									</Col>
								</Row>
								<br />
								<Row>
									{!voteDisplay ? (
										<Col md={6}>
											<Button
												onClick={() => setVoteDisplay(!voteDisplay)}
												colorScheme="ghost"
												textColor="blue"
												size="sm"
												fontSize="small"
												mb="1rem"
												textDecoration="underline"
												_hover={{ background: "green.700" }}
											>
												Oyla
											</Button>
										</Col>
									) : (
										<VoteAid
											setVoteDisplay={setVoteDisplay}
											voteDisplay={voteDisplay}
											aidID={aidId}
										/>
									)}
								</Row>
							</Col>
						</Row>
						<Row>
							<Col md={4}>
								<Button colorScheme="warningRed" m="0px">
									Rapor Et
								</Button>
							</Col>
							<Col md={4}>
								<Button
									onClick={() => {
										handleModalClick();
										detailModalHandler();
									}}
									colorScheme="teal"
								>
									Detayları Gör
								</Button>
								<DetailModal onClose={onClose} isOpen={isOpen} />
							</Col>
							<Col md={4}>
								<Link to={`/detail/${popupContent.aidId}`}>
									<Button colorScheme="twitter">Yardım Et</Button>
								</Link>
							</Col>
						</Row>
					</div>
				</div>
			</Popup>
		</div>
	);
}

export default AidPopUp;
