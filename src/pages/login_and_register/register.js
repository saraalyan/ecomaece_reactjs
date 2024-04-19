import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import Login from './Login'; 

function Registration() {
    const [isRegistered, setIsRegistered] = useState(false);
    function handleFormSubmit(values, { setSubmitting }) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        setSubmitting(false);
        setIsRegistered(true); 
    }

    return (
        <div>
            {!isRegistered ? (
                <Formik
                    initialValues={{ name: '', email: '', password: '', phone: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        if (!values.phone) {
                            errors.phone = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={handleFormSubmit}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <h3>Register</h3>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}//for error 
                                    isInvalid={touched.name && !!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.email && !!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && !!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.phone && !!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" variant="dark" disabled={isSubmitting}>Register</Button>

                            <p className="forgot-password text-right">
                                Already registered? <Link to="/login">Log in</Link>
                            </p>

                            {isSubmitting && (
                                <Alert variant="info">
                                    Submitting...
                                </Alert>
                            )}
                        </Form>
                    )}
                </Formik>
            ) : (
                <Login /> 
            )}
        </div>
    );
}

export default Registration;
