import React from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { useAccount } from "../../hooks";

export const Navbar = () => {
	const { isLoggedIn } = useAccount();

	return (
		<>
			<Link to="/counter">Counter</Link> <br />
			{isLoggedIn ? (
				<button onClick={() => Meteor.logout()}>signout</button>
			) : (
				<>
					<Link to="/signin">Login</Link> <br />
					<Link to="/signup">Register</Link> <br />
				</>
			)}
		</>
	);
};
