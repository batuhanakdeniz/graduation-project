import React from "react";
import { Field } from "formik";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Checkbox,
	CheckboxGroup,
	Stack,
} from "@chakra-ui/react";
import { Col, Row } from "react-bootstrap";

function ChakraCheckbox(props) {
	const { label, name, options, ...rest } = props;
	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<FormControl isInvalid={form.errors[name] && form.touched[name]}>
						<FormLabel htmlFor={name}>{label}</FormLabel>
						<CheckboxGroup id={name} {...rest}>
							<Stack spacing={10} direction="row">
								<Row md={2} xs={1}>
									{options.map((option) => {
										return (
											<Col>
												<Checkbox
													style={{ marginRight: "0.5rem" }}
													id={option.value}
													key={option.value}
													{...field}
													value={option.value}
													colorScheme={option.color}
												>
													{option.key}
												</Checkbox>
											</Col>
										);
									})}
								</Row>
							</Stack>
						</CheckboxGroup>
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
}

export default ChakraCheckbox;
