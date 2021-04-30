import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";

function YardimEkle({ match }) {
	const options = [
		{ key: "Email", value: "emailoc" },
		{ key: "Telephone", value: "telephonemoc" },
	];
	const initialValues = {
		langitude: match.params.lng,
		latitude: match.params.lat,
		firstName: "",
		lastName: "",
		email: "",
		registrationType: "",
		password: "",
		confirmPassword: "",
		modeOfContact: "",
		phone: "",
	};
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid Email Format").required("Required"),
		password: Yup.string().required("Required"),
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), ""], "Passwords must match")
			.required("Required"),
		modeOfContact: Yup.string().required("Required"),
		phone: Yup.string().when("modeOfContact", {
			is: "telephonemoc",
			then: Yup.string().required("Required"),
		}),
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const onSubmit = (values) => {
		console.log("form date", values);
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<div className="registrationFrom">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control="chakrainput"
								type="text"
								label="Langitude"
								name="langitude"
								disabled={true}
							/>
							<FormikControl
								control="chakrainput"
								type="text"
								label="Latitude"
								name="latitude"
								disabled={true}
							/>
							<FormikControl
								control="chakrainput"
								type="text"
								label="First Name"
								name="firstName"
							/>
							<FormikControl
								control="chakrainput"
								type="text"
								label="Lastname"
								name="lastName"
							/>
							<FormikControl
								control="chakrainput"
								type="email"
								label=" Email"
								name="email"
							/>
							<FormikControl
								control="chakrainput"
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control="chakrainput"
								type="password"
								label="Confirm Password"
								name="confirmPassword"
							/>
							<FormikControl
								control="chakraradio"
								label="Mode of Contact"
								name="modeOfContact"
								options={options}
							/>
							<FormikControl
								control="chakrainput"
								type="text"
								label="Phone Number"
								name="phone"
							/>
							<Button
								variant="outline"
								isLoading={isSubmitting}
								loadingText="Submitting"
								colorScheme="teal"
								type="submit"
								disabled={!formik.isValid}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default YardimEkle;
