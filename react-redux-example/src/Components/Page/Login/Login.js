// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from "../../Button/SubmitButton";
import EmailField from "../../Field/EmailField";

const Login = () => (
    <div>
        <h1>Sign In</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <EmailField/>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <SubmitButton disabled={isSubmitting}/>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;