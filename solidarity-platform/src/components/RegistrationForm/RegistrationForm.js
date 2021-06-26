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

	const initialValues = {
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
		registrationType: "Unconfirmed",
		password: "",
		confirmPassword: "",
		phone: "",
	};

	const PhoneRegex =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?[ -]?(\(?\d{2}\)?)?$/;

	const validationSchema = Yup.object({
		userName: Yup.string()
			.required("Gerekli Alan!")
			.min(4, "Kullanıcı adınız en az 4 karakter uzunluğunda olmalıdır!")
			.max(30, "Kullanıcı adınız en fazla 30 karakter uzunluğunda olmalıdır!"),

		email: Yup.string()
			.email("Geçersiz Email formatı!")
			.required("Gerekli Alan"),
		password: Yup.string()
			.required("Lütfen geçerli bir şifre giriniz!")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Şifreniz minimum 8 karakterden oluşmalı ve şifreniz en az bir küçük harf, bir büyük harf bir sayı ve bir özel karakter içermelidir!"
			),
		firstName: Yup.string()
			.required("Gerekli Alan!")
			.matches(
				/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/,
				"Lütfen sadece karakter giriniz!"
			)
			.min(2, "Adınız en az 2 karakter uzunluğunda olmalıdır!")
			.max(30, "Adınız en fazla 30 karakter uzunluğunda olmalıdır!"),
		lastName: Yup.string()
			.required("Gerekli Alan!")
			.matches(
				/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/,
				"Lütfen sadece karakter giriniz!"
			)
			.min(2, "Soyadınız en az 2 karakter uzunluğunda olmalıdır!")
			.max(30, "Soyadınız en fazla 30 karakter uzunluğunda olmalıdır!"),
		confirmPassword: Yup.string()
			.oneOf(
				[Yup.ref("password"), ""],
				"Şifreniz eşleşmiyor. Lütfen tekrar deneyiniz!"
			)
			.required("Gerekli Alan"),
		phone: Yup.string().matches(
			PhoneRegex,
			"Lütfen geçerli bir telefon numarası giriniz!"
		),
	});

	async function onSubmit(values) {
		setMessage("");
		console.log("response", values);
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
