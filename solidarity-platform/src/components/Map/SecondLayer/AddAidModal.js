import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../../FormComponents/FormikControl"
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap'

import '../mapStyle.scss'
import axios from 'axios'


function AddAidModal({ onClose, isOpen, isSuccesfullySubmitted, setIsSuccesfullySubmitted }) {
    const position = useSelector(state => state.addAidLocation);
    const options = [
        { key: 'Email', value: 'emailoc' },
        { key: 'Telephone', value: 'telephonemoc' }
    ]
    const initialValues = {
        langitude: position.lng,
        latitude: position.lat,
        firstName: '',
        lastName: '',
        address: '',
        modeOfContact: '',
        phone: ''
    }
    const validationSchema = Yup.object({
        langitude: Yup.string().required('Required'),
        latitude: Yup.string().required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        }),
        address: Yup.string().required('Required')
    })

    async function onSubmit(values) {

        try {
            //await axios.post("http://localhost:5000/yardımeklemeilealakalıurl", values);
            console.log("Yardım Ekle Object", values);
            setIsSuccesfullySubmitted(true);
        } catch (values) {
            alert(values.message);
        }
    }
    return (
        <Modal onClose={onClose} size={"xl"} isOpen={isOpen} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Yardım Ekle</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {
                        !isSuccesfullySubmitted
                            ? <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {
                                    formik => {
                                        return (
                                            <div className="addAidForm">
                                                <Form>
                                                    <Row>
                                                        <Col md={6}>
                                                            <FormikControl
                                                                control='chakrainput'
                                                                type='text'
                                                                label='Langitude'
                                                                name='langitude'
                                                                disabled={true}
                                                            />
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormikControl
                                                                control='chakrainput'
                                                                type='text'
                                                                label='Latitude'
                                                                name='latitude'
                                                                disabled={true}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={6}>
                                                            <FormikControl
                                                                control='chakrainput'
                                                                type='text'
                                                                label='First Name'
                                                                name='firstName'
                                                            />
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormikControl
                                                                control='chakrainput'
                                                                type='text'
                                                                label='Lastname'
                                                                name='lastName'
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <FormikControl
                                                        control='chakraradio'
                                                        label='Mode of Contact'
                                                        name='modeOfContact'
                                                        options={options}
                                                    />
                                                    <FormikControl
                                                        control='chakrainput'
                                                        type='text'
                                                        label='Phone Number'
                                                        name='phone'
                                                    />
                                                    <FormikControl
                                                        control='chakratextarea'
                                                        label='Address'
                                                        name='address'
                                                    />
                                                    <Button
                                                        variant="outline"
                                                        loadingText="Submitting"
                                                        colorScheme="teal"
                                                        type='submit'
                                                        disabled={!formik.isValid}
                                                    >
                                                        Yardım Ekle
                                            </Button>
                                                </Form>
                                            </div>
                                        )
                                    }
                                }
                            </Formik>
                            : <h2> Form is submitted, turn the map </h2>
                    }

                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default AddAidModal
