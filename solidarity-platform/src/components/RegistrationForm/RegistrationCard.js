import React from "react";
import {useDispatch} from "react-redux";
import { Col, Row } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {setRegistrationType} from "../../redux"

function RegistrationCard({ typeInfo }) {
	const dispatch = useDispatch()
	const typeSelectorHandler = () => {
		dispatch(setRegistrationType(typeInfo.membershipType))
	};
	return (
		<div className="registrationCard">
			<h1>{typeInfo.header}</h1>
			<span>{typeInfo.content}</span>
			<Link to={`/signup/form`}>
				{
					// todo linkteki id kalkacak, reduxa type eklenecek
				}
				<Button
					onClick={typeSelectorHandler}
					size="md"
					height="48px"
					width="200px"
					colorScheme="green"
				>
					Üye Ol
				</Button>
			</Link>
		</div>
	);
}

export default RegistrationCard;
