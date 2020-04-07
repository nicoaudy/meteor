import React from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { useAccount } from "../../hooks";

const wrapper = {
	background: "#524763",
	color: "white",
	padding: "20px 2%",
	display: "flex",
	position: "relative",
	alignItems: "center"
};

const link = {
	color: "white",
	textDecoration: "none",
	fontWeight: "bold"
};

const endLink = {
	color: "white",
	textDecoration: "none",
	fontWeight: "bold",
	paddingLeft: 20
};

export const Navbar = () => {
	const { isLoggedIn } = useAccount();

	return (
		<div style={wrapper}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexGrow: 2,
					alignItems: "center"
				}}
			>
				<div>
					<Link to="/counter" style={link}>
						Counter
					</Link>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center"
					}}
				>
					{isLoggedIn ? (
						<a onClick={() => Meteor.logout()} style={link}>
							signout
						</a>
					) : (
						<>
							<Link to="/signin" style={link}>
								Login
							</Link>
							<Link to="/signup" style={endLink}>
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
