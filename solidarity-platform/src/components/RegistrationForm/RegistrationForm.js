import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import FormikControl from "../FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";
import axios from "axios";

function RegistrationForm() {
	const [message, setMessage] = useState("");
	const [successful, setSuccessful] = useState(false);

	const dropdownOptions = [
		{ key: "Onaylanmamış Üye", value: "Unconfirmed" },
		{ key: "Onaylanmış Üye", value: "Confirmed" },
		{ key: "Yönetici Üye", value: "Admin" },
		{ key: "Kuruma bağlı Üye", value: "Corporate" },
	];

	const initialValues = {
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		registrationType: "",
		password: "",
		confirmPassword: "",
		phone: "",
	};

	const PhoneRegex =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?[ -]?(\(?\d{2}\)?)?$/;

	const validationSchema = Yup.object({
		registrationType: Yup.string().required("Required"),
		userName: Yup.string().required("Required"),
		email: Yup.string().email("Invalid Email Format").required("Required"),
		password: Yup.string()
			.required("Please Enter your password")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
			),
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), ""], "Passwords must match")
			.required("Required"),
		phone: Yup.string().matches(PhoneRegex, "Phone number is not valid"),
	});

	async function onSubmit(values) {
		setMessage("");
		setSuccessful(false);
		try {
			const response = await axios.post(`http://localhost:5000/signup`, values);
			console.log("response", response);
			setMessage(response.data.message);
			setSuccessful(true);
			//dispatch(getLoggedIn());
		} catch (error) {
			const resMessage =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			setMessage(resMessage);
			setSuccessful(false);
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
										placeholder="Birini Seçiniz"
										control="chakraselect"
										label="Lütfen Bir Üye Tipi Seçiniz"
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
										label="Adınız"
										name="firstName"
									/>
								</Col>
								<Col md={6}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="Soyadınız"
										name="lastName"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="Kullanıcı Adınız"
										name="userName"
									/>
								</Col>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="email"
										label=" E-mail"
										name="email"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="password"
										label="Şifre"
										name="password"
									/>
								</Col>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="password"
										label="Lütfen şifrenizi tekrar giriniz"
										name="confirmPassword"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12}>
									<FormikControl
										control="chakrainput"
										type="text"
										label="Telefon Numaranız"
										name="phone"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={12} style={{ textAlign: "center" }}>
									<Button
										variant="solid"
										isLoading={formik.isSubmitting}
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
							{message && (
								<Row style={{ marginTop: "1rem" }}>
									<Col md={12}>
										<div
											className={
												successful
													? "alert alert-success"
													: "alert alert-danger"
											}
											role="alert"
										>
											{message}
										</div>
									</Col>
								</Row>
							)}
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default RegistrationForm;
