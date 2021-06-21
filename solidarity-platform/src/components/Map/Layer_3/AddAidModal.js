import React, { useEffect, useRef, useState } from "react";
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Progress,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../FormComponents/FormikControl";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "../mapStyle.scss";
import axios from "axios";
import { fetchAidCategory, getLoggedUserData } from "../../../redux";
import MultipleFileUploadField from "../../DragDropMultipleFile/MultipleFileUploadField";

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

	const [files, setFiles] = useState([]);
	const [errorFiles, setErrorFiles] = useState([]);
	const [progress, setProgress] = useState(0);

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
		// eslint-disable-next-line
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
		categoryNo: null,
		subCategoryNo: null,
	};
	const PhoneRegex =
		/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?[ -]?(\(?\d{2}\)?)?$/;

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
		categoryNo: Yup.string().required("Gerekli Alan!"),
		subCategoryNo: Yup.string().required("Gerekli Alan!"),
	});

	const emergencyOptions = [
		{ key: "1", value: 1 },
		{ key: "2", value: 2 },
		{ key: "3", value: 3 },
		{ key: "4", value: 4 },
		{ key: "5", value: 5 },
	];
	const category = useSelector((state) => state.aidCategory);
	const [subCatOpts, setSubCatOpts] = useState([]);
	useEffect(() => {
		dispatch(fetchAidCategory());
	}, []);

	const categoryOptions = category.categoryList;

	const subCategoryOptions = subCatOpts;
	// const checkboxOptions = [
	// 	{ key: "Bilgisayar", value: "computer", color: "teal" },
	// 	{ key: "Gıda", value: "food", color: "blue" },
	// 	{ key: "Tekstil", value: "clothes", color: "telegram" },
	// 	{ key: "Diğer", value: "others", color: "cyan" },
	// ];

	async function onSubmit(values) {
		console.log("logged User Data", loggedUserData.userName);
		console.log(values);
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
			files.map((file) => data.append("files", file.file));
			console.log(files);
			try {
				axios
					.post(
						"http://localhost:5000/map/api/helps/details/upload/image",
						data,
						{
							onUploadProgress: (progressEvent) => {
								const totalLength = progressEvent.lengthComputable
									? progressEvent.total
									: progressEvent.target.getResponseHeader("content-length") ||
									  progressEvent.target.getResponseHeader(
											"x-decompressed-content-length"
									  );
								if (progressEvent.lengthComputable) {
									// console.log(
									// 	progressEvent.loaded + " " + progressEvent.total
									// );
									setProgress(
										Math.round((progressEvent.loaded * 100) / totalLength)
									);
								}
							},
						}
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
	const handleCategoryChange = (e) => {
		e.preventDefault();
		console.log("object", e.target.value);
		setSubCatOpts([]);
		category.categoryList[e.target.value - 1].subCategories.map((subCat) =>
			setSubCatOpts((curr) => [
				...curr,
				{
					key: subCat.subCategoryName,
					value: subCat.subCategoryCode,
				},
			])
		);
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
							{({ values, errors, isValid, isSubmitting }) => {
								return (
									<div className="addAidForm">
										<Form>
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
														<MultipleFileUploadField
															setFiles={setFiles}
															files={files}
															fileErrors={errors}
															progress={progress}
															setProgress={setProgress}
															setErrorFiles={setErrorFiles}
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
												<Col md={6}></Col>
												<Col md={6}>
													<FormikControl
														control="chakraselect"
														label="Kategori Seçiniz*"
														placeholder="Kategori Seçiniz"
														name="categoryNo"
														onChange={handleCategoryChange}
														options={categoryOptions}
													/>
												</Col>
												<Col md={6}>
													<FormikControl
														control="chakraselect"
														label="Alt Kategori Seçiniz*"
														placeholder="Alt Kategori Seçiniz"
														name="subCategoryNo"
														options={subCategoryOptions}
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
												id="submitButton"
												color="teal"
												isFullWidth
												loadingText="Submitting"
												isLoading={
													progress !== 0 && progress !== 100 ? true : false
												}
												disabled={
													!isValid || files.length === 0 || errorFiles.length
												}
												type="submit"
											>
												Yardım Ekle
											</Button>
											{progress !== 0 && progress !== 100 ? (
												<Progress mb="1rem" hasStripe value={progress} />
											) : null}
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
