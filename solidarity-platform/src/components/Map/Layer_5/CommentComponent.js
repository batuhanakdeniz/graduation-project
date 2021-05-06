import { Button } from "@chakra-ui/button";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Feed, Icon } from "semantic-ui-react";
import AddComment from "../Layer_6/AddComment";

function CommentComponent({ Comments, detaildId }) {
	const [displayAddComment, setDisplayAddComment] = useState(false);
	return (
		<Row>
			<Col md={12}>
				<h1>Comments</h1>
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
						ml="3rem"
						mt="0.5rem"
						variant="ghost"
						textColor="blue"
						textDecoration="underline"
						_hover={{ background: "green.700" }}
					>
						Yorum Ekle
					</Button>
				) : (
					<AddComment
						setDisplayAddComment={setDisplayAddComment}
						displayAddComment={displayAddComment}
						detaildId={detaildId}
					/>
				)}
			</Col>
		</Row>
	);
}

export default CommentComponent;
