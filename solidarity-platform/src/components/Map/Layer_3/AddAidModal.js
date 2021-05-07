import React, { useEffect, useState } from "react";
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

import L from "leaflet";
import { useMapEvents } from "react-leaflet";

function AddAidModal({
	onClose,
	isOpen,
	isSuccesfullySubmitted,
	setIsSuccesfullySubmitted,
}) {
	const position = useSelector((state) => state.addAidLocation);

	const [file, setFile] = useState();
	const properties = useSelector((state) => state.addAidProperties.properties);
	const [province, setProvince] = useState(null);
	const [town, setTown] = useState(null);
	const [address, setAddress] = useState(null);

	useEffect(() => {
		if (properties !== []) {
			if (properties.address) {
				setProvince(properties.address.province);
				setTown(properties.address.town);
				setAddress(
					properties.address.neighbourhood
						? properties.address.neighbourhood +
								(properties.address.road ? ", " + properties.address.road : "")
						: ""
				);
			}
		} else {
			console.log("of");
		}
	}, [properties]);

	const initialValues = {
		header: "",
		langitude: position ? position.lng : "",
		latitude: position ? position.lat : "",
		firstName: "",
		lastName: "",
		province: province !== null ? province : "",
		town: town !== null ? town : "",
		address: address !== null ? address : "",
		buildingNo: "",
		floor: "",
		apartmentNo: "",
		phone: "",
		detail: "",
		emergencyLevel: "",
	};
	const PhoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?[ -]?(\(?\d{2}\)?)?$/;
	const validationSchema = Yup.object({
		header: Yup.string().required("Required"),
		langitude: Yup.string().required("Required"),
		latitude: Yup.string().required("Required"),
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		phone: Yup.string().matches(PhoneRegex, "Phone number is not valid"),
		province: Yup.string().required("Required"),
		town: Yup.string().required("Required"),
		address: Yup.string().required("Required"),
		detail: Yup.string().required("Required"),
		emergencyLevel: Yup.string().required("Required"),
	});

	const dropdownOptions = [
		{ key: "1", value: "1" },
		{ key: "2", value: "2" },
		{ key: "3", value: "3" },
		{ key: "4", value: "4" },
		{ key: "5", value: "5" },
		{ key: "6", value: "6" },
		{ key: "7", value: "7" },
		{ key: "8", value: "8" },
		{ key: "9", value: "9" },
		{ key: "10", value: "10" },
	];

	async function onSubmit(values) {
		const data = new FormData();

		data.append("header", values.header);
		data.append("langitude", values.langitude);
		data.append("latitude", values.latitude);
		data.append("firstName", values.firstName);
		data.append("lastName", values.lastName);
		data.append("phone", values.phone);
		data.append("province", values.province);
		data.append("town", values.town);
		data.append("address", values.address);
		data.append("buildingNo", values.buildingNo);
		data.append("floor", values.floor);
		data.append("apartmentNo", values.apartmentNo);
		data.append("detail", values.detail);
		data.append("emergencyLevel", values.emergencyLevel);
		data.append("file", file);

		try {
			axios
				.post("http://localhost:5000/map/api/helps/details/upload/image", data)
				.then((res) => console.log("res: ", res))
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
												<Col md={12}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Yardım başlığı"
														name="header"
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Adı"
														name="firstName"
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Soyadı"
														name="lastName"
													/>
												</Col>
											</Row>
											<Row>
												<Col md={12}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Telefon Numarası"
														name="phone"
													/>
												</Col>
												<Col md={6}>
													<div className="addImageSection">
														<label htmlFor="file">Fotoğraf Ekleyin</label>
														<input
															type="file"
															label="Fotoğraf Ekleyin"
															id="aidFile"
															required
															multiple
															accept=".jpg"
															onChange={(event) => {
																const images = event.target.files[0];
																console.log("images", images);
																setFile(images);
															}}
														/>
													</div>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakraselect"
														label="Önem Derecesini Seçiniz"
														placeholder="Önem Derecesini Seçiniz"
														name="emergencyLevel"
														options={dropdownOptions}
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="İl*"
														name="province"
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="İlçe*"
														name="town"
													/>
												</Col>

												<Col md={12}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Adres*"
														name="address"
													/>
												</Col>
												<Col md={4}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Bina No"
														name="buildingNo"
													/>
												</Col>
												<Col md={4}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Kat"
														name="floor"
													/>
												</Col>
												<Col md={4}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Daire No"
														name="apartmentNo"
													/>
												</Col>
												<Col md={12}>
													<FormikControl
														control="chakratextarea"
														label="Detay"
														name="detail"
													/>
												</Col>
											</Row>
											<Button
												loadingText="Submitting"
												colorScheme="teal"
												type="submit"
												isFullWidth
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
