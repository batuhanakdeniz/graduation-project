import React from "react";
import { Field } from "formik";
import {
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from "@chakra-ui/react";

function ChakraSelect(props) {
	const { label, name, onChange, options, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<FormControl
						onChange={onChange}
						isInvalid={form.errors[name] && form.touched[name]}
					>
						<FormLabel htmlFor={name}>{label}</FormLabel>
						<Select id={name} {...rest} {...field}>
							{options.map((option) => {
								return (
									<option
										id={option.value}
										key={option.value}
										value={option.value}
									>
										{option.key}
									</option>
								);
							})}
						</Select>
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
}

export default ChakraSelect;
