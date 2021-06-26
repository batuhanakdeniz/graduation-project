import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { getLoggedUserData } from "../../../redux";
import "./profileEditPage.scss";
import MultipleFileUploadField from "../../DragDropMultipleFile/MultipleFileUploadField";
import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../FormComponents/FormikControl";

function ProfileEditPage() {
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const dispatch = useDispatch();
	const getUser = () => {
		dispatch(getLoggedUserData());
	};

	const [files, setFiles] = useState([]);
	const [errorFiles, setErrorFiles] = useState([]);
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		getUser();
		// ! Alt satır kalacak silme
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [message, setMessage] = useState("");
	const [successful, setSuccessful] = useState(false);

	const initialValues = {
		userName: loggedUserData.userName || "",
		firstName: loggedUserData.firstName || "",
		lastName: loggedUserData.lastName || "",
		email: loggedUserData.email || "",
		registrationType: "Unconfirmed",
		oldpassword: "",
		password: "",
		confirmPassword: "",
		phone: loggedUserData.phone || "",
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
		oldpassword: Yup.string()
			.required("Lütfen geçerli bir şifre giriniz!")
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Şifreniz minimum 8 karakterden oluşmalı ve şifreniz en az bir küçük harf, bir büyük harf bir sayı ve bir özel karakter içermelidir!"
			),
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
			const response = await axios.post(
				`http://localhost:5000/signupp`,
				values
			);
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
	const ppButtonHandler = () => {
		setFiles([]);
	};

	return (
		<div className="edit-page">
			<Container className="edit-page-container">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					enableReinitialize
				>
					{(formik) => {
						return (
							<Form>
								<Row style={{ height: "15rem", marginBottom: "1rem" }}>
									<Col
										md={4}
										style={{
											height: "100%",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										{files && files.length === 0 ? (
											<MultipleFileUploadField
												files={files}
												labelName="Profil Fotoğrafı Seçiniz"
												setFiles={setFiles}
												setErrorFiles={setErrorFiles}
												maxFiles={1}
											/>
										) : (
											<div className="profile-img">
												<Image src={files[0].preview} alt="" />
												<Button
													size="sm"
													colorScheme="red"
													className="profile-img-btn"
													onClick={() => ppButtonHandler()}
												>
													X
												</Button>
											</div>
										)}
									</Col>
									<Col md={6}>
										<Row>
											<Col md={12}>
												{loggedUserData && (
													<Text fontSize="4xl" fontWeight="bold">
														{loggedUserData.firstName +
															" " +
															loggedUserData.lastName}
													</Text>
												)}
											</Col>
											<Col md={12}>
												{loggedUserData && (
													<Text fontSize="2xl">
														{"@" + loggedUserData.userName}
													</Text>
												)}
											</Col>
										</Row>
									</Col>
									<Col md={2}>
										<Row>
											<Col md={12} style={{ marginTop: "0.8rem" }}>
												<strong
													style={{
														backgroundColor: "gray",
														borderRadius: "0.4rem",
														padding: "0.2rem 0.5rem",
														fontSize: "larger",
														color: "white",
														fontWeight: "bolder",
													}}
												>
													{loggedUserData.userType && loggedUserData.userType}
												</strong>
											</Col>
											<Col md={12} style={{ marginTop: "0.3rem" }}>
												{loggedUserData.createdAt ? (
													<strong>Joined {loggedUserData.createdAt}</strong>
												) : (
													<strong>Joined 09 Dec 2017 </strong>
												)}
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<Row>
											<Col md={6}>
												<FormikControl
													control="chakrainput"
													type="text"
													label="Adınız"
													name="firstName"
													mb="1rem"
													borderWidth="0.2rem"
													borderColor="#7a7a7a"
												/>
											</Col>
											<Col md={6}>
												<FormikControl
													control="chakrainput"
													type="text"
													label="Soyadınız"
													name="lastName"
													borderWidth="0.2rem"
													borderColor="#7a7a7a"
												/>
											</Col>
										</Row>
										<Row>
											<Col md={6}>
												<FormikControl
													control="chakrainput"
													type="text"
													label="Kullanıcı Adınız"
													name="userName"
													mb="1rem"
													borderWidth="0.2rem"
													borderColor="#7a7a7a"
												/>
											</Col>
											<Col md={6}>
												<FormikControl
													control="chakrainput"
													type="text"
													label="Telefon Numaranız"
													name="phone"
													mb="1rem"
													borderWidth="0.2rem"
													borderColor="#7a7a7a"
												/>
											</Col>
											<Col md={12}>
												<FormikControl
													control="chakrainput"
													type="email"
													label=" E-mail"
													name="email"
													mb="1rem"
													borderWidth="0.2rem"
													borderColor="#7a7a7a"
												/>
											</Col>
										</Row>
										<Row>
											<Col md={6}>
												<Row>
													<Col md={12}>
														<FormikControl
															control="chakrainput"
															type="password"
															label="Lütfen Eski Şifrenizi Giriniz"
															name="oldpassword"
															mb="1rem"
															borderWidth="0.2rem"
															borderColor="#7a7a7a"
														/>
													</Col>
													<Col md={12}>
														<FormikControl
															control="chakrainput"
															type="password"
															label="Lütfen Yeni Şifrenizi Giriniz"
															name="password"
															mb="1rem"
															borderWidth="0.2rem"
															borderColor="#7a7a7a"
														/>
													</Col>
													<Col md={12}>
														<FormikControl
															control="chakrainput"
															type="password"
															label="Lütfen şifrenizi tekrar giriniz"
															name="confirmPassword"
															borderWidth="0.2rem"
															borderColor="#7a7a7a"
														/>
													</Col>
												</Row>
											</Col>
										</Row>

										<Row>
											<Col md={10} style={{ textAlign: "center" }}>
												<Button
													variant="solid"
													isLoading={formik.isSubmitting}
													loadingText="Submitting"
													colorScheme="green"
													size="lg"
													isFullWidth
													mt="2rem"
													type="submit"
													disabled={!formik.isValid}
												>
													Güncelle
												</Button>
											</Col>
											<Col md={2} style={{ textAlign: "center" }}>
												<Button
													variant="solid"
													colorScheme="warningRed"
													size="lg"
													isFullWidth
													mt="2rem"
													type="reset"
												>
													X
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
									</Col>
								</Row>
							</Form>
						);
					}}
				</Formik>
			</Container>
		</div>
	);
}

export default ProfileEditPage;
/* 

firstName: "Batuhan"
lastName: "Akdeniz"
phone: "0545-832-35-14"
userName: "BatuAkdeniz"
userType: "Admin"


*/
