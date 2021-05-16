import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import React from "react";

export function UploadError(props) {
	return (
		<React.Fragment>
			<div style={props.thumbStyle} key={props.name}>
				<div style={props.thumbInner}>
					{props.errors.map((error) => (
						<div key={error.code}>
							<Text color="red">{error.message}</Text>
						</div>
					))}
				</div>
				<div style={props.deleteButton}>
					<Button
						colorScheme="teal"
						variant="link"
						size="md"
						mb="0.2rem"
						onClick={() => props.onDelete(props.file)}
					>
						X
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
}
