import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormikControl from "../../FormComponents/FormikControl";
import { Button } from "@chakra-ui/button";
import { fetchDetailContent, getLoggedUserData } from "../../../redux";

function AddComment({ setDisplayAddComment, displayAddComment, detaildId }) {
	const dispatch = useDispatch();

	const loggedUserData = useSelector((state) => state.userData.loggedUserData);
	const [files, setFiles] = useState([]);
	const initialValues = {
		comment: "",
	};
	const validationSchema = Yup.object({
		comment: Yup.string().required("Required"),
	});
	useEffect(() => {
		dispatch(getLoggedUserData());
		// eslint-disable-next-line
	}, []);

	async function onSubmit(values) {
		console.log("logged User Data", loggedUserData.userName);
		if (!loggedUserData.userName) {
			alert("Yorum yapabilmek için giriş yapmalısınız !!");
		} else {
			const data = new FormData();
			data.append("comment", values.comment);
			data.append("userName", loggedUserData.userName);
			data.append("files", files);

			// try {
			// 	await axios.post("http://localhost:5000/login", values);
			// 	dispatch(getLoggedIn());
			// 	history.push("/");
			// } catch (values) {
			// 	alert(values.message);
			// }
			dispatch(fetchDetailContent(detaildId));
		}
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
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
								<label htmlFor="file">Add an Image</label>
								<input
									type="file"
									label="Add an image"
									id="file"
									required
									multiple
									accept=".jpg"
									onChange={(event) => {
										const images = event.target.files;
										console.log("images", images);
										setFiles(images);
									}}
								/>
							</div>
							<Button
								variant="outline"
								bg="green.900"
								textColor="white"
								mt="1rem"
								type="submit"
								_hover={{ background: "green.700" }}
								disabled={!formik.isValid}
							>
								Yorum ekle
							</Button>
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
