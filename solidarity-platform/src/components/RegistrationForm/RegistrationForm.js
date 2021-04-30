import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormComponents/FormikControl";
import { Button } from "@chakra-ui/react";
import "./Registration.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getLoggedIn } from "../../redux";
function RegistrationForm() {
	const history = useHistory();
	const dispatch = useDispatch();
	const registrationType = useSelector(state => state.registrationType.type);

	const options = [
		{ key: "Email", value: "emailoc" },
		{ key: "Telephone", value: "telephonemoc" },
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
	const dropdownOptions = [
		{ key: `Option ${registrationType}`, value: registrationType },
	];
	const [isSubmitting, setIsSubmitting] = useState(false);
	async function onSubmit(values) {
		try {
			setIsSubmitting(true);

			await axios.post(
				`http://localhost:5000/signup/${registrationType}`,
				values
			);
			dispatch(getLoggedIn());
			history.push("/");
		} catch (values) {
			alert(values.message);
		}
	}
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
								control="chakraselect"
								type="text"
								label="Registration Type"
								name="selectOption"
								options={dropdownOptions}
								disabled={true}
							/>
							<FormikControl
								control="chakrainput"
								type="text"
								label="User Name"
								name="userName"
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

export default RegistrationForm;
