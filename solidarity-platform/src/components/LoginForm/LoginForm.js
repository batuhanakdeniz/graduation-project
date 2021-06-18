import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";
import "./LoginForm.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import loginSvg from "./login.svg";
import axios from "axios";
//import { getloggedIn } from '../../../../server/controllers/userController'
//import secureLoginSvg from './secure-login.svg'
import { getLoggedIn } from "../../redux";

function LoginForm() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [message, setMessage] = useState("");
	const initialValues = {
		email: "",
		password: "",
	};
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid Format").required("Required"),
		password: Yup.string().required("Required"),
	});

	async function onSubmit(values) {
		setMessage("");
		try {
			await axios.post("http://localhost:5000/login", values);
			dispatch(getLoggedIn());
			history.push("/profile");
		} catch (error) {
			const resMessage =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			setMessage(resMessage);
			console.log(resMessage);
		}
	}

	return (
		<div className="loginPage">
			<Container>
				<div className="loginForm">
					<div className="leftPanel">
						<img src={loginSvg} alt="Login Page" />
					</div>
					<div className="rightPanel">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{(formik) => {
								return (
									<div>
										<div className="loginHeader">
											<h1>Giriş Yap</h1>
										</div>
										<Form>
											<FormikControl
												control="chakrainput"
												type="email"
												label="E-mail"
												name="email"
												placeholder="birisi@example.com"
											/>
											<FormikControl
												control="chakrainput"
												placeholder="*****"
												type="password"
												label="Şifre"
												name="password"
											/>
											<Button
												colorScheme="teal"
												isFullWidth
												type="submit"
												disabled={!formik.isValid}
											>
												Giriş Yap
											</Button>
										</Form>
									</div>
								);
							}}
						</Formik>
						{message && (
							<Row style={{ marginTop: "1rem" }}>
								<Col>
									<div className="alert alert-danger" role="alert">
										{message}
									</div>
								</Col>
							</Row>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}
export default LoginForm;
