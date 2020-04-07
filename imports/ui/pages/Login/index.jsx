import React, { useReducer } from "react";
import { Meteor } from "meteor/meteor";
import { Link, useHistory, useLocation } from "react-router-dom";

import { Formik, Form } from "formik";
import { validationSchema } from "./validation";
import { Container, Input } from "../../components";

export default function Login() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	function doLogin({ email, password }) {
		Meteor.loginWithPassword(email, password, err => {
			if (err) {
				console.log(err);
			} else {
				history.push(from);
			}
		});
	}

	return (
		<Container>
			<p>You must log in to view the page at {from.pathname}</p>
			<Link to="/signup">Register</Link>
			<h1>Login</h1>
			<Formik
				initialValues={{
					email: "",
					password: ""
				}}
				validationSchema={validationSchema}
				onSubmit={values => doLogin(values)}
			>
				{({ errors, touched }) => (
					<Form>
						<Input name="email" errors={errors} touched={touched} />
						<Input
							name="password"
							type="password"
							errors={errors}
							touched={touched}
						/>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}
