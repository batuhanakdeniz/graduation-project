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
			data.append("comment", values.comment);
			data.append("aidID", aidID);

			files.map((file) => data.append("files", file.file));

			try {
				axios
					.post("https://httpbin.org/anything", data, {
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
					})
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
							<Button
								color="teal"
								isFullWidth
								loadingText="Submitting"
								isLoading={progress !== 0 && progress !== 100 ? true : false}
								disabled={!isValid || files.length === 0 || errorFiles.length}
								type="submit"
							>
								Yorum Ekle
							</Button>
							{progress !== 0 && progress !== 100 ? (
								<Progress mb="1rem" hasStripe value={progress} />
							) : null}
							<Button
								variant="outline"
								bg="green.900"
								textColor="white"
								mt="1rem"
								ml="1rem"
								type="submit"
								_hover={{ background: "green.700" }}
								onClick={() => setDisplayAddComment(!displayAddComment)}
							>
								İptal
							</Button>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
}

export default AddComment;
