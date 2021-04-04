import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from "../FormComponents/FormikControl"
import { Button } from '@chakra-ui/react'
import './LoginForm.scss'
import AuthContext from '../../context/AuthContext';
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import loginSvg from './login.svg'
import axios from 'axios'
//import { getloggedIn } from '../../../../server/controllers/userController'
//import secureLoginSvg from './secure-login.svg'

function LoginForm() {
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();
    const initialValues = {
        email: "",
        password: "",
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format').required('Required'),
        password: Yup.string().required('Required')
    })
    async function onSubmit(values) {
        

        try {
            await axios.post("http://localhost:5000/login", values);
            
            await getLoggedIn();
            
            history.push("/");
            
        } catch (values) {
            alert(values.message);
        }
    }

    return (
        <div className="loginPage">
            <Container>
                <div className="loginForm">
                    <div className="leftPanel">
                        <img src={loginSvg} alt="Login Page" />
                    </div>
                    <div className="rightPanel">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {
                                formik => {
                                    return (
                                        <div>
                                            <div className="loginHeader">
                                                <h1>Giriş Yap</h1>
                                            </div>
                                            <Form>
                                                <FormikControl
                                                    control='chakrainput'
                                                    type='email'
                                                    label='Email'
                                                    name='email'
                                                    placeholder='birisi@example.com'
                                                />
                                                <FormikControl
                                                    control='chakrainput'
                                                    type='password'
                                                    label='Password'
                                                    name='password'
                                                />
                                                <Button
                                                    variant="outline"
                                                    bg="white.400"
                                                    textColor="white"
                                                    type='submit'
                                                    disabled={!formik.isValid}
                                                >
                                                    Giriş Yap
                                                </Button>
                                            </Form>
                                        </div>
                                    )
                                }
                            }
                        </Formik>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default LoginForm