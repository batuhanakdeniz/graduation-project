import React from "react";
import { Button } from "@chakra-ui/react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormComponents/FormikControl";
import axios from "axios";

function ChangeUserTypeModal({ type, show, handleClose }) {
	const dropdownOptions =
		type === "Unconfirmed"
			? [
					{
						key: "Onaylanmış Üye",
						value: "Confirmed",
					},
					{ key: "Yönetici Üye", value: "Admin" },
					{ key: "Kuruma bağlı Üye", value: "Corporate" },
			  ]
			: [
					{ key: "Yönetici Üye", value: "Admin" },
					{ key: "Kuruma bağlı Üye", value: "Corporate" },
			  ];
	const initialValues = {
		userType: "",
	};
	const validationSchema = Yup.object({
		userType: Yup.string().required("Required"),
	});

	const onSubmit = (values) => {
		console.log("Saved Data", JSON.parse(JSON.stringify(values)));
		let formValues = {
			statusUserType: {
				isStatusPending: true,
				applyUserType: values.userType,
			},
		};
		axios
			.put(`http://localhost:5000/api/loggedUser/update`, formValues)
			.then((res) => console.log("sdfasd", res));
		handleClose();
	};
	return (
		<Modal show={show} onHide={handleClose} size="sm">
			<Modal.Header closeButton>
				<Modal.Title>Üyelik Tipi Değişimi</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col md={12}>
						<span style={{ fontWeight: "700" }}>
							Lütfen üyelik tipi seçiniz...
						</span>
					</Col>
					<Col md={12}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{(formik) => (
								<Form>
									<FormikControl
										placeholder="Select User Type"
										control="chakraselect"
										name="userType"
										options={dropdownOptions}
									/>
									<Button
										type="submit"
										colorScheme="green"
										isFullWidth
										disabled={!formik.isValid}
										loadingText="Submitting"
										mt="1rem"
									>
										Başvur
									</Button>
								</Form>
							)}
						</Formik>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Container>
					<Row>
						<Col md={9}></Col>
						<Col md={3} style={{ paddingLeft: "0.5rem", paddingRight: "0rem" }}>
							<Button colorScheme="warningRed" onClick={handleClose}>
								Kapat
							</Button>
						</Col>
					</Row>
				</Container>
			</Modal.Footer>
		</Modal>
	);
}

export default ChangeUserTypeModal;
