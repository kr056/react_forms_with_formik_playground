import React from 'react';
import { useFormik } from 'formik';

export const SignupForm = () => {
    const emailRegexPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const validate = values => {
        const errors = {};
	
        if (!values.email) {
            errors.email = 'Required';
        } else if (!emailRegexPattern.test(values.email)) {
            errors.email = 'Invalid email adress';
        }

        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length > 20) {
            errors.username = 'Username must not be longer than 20 characters';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be atleast 6 characters';
        }

        if (!values.gender) {
            errors.gender = 'Required';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            gender: 'Male'
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 1));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <label htmlFor='username'>Userame</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username && <p>{formik.errors.username}</p>}
            <label htmlFor='password'>Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            <label htmlFor='gender'>Gender</label>
            <select
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
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
