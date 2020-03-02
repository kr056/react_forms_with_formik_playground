import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SignupFormWithYup = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            gender: 'Male'
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('This field is required')
                .email('Invalid email address'),
            username: Yup.string()
                .required('This field is required')
                .max(20, 'Username must be 20 characters or less'),
            password: Yup.string()
                .required('This field is required')
                .min(4, 'Password must be atleast 6 characters'),
            gender: Yup.string()
                .required('This field is required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
                class-Name={formik.errors.email && formik.touched.email ? 'input-error' : ''}
            />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <label htmlFor='username'>Username</label>
            <input
                name="username"
                type="text"
                {...formik.getFieldProps('username')}
                class-Name={formik.errors.username && formik.touched.username ? 'input-error' : ''}
            />
            {formik.errors.username && formik.touched.username && <p>{formik.errors.username}</p>}
            <label htmlFor='password'>Password</label>
            <input
                name="password"
                type="text"
                {...formik.getFieldProps('password')}
                class-Name={formik.errors.password && formik.touched.password ? 'input-error' : ''}
            />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            <label htmlFor='gender'>Gender</label>
            <select
                name="gender"
                {...formik.getFieldProps('gender')}
                class-Name={formik.errors.gender && formik.touched.gender ? 'input-error' : ''}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {formik.errors.gender && formik.touched.gender && <p>{formik.errors.gender}</p>}
            <button type="submit">Submit</button>
        </form>
    );
}