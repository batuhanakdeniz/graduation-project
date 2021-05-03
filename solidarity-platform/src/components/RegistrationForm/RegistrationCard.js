import React from "react";

function RegistrationCard({ typeInfo }) {
	return (
		<div className="registrationCard">
			<h1>{typeInfo.header}</h1>
			<span>{typeInfo.content}</span>
		</div>
	);
}

export default RegistrationCard;
