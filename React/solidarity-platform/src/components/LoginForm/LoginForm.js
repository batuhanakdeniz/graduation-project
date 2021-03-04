import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../FormComponents/FormikControl"
import { Button } from '@chakra-ui/react'
import './LoginForm.scss'
import { Container, Row, Col, Card } from 'react-bootstrap'

function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format').required('Required'),
        password: Yup.string().required('Required')
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit = values => {
        console.log('form date', values)
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
        }, 1000);
    }

    const headerStyle = {
        textAlign: "center",
        fontSize: "3rem",
        padding: "0rem 1rem 1rem 1rem"
    }
    const loginButtonStyle = {
        margin: "1rem 1rem 1rem 0rem"
    }

    return (
        <div className="loginForm">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return (
                            <div>
                                <Row className="justify-content-md-center">
                                    <div className="loginHeader">
                                        <h1>Login</h1>
                                    </div>
                                </Row>
                                <Form>
                                    <FormikControl
                                        control='chakrainput'
                                        type='email'
                                        label='Email'
                                        name='email'
                                    />
                                    <FormikControl
                                        control='chakrainput'
                                        type='password'
                                        label='Password'
                                        name='password'
                                    />
                                    <div style={loginButtonStyle}>
                                        <Button
                                            variant="outline"
                                            isLoading={isSubmitting}
                                            loadingText="Submitting"
                                            colorScheme="teal"
                                            type='submit'
                                            disabled={!formik.isValid}
                                        >
                                            Submit
                                </Button>
                                    </div>
                                </Form>
                            </div>
                        )
                    }
                }
            </Formik>
        </div >
    )
}
export default LoginForm
