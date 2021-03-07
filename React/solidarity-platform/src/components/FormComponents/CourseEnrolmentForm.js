import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from "./FormikControl"
import { Button } from '@chakra-ui/react'

function CourseEnrolmentForm() {

    const dropdownOptions = [
        { key: 'Select your course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Angular', value: 'angular' },
        { key: 'Vue', value: 'vue' }
    ]
    const checkboxOptions = [
        { key: 'HTML', value: 'html', color: 'teal' },
        { key: 'CSS', value: 'css', color: 'blue' },
        { key: 'JavaScript', value: 'javascript', color: 'telegram' },
        { key: 'python', value: 'python', color: 'cyan' },

    ]
    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit = values => {
        console.log('form date', values)
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
        }, 1000);
    }
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        //courseDate: Yup.date().required('Required').nullable()
    })
    const buttonStyle = {
        margin: '2rem 0 0 0'
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl
                                control='chakrainput'
                                type='email'
                                label='Email'
                                name='email'
                            />

                            <FormikControl
                                control='chakratextarea'
                                label='Bio'
                                name='bio'
                            />
                            <FormikControl
                                control='chakraselect'
                                label='Course'
                                name='course'
                                options={dropdownOptions}
                            />
                            <FormikControl
                                control='chakracheckbox'
                                label='Your Skillset'
                                name='skills'
                                options={checkboxOptions}
                            />
                            {//<FormikControl   control='date'      label='Course date'               name='courseDate'      />
                            }
                            <Button
                                isLoading={isSubmitting}
                                loadingText="Submitting"
                                colorScheme="teal"
                                variant="outline"
                                style={buttonStyle}
                                type='submit'
                                disabled={!formik.isValid}
                            >
                                Submit
                            </Button>
                        </Form>
                    )
                }
            }
        </Formik >
    )
}

export default CourseEnrolmentForm
