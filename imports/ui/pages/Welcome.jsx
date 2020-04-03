import React from "react";
import { Link } from "react-router-dom";

export default Welcome = () => (
	<>
		<h3>Welcome Home</h3>
		<Link to="/counter">Counter</Link> <br />
		<Link to="/signin">Login</Link>
		<Link to="/signup">Register</Link>
	</>
);
