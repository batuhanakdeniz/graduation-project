import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import FormikControl from '../../FormComponents/FormikControl';
import { Button } from '@chakra-ui/button';

function AddComment({setDisplayAddComment,displayAddComment}) {
    const history = useHistory();
	const dispatch = useDispatch();
    const initialValues = {
		comment: "",		
	};
	const validationSchema = Yup.object({
		comment: Yup.string().required("Required")
	});

	async function onSubmit(values) {
        console.log("comment values : ",values)
		// try {
		// 	await axios.post("http://localhost:5000/login", values);
		// 	dispatch(getLoggedIn());
		// 	history.push("/");
		// } catch (values) {
		// 	alert(values.message);
		// }
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
                                                style={{color:"black"}}
											/>										
											<Button
												variant="outline"
												bg="green.900"
												textColor="white"
                                                mt="1rem"
												type="submit"
                                                _hover={{background:"green.700"}}
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
                                                _hover={{background:"green.700"}}
												disabled={!formik.isValid}
                                                onClick={()=>setDisplayAddComment(!displayAddComment)}
											>
												İptal
											</Button>
										</Form>
									</div>
								);
							}}
						</Formik>
    )
}

export default AddComment
