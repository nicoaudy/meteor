import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { Formik, Form } from "formik";

import { Input } from "../../components";
import { validation } from "./validation";

export default function Register() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	function doRegister({ email, password }) {
		Accounts.createUser({ email, username: email, password }, err => {
			if (err) {
				console.log(err);
			} else {
				history.push(from);
			}
		});
	}

	return (
		<>
			<p>You must log in to view the page at {from.pathname}</p>
			<Link to="/signin">Login</Link>
			<Formik
				initialValues={{
					email: "",
					password: ""
				}}
				validationSchema={validation}
				onSubmit={values => doRegister(values)}
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
		</>
	);
}
