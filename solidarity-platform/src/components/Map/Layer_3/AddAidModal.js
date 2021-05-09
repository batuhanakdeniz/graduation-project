import React, { useEffect, useState } from "react";
import {
	Button,
	FormErrorMessage,
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
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import "../mapStyle.scss";
import axios from "axios";

import L from "leaflet";
import { useMapEvents } from "react-leaflet";
import { getLoggedUserData } from "../../../redux";

function AddAidModal({
	onClose,
	isOpen,
	isSuccesfullySubmitted,
	setIsSuccesfullySubmitted,
}) {
	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const properties = useSelector((state) => state.addAidProperties.properties);
	const position = useSelector((state) => state.addAidLocation);

	const dispatch = useDispatch();

	const [province, setProvince] = useState(null);
	const [town, setTown] = useState(null);
	const [address, setAddress] = useState(null);
	const [detailCounter, setDetailCounter] = useState(200);

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
				dispatch(getLoggedUserData());
			}
		} else {
			console.log("Something is wrong");
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
		category: "",
		files: [],
	};
	const PhoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?[ -]?(\(?\d{2}\)?)?$/;

	const validationSchema = Yup.object({
		header: Yup.string()
			.required("Gerekli Alan!")
			.min(2, "Must be more than 2 characters")
			.max(15, "Must be less than 15 characters"),
		langitude: Yup.string().required("Gerekli Alan!"),
		latitude: Yup.string().required("Gerekli Alan!"),
		firstName: Yup.string()
			.required("Gerekli Alan!")
			.matches(/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/, "Must be only characters")
			.min(2, "Must be more than 2 characters")
			.max(15, "Must be less than 15 characters"),
		lastName: Yup.string()
			.required("Gerekli Alan!")
			.matches(/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/, "Must be only characters")
			.min(2, "Must be more than 2 characters")
			.max(15, "Must be less than 15 characters"),
		phone: Yup.string().matches(
			PhoneRegex,
			"Lütfen geçerli bir telefon numarası giriniz!"
		),
		province: Yup.string()
			.required("Gerekli Alan!")
			.matches(/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/, "Must be only characters")
			.min(2, "Must be more than 2 characters")
			.max(15, "Must be less than 15 characters"),
		town: Yup.string()
			.required("Gerekli Alan!")
			.matches(/^[^\d@#.!?|$%^&*()_+\-=[\]]+$/, "Must be only characters")
			.min(2, "Must be more than 2 characters")
			.max(15, "Must be less than 15 characters"),
		address: Yup.string().required("Gerekli Alan!"),
		detail: Yup.string()
			.required("Gerekli Alan!")
			.matches(
				/^[^\d@#!?|$%^&*()_+\-=[\]]+$/,
				"Must be only characters and '.'"
			)
			.trim("Lütfen içeriğin sonundaki gereksiz boşlukları siliniz !")
			.strict(true)
			.min(2, "Must be more than 2 characters")
			.max(200, "Must be less than 15 characters"),
		emergencyLevel: Yup.string().required("Gerekli Alan!"),
		category: Yup.string().required("Gerekli Alan!"),
		//files: Yup.array().required(),
	});

	const emergencyOptions = [
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
	const categoryOptions = [
		{ key: "Bilgisayar", value: "computer" },
		{ key: "Gıda", value: "food" },
		{ key: "Tekstil", value: "clothes" },
		{ key: "Diğer", value: "others" },
	];

	async function onSubmit(values) {
		console.log("logged User Data", loggedUserData.userName);
		if (!loggedUserData.userName) {
			alert("Yardım Ekleyebilmek için giriş yapmalısınız !!");
		} else {
			const data = new FormData();
			data.append("userName", loggedUserData.userName);
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
			data.append("category", values.category);
			data.append("file", values.files);

			try {
				axios
					.post(
						"http://localhost:5000/map/api/helps/details/upload/image",
						data
					)
					.then((res) => console.log("res: ", res))
					.catch((err) => console.log(err));
				setIsSuccesfullySubmitted(true);
			} catch (data) {
				alert(data.message);
			}
		}
	}

	const handleDetailChange = (e) => {
		e.preventDefault();
		setDetailCounter((prev) => (prev = 200 - e.target.value.length));
	};
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
														label="Boylam"
														name="langitude"
														disabled={true}
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Enlem"
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
														label="Yardım başlığı*"
														name="header"
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Adı*"
														name="firstName"
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Soyadı*"
														name="lastName"
													/>
												</Col>
											</Row>
											<Row>
												<Col md={12}>
													<FormikControl
														control="chakrainput"
														type="text"
														label="Telefon Numarası*"
														name="phone"
													/>
												</Col>
												<Col md={12}>
													<div className="addImageSection">
														<label htmlFor="file">Fotoğraf Ekleyin*</label>
														<input
															type="file"
															label="Fotoğraf Ekleyin*"
															id="aidFile"
															multiple
															accept=".jpg"
															onChange={(event) => {
																console.log("images", event.target.values);
																formik.setFieldValue(
																	"files",
																	event.target.files[0]
																);
															}}
														/>
													</div>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakraselect"
														label="Önem Derecesini Seçiniz*"
														placeholder="Önem Derecesini Seçiniz"
														name="emergencyLevel"
														options={emergencyOptions}
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakraselect"
														label="Kategori Seçiniz*"
														placeholder="Kategori Seçiniz"
														name="category"
														options={categoryOptions}
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
														label="Mahalle/Sokak*"
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
														onChange={handleDetailChange}
														control="chakratextarea"
														label="Detay"
														name="detail"
													/>
												</Col>
												<Col md={12} className="align-content-end">
													Kalan Karakter Sayısı : {detailCounter}
												</Col>
											</Row>
											<Button
												loadingText="Submitting"
												colorScheme="teal"
												type="submit"
												isLoading={formik.isSubmitting}
												isFullWidth
												disabled={!formik.isValid || formik.isSubmitting}
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
