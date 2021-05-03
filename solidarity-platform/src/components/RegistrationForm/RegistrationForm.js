import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import FormikControl from "../FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getLoggedIn } from "../../redux";

function RegistrationForm() {
	const history = useHistory();
	const dispatch = useDispatch();

	const options = [
		{ key: "Email", value: "emailoc" },
		{ key: "Telephone", value: "telephonemoc" },
	];
	const dropdownOptions = [
		{ key: "Onaylanmamış Üye", value: "0" },
		{ key: "Onaylanmış Üye", value: "1" },
		{ key: "Yönetici Üye", value: "2" },
		{ key: "Kuruma bağlı Üye", value: "3" },
	];

	const initialValues = {
		userName: "",
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
		registrationType: Yup.string().required("Required"),
		userName: Yup.string().required("Required"),
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
	async function onSubmit(values) {
		try {
			setIsSubmitting(true);

			await axios.post(
				`http://localhost:5000/signup/${values.registrationType}`,
				values
			);
			dispatch(getLoggedIn());
			history.push("/");
		} catch (values) {
			alert(values.message);
		}
	}
	return (
		<div className="registrationForm">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<Row>
								<Col md={12}>
									<span className="registrationHeader">
										Bize katılmak ister misiniz?
									</span>
								</Col>
								<Col md={12}>
									<FormikControl
										placeholder="Select One"
										control="chakraselect"
										label="Select a Type"
										name="registrationType"
										options={dropdownOptions}
									/>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="First Name"
										name="firstName"
									/>
								</Col>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="Lastname"
										name="lastName"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="User Name"
										name="userName"
									/>
								</Col>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="email"
										label=" Email"
										name="email"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="password"
										label="Password"
										name="password"
									/>
								</Col>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="password"
										label="Confirm Password"
										name="confirmPassword"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12} className="modeOfContact">
									<FormikControl
										control="chakraradio"
										label="Mode of Contact"
										name="modeOfContact"
										options={options}
									/>
								</Col>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="Phone Number"
										name="phone"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12} style={{ textAlign: "center" }}>
									<Button
										variant="solid"
										isLoading={isSubmitting}
										loadingText="Submitting"
										colorScheme="teal"
										size="lg"
										isFullWidth
										mt="1rem"
										type="submit"
										disabled={!formik.isValid}
									>
										Üye Ol
									</Button>
								</Col>
							</Row>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default RegistrationForm;
