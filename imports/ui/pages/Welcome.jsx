import React from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { useAccount } from "../../hooks/useAccount";

export default Welcome = () => {
	const { user, isLoggedIn } = useAccount();
	console.log(user);

	return (
		<>
			<Navbar />
			<h3>Welcome Home</h3>
		</>
	);
};
