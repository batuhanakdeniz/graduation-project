import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoHelpBuoy } from "react-icons/io5";
import { Button } from "@chakra-ui/button";
import { Col, Row } from "react-bootstrap";
const aidStars = {
	size: 20,
	count: 5,
	color: "black",
	activeColor: "red",
	a11y: true,
	isHalf: true,
	emptyIcon: <i className="far fa-star" />,
	halfIcon: <i className="fa fa-star-half-alt" />,
	filledIcon: <i className="fa fa-star" />,
	onChange: (newValue) => {
		console.log(`Example 2: new value is ${newValue}`);
	},
};
function VoteAid({ setVoteDisplay, voteDisplay, aidID }) {
	const [rate, setRate] = useState(1);

	const ratingChanged = (newRating) => {
		console.log(newRating);
		setRate(newRating);
	};
	const voteHandler = () => {
		console.log(rate);
		setVoteDisplay(!voteDisplay);
	};
	return (
		<Row style={{ marginLeft: "0.5rem" }}>
			<Col md={12}>
				<ReactStars {...aidStars} />
			</Col>
			<Col md={4}>
				<Button
					onClick={() => voteHandler()}
					variant="ghost"
					textColor="blue"
					textDecoration="underline"
					_hover={{ background: "green.700" }}
				>
					Gönder
				</Button>
			</Col>
			<Col md={4}>
				<Button
					onClick={() => setVoteDisplay(!voteDisplay)}
					variant="ghost"
					textColor="blue"
					textDecoration="underline"
					_hover={{ background: "green.700" }}
				>
					İptal
				</Button>
			</Col>
		</Row>
	);
}

export default VoteAid;
