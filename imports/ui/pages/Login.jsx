import React, { useReducer } from "react";
import { Meteor } from "meteor/meteor";
import { Link, useHistory, useLocation } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Required")
});

const INITIAL_STATE = {
	email: "",
	password: ""
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value
	};
}

export default function Login() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { email, password } = state;

	function onChange(e) {
		dispatch({ field: e.target.name, value: e.target.value });
	}

	function doLogin() {
		Meteor.loginWithPassword(email, password, err => {
			console.log(err);
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<input type="text" name="email" value={email} onChange={onChange} />
			<input type="text" name="password" value={password} onChange={onChange} />

			<button onClick={doLogin}>Log in</button>
			<Link to="/signup">Register</Link>

			<h1>Signup</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: ""
				}}
				validationSchema={SignupSchema}
				onSubmit={values => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Field name="firstName" />
						{errors.firstName && touched.firstName ? (
							<div>{errors.firstName}</div>
						) : null}
						<Field name="lastName" />
						{errors.lastName && touched.lastName ? (
							<div>{errors.lastName}</div>
						) : null}
						<Field name="email" type="email" />
						{errors.email && touched.email ? <div>{errors.email}</div> : null}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
