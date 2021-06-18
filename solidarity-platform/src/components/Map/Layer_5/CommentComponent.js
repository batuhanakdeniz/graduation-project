import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { Row, Col, ListGroupItem, ListGroup } from "react-bootstrap";
import { Feed, Icon } from "semantic-ui-react";
import AddComment from "../Layer_6/AddComment";

function CommentComponent({ Comments, aidID }) {
	const [displayAddComment, setDisplayAddComment] = useState(false);
	return (
		<Row style={{ padding: "1rem", marginTop: "1rem" }}>
			<Col
				md={12}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: "1rem",
				}}
			>
				<span style={{ fontSize: "1.8rem", fontWeight: "800" }}>Yorumlar</span>
			</Col>
			<Col md={12}>
				<Feed>
					{Comments.map((comment, index) => (
						<Feed.Event key={index} id="commentEvent">
							<Feed.Label>
								<img src={comment.image} alt="" />
							</Feed.Label>
							<Feed.Content>
								<Feed.Summary>
									<Feed.User>{comment.summary}</Feed.User>
									<Feed.Date>{comment.date}</Feed.Date>
								</Feed.Summary>
								{comment.extraImages ? (
									<Feed.Extra images>
										{comment.extraImages.map((extraImg) => (
											<img src={extraImg} alt="" />
										))}
									</Feed.Extra>
								) : null}
								{comment.extraText ? (
									<Feed.Extra text>{comment.extraText}</Feed.Extra>
								) : null}
								<Feed.Meta>
									<Feed.Like>
										<Icon name="like" />
										{comment.meta}
									</Feed.Like>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>
					))}
				</Feed>
				{/* <Feed className="commentFeed" events={Comments} /> */}
			</Col>
			<Col md={12}>
				{!displayAddComment ? (
					<Button
						onClick={() => setDisplayAddComment(!displayAddComment)}
						colorScheme="teal"
						size="lg"
						isFullWidth
						_hover={{ background: "teal.700" }}
					>
						Yorum Ekle
					</Button>
				) : (
					<AddComment
						setDisplayAddComment={setDisplayAddComment}
						displayAddComment={displayAddComment}
						aidID={aidID}
					/>
				)}
			</Col>
		</Row>
	);
}

export default CommentComponent;
