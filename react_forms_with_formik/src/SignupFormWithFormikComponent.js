import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const SignupFormWithFormikComponent = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: '',
                gender: 'Male'
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required('This field is required')
                    .email('Invalid email address'),
                username: Yup.string()
                    .required('This field is required')
                    .max(20, 'This field must be 20 characters or less'),
                password: Yup.string()
                    .required('This field is required')
                    .min(6, 'This field must be atleast 6 characters'),
                gender: Yup.string()
                    .required('This field is required')
            })}
            onSubmit={(values, formikBag) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 1));
                    formikBag.setSubmitting(false)
                }, 1000);
            }}
        >
            {formik => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="p" />
                    <label htmlFor="username">Username</label>
                    <Field name="username" type="text" />
                    <ErrorMessage name="username" component="p" />
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="p" />
                    <label htmlFor="gender">Gender</label>
                    <Field name="gender" as="select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="p" />
                    <button type="submit" disabled={formik.isSubmitting}>Submit</button>
                    <button type="reset">Reset</button>
                </Form>
            )}
        </Formik>
    );
}