import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../FormComponents/FormikControl";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import "../mapStyle.scss";
import axios from "axios";

function AddAidModal({
	onClose,
	isOpen,
	isSuccesfullySubmitted,
	setIsSuccesfullySubmitted,
}) {
	const position = useSelector((state) => state.addAidLocation);

	const initialValues = {
		langitude: position.lng,
		latitude: position.lat,
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
		detail: "",
	};
	const [file, setFile] = useState();
	const validationSchema = Yup.object({
		langitude: Yup.string().required("Required"),
		latitude: Yup.string().required("Required"),
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		phone: Yup.string().required("Required"),
		address: Yup.string().required("Required"),
		detail: Yup.string().required("Required"),
	});

	async function onSubmit(values) {
		const data = new FormData();
		data.append("langitude", values.langitude);
		data.append("latitude", values.latitude);
		data.append("firstName", values.firstName);
		data.append("lastName", values.lastName);
		data.append("phone", values.phone);
		data.append("address", values.address);
		data.append("detail", values.detail);
		data.append("file", file);
		try {
			//await axios.post("http://localhost:5000/map/api/helps/details/upload/image", values);
			//console.log("Yardım Ekle Object", data);
			axios
				.post("http://localhost:5000/map/api/helps/details/upload/image", data)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
			setIsSuccesfullySubmitted(true);
		} catch (data) {
			alert(data.message);
		}
	}
	return (
		<Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Yardım Ekle</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{!isSuccesfullySubmitted ? (
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{(formik) => {
								return (
									<div className="addAidForm">
										<Form>
											<Row>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Langitude"
														name="langitude"
														disabled={true}
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Latitude"
														name="latitude"
														disabled={true}
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
												<Col md={12}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Phone Number"
														name="phone"
													/>
												</Col>
												<Col md={12}>
													<div className="addImageSection">
														<label htmlFor="file">Add an Image</label>
														<input
															type="file"
															label="Add an image"
															id="file"
															accept=".jpg"
															onChange={(event) => {
																const image = event.target.files[0];
																setFile(image);
															}}
														/>
													</div>
												</Col>

												<Col md={12}>
													<FormikControl
														control="chakratextarea"
														label="Address"
														name="address"
													/>
												</Col>
												<Col md={12}>
													<FormikControl
														control="chakratextarea"
														label="Detail"
														name="detail"
													/>
												</Col>
											</Row>
											<Button
												variant="outline"
												loadingText="Submitting"
												colorScheme="teal"
												type="submit"
												disabled={!formik.isValid}
											>
												Yardım Ekle
											</Button>
										</Form>
									</div>
								);
							}}
						</Formik>
					) : (
						<h2> Form is submitted, turn the map </h2>
					)}
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default AddAidModal;
