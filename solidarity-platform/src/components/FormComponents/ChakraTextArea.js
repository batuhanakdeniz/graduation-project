import React from "react";
import { Field } from "formik";
import {
	Textarea,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";

function ChakraTextArea(props) {
	const { label, name, onChange, ...rest } = props;

	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<FormControl
						isInvalid={form.errors[name] && form.touched[name]}
						onChange={onChange}
					>
						<FormLabel htmlFor={name}>{label}</FormLabel>
						<Textarea
							id={name}
							//onChange={handleInputChange}
							{...rest}
							{...field}
						/>
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
}

export default ChakraTextArea;
