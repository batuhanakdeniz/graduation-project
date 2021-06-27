import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
	deleteAidByID,
	fetchCategoryType,
	fetchDetailContent,
	fetchSubcategoryType,
} from "../../../redux";
import DetailModal from "../../Map/Layer_4/DetailModal";
import labels from "../../Map/Layer_3/labels";
import ImageGallery from "react-image-gallery";

const useStyles = makeStyles({
	root: {
		marginTop: "0.2rem",
		display: "flex",
		alignItems: "center",
	},
});
function AllAidListItem({ aid }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const detailModalHandler = () => {
		dispatch(fetchDetailContent(aid._id));
		console.log("aidID", aid._id);
	};
	const handleModalClick = () => {
		onOpen();
	};
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
	const deleteAidHandler = () => {
		dispatch(deleteAidByID(aid._id));
	};
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
								<Col md={4} style={labels[aid.emergencyLevel.level].style}>
									{labels[aid.emergencyLevel.level].value}
								</Col>
							</Row>
						</div>
					) : null}
				</Card.Subtitle>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<strong>Yardım Statüsü : </strong>
						<span>
							{aid.status === "Pending"
								? "Onay Bekliyor"
								: aid.status === "Active"
								? "Aktif"
								: null}
						</span>
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
				<ListGroupItem>
					<strong>Adres : </strong>
					<span>{aid.addressFull}</span>
				</ListGroupItem>
				<Card.Body style={{ display: "flex", justifyContent: "center" }}>
					<Card.Link href="#" style={{ margin: "0rem", padding: "0rem" }}>
						<Button
							onClick={() => {
								handleModalClick();
								detailModalHandler();
							}}
							colorScheme="blackAlpha"
						>
							<CgDetailsMore />
						</Button>
						<DetailModal onClose={onClose} isOpen={isOpen} />
					</Card.Link>
					<Card.Link>
						<Button
							onClick={() => {
								deleteAidHandler();
							}}
							colorScheme="warningRed"
							ml="1rem"
						>
							<FaTrashAlt />
						</Button>
					</Card.Link>
				</Card.Body>
				<Card.Footer>
					<strong>{aid.createdAt}</strong> tarihinde <strong>Ahmet</strong>{" "}
					tarafından eklendi
				</Card.Footer>
			</Card>
		</Col>
	);
}

export default AllAidListItem;
