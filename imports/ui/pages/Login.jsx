import React from "react";

import { useHistory, useLocation } from "react-router-dom";

export default Login = () => {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button onClick={() => {}}>Log in</button>
		</div>
	);
};
