import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../../FormComponents/FormikControl";
import { Button } from "@chakra-ui/button";
import { GiCheckMark } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

function UserTypeSelector({ user, setUserTypeEditMode }) {
	const dropdownOptions = [
		{ key: "Onaylanmış Üye", value: "Confirmed" },
		{ key: "Onaylanmamış Üye", value: "Unconfirmed" },
		{ key: "Yönetici Üye", value: "Admin" },
		{ key: "Kuruma bağlı Üye", value: "Cooparate" },
	];
	const initialValues = {
		userType: "",
	};
	const validationSchema = Yup.object({
		userType: Yup.string().required("Required"),
	});

	const onSubmit = (values) => {
		console.log("Saved Data", JSON.parse(JSON.stringify(values)));

		axios
			.put(`http://localhost:5000//api/admin/users/status/${user._id}`, values)
			.then((res) => console.log("res", res));
		setUserTypeEditMode(false);
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<Row>
						<Col md={12}>
							<FormikControl
								placeholder="Kullanıcı Tipi Seç"
								control="chakraselect"
								name="userType"
								options={dropdownOptions}
							/>
						</Col>
						<Col
							md={12}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								colorScheme="teal"
								type="submit"
								disabled={!formik.isValid}
								loadingText="Submitting"
								mt="1rem"
								ml="1rem"
							>
								<GiCheckMark />
							</Button>
							<Button
								type="reset"
								colorScheme="warningRed"
								ml="1rem"
								mt="1rem"
								onClick={() => {
									setUserTypeEditMode(false);
								}}
							>
								X
							</Button>
						</Col>
					</Row>
				</Form>
			)}
		</Formik>
	);
}

export default UserTypeSelector;
