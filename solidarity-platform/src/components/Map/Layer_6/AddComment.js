import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikControl from "../../FormComponents/FormikControl";
import { Button } from "@chakra-ui/button";
import MultipleFileUploadField from "../../DragDropMultipleFile/MultipleFileUploadField";
import { fetchDetailContent, getLoggedIn } from "../../../redux";
import { Progress } from "@chakra-ui/progress";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

function AddComment({ setDisplayAddComment, displayAddComment, aidID }) {
	const dispatch = useDispatch();

	const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
	const [files, setFiles] = useState([]);
	const [errorFiles, setErrorFiles] = useState([]);
	const [progress, setProgress] = useState(0);

	const initialValues = {
		comment: "",
	};
	const validationSchema = Yup.object({
		comment: Yup.string().required("Required"),
	});
	useEffect(() => {
		dispatch(getLoggedIn());
		// eslint-disable-next-line
	}, []);

	async function onSubmit(values) {
		console.log("logged User Data", isLoggedIn);
		if (!isLoggedIn) {
			alert("Yorum yapabilmek için giriş yapmalısınız !!");
		} else {
			const data = new FormData();
			data.append("extraText", values.comment);
			data.append("aidID", aidID);

			files.map((file) => data.append("files", file.file));

			try {
				axios
					.post(
						`http://localhost:5000/map/api/helps/details/comment/${aidID}`,
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
					.then((res) => console.log(res));
				//dispatch(getLoggedIn());
			} catch (values) {
				alert(values.message);
			}
			dispatch(fetchDetailContent(aidID));
		}
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ errors, isValid }) => {
				return (
					<div>
						<Form>
							<FormikControl
								control="chakrainput"
								type="text"
								label="Yorum Ekle"
								name="comment"
								placeholder="Buraya Yorum yazınız?"
								style={{ color: "black" }}
							/>
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
							<Row
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Col md={11}>
									<Button
										colorScheme="teal"
										isFullWidth
										size="lg"
										loadingText="Submitting"
										isLoading={
											progress !== 0 && progress !== 100 ? true : false
										}
										disabled={
											!isValid || files.length === 0 || errorFiles.length
										}
										type="submit"
									>
										Yorum Ekle
									</Button>
									{progress !== 0 && progress !== 100 ? (
										<Progress mb="1rem" hasStripe value={progress} />
									) : null}
								</Col>
								<Col md={1}>
									<Button
										colorScheme="warningRed"
										size="lg"
										_hover={{ background: "red.900" }}
										onClick={() => setDisplayAddComment(!displayAddComment)}
									>
										X
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
}

export default AddComment;
