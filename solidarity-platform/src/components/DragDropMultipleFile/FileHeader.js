import { Button } from "@chakra-ui/button";
import React from "react";

function FileHeader(props) {
	return (
		<div style={props.thumbStyle} key={props.name}>
			<div style={props.thumbInner}>
				<img src={props.preview} style={props.img} alt="" />
			</div>
			<div style={props.deleteButton}>
				<Button
					colorScheme="whiteAlpha"
					variant="link"
					size="md"
					mb="0.2rem"
					onClick={() => props.onDelete(props.file)}
				>
					X
				</Button>
			</div>
		</div>
	);
}

export default FileHeader;
