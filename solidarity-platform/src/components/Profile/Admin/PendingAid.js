import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useDispatch } from "react-redux";
import {
	confirmPendingAidByID,
	deletePendingAidByID,
	fetchCategoryType,
	fetchDetailContent,
	fetchPendingAids,
	fetchSubcategoryType,
} from "../../../redux";
import { useDisclosure } from "@chakra-ui/react";
import DetailModal from "../../Map/Layer_4/DetailModal";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import labels from "../../Map/Layer_3/labels";
const useStyles = makeStyles({
	root: {
		marginTop: "0.2rem",
		display: "flex",
		alignItems: "center",
	},
});
function PendingAid(props) {
	const { aid } = props;
	const dispatch = useDispatch();
	const aidDetailButtonHandler = () => {
		onOpen();
		dispatch(fetchDetailContent(aid._id));
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const confirmAidHandler = () => {
		dispatch(confirmPendingAidByID(aid._id));
	};
	const deleteAidHandler = () => {
		dispatch(deletePendingAidByID(aid._id));
	};

	const classes = useStyles();
	const [images, setImages] = useState([]);
	const [category, setCategory] = useState("");
	const [subcategory, setSubcategory] = useState("");
	useEffect(() => {
		setImages([]);
		aid.img.map((img) =>
			setImages((curr) => [
				...curr,
				{
					original: `http://localhost:5000/upload/${img.filename}`,
					thumbnail: `http://localhost:5000/upload/${img.filename}`,
				},
			])
		);
		dispatch(fetchCategoryType(aid.typeofhelp.category))
			.then((response) => setCategory(response))
			.catch((err) => console.log(err));
		dispatch(fetchSubcategoryType(aid.typeofhelp.subcategory))
			.then((response) => setSubcategory(response))
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [aid]);
	return (
		<Col className="aidItem">
			<Card style={{ height: "100%" }}>
				<Row>
					<Col md={12} className="cardImage">
						<ImageGallery items={images} />
					</Col>
				</Row>
				<Card.Body className="mt-0">
					<Card.Title className="mb-0 mt-0">{aid.header}</Card.Title>
				</Card.Body>
				<Card.Subtitle className="ml-4 mb-2 text-muted">
					<strong>Önem Derecesi</strong>
					{aid.emergencyLevel && aid ? (
						<div className={classes.root}>
							<Row
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Col md={6}>
									<Rating
										name="hover-feedback"
										value={aid.emergencyLevel.level}
										precision={0.5}
										readOnly
									/>
								</Col>
								<Col md={2}></Col>
								<Col
									md={4}
									style={labels[Math.round(aid.emergencyLevel.level)].style}
								>
									{labels[Math.round(aid.emergencyLevel.level)].value}
								</Col>
							</Row>
						</div>
					) : null}
				</Card.Subtitle>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<strong>Yardım Statüsü : </strong>
						<span>Onay Bekliyor</span>
					</ListGroupItem>
					<ListGroupItem>
						<strong>Yardım Eden Kişi/Kişiler: </strong>
						<span>Yardım eden kimse yok</span>
					</ListGroupItem>
					<ListGroupItem>
						<strong>Ad : </strong>
						<span>{aid.personName}</span>
					</ListGroupItem>
					<ListGroupItem>
						<strong>Soyadı : </strong>
						<span>{aid.personLastName}</span>
					</ListGroupItem>
					<ListGroupItem>
						<strong>Yardım Kategorileri : </strong>
						<span>
							{category} - {subcategory}
						</span>
					</ListGroupItem>
				</ListGroup>

				<Card.Footer
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button
						colorScheme="teal"
						ml="1rem"
						onClick={() => confirmAidHandler()}
					>
						<GiCheckMark />
					</Button>

					<Button
						colorScheme="blackAlpha"
						ml="1rem"
						onClick={() => aidDetailButtonHandler()}
					>
						<CgDetailsMore />
						<DetailModal onClose={onClose} isOpen={isOpen} />
					</Button>
					<Button
						colorScheme="warningRed"
						ml="1rem"
						onClick={() => deleteAidHandler()}
					>
						<FaTrashAlt />
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default PendingAid;
