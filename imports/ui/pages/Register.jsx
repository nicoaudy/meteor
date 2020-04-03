import React, { useReducer } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";

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

export default function Register() {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { email, password } = state;

	function onChange(e) {
		dispatch({ field: e.target.name, value: e.target.value });
	}

	function doRegister() {
		Accounts.createUser({ email, username: email, password }, err => {
			if (err) {
				console.log(err);
			} else {
				history.push(from);
			}
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<input type="text" name="email" value={email} onChange={onChange} />
			<input type="text" name="password" value={password} onChange={onChange} />

			<button onClick={doRegister}>Register</button>
			<Link to="/signin">Login</Link>
		</div>
	);
}
