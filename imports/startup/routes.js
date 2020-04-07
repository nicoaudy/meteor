import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { useAccount } from "../hooks";
import { Login, Welcome, Counter, Register } from "../ui/pages";
import { Navbar } from "../ui/components/Navbar";

function PrivateRoute({ children, ...rest }) {
	const { isLoggedIn } = useAccount();
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/signin",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/signin">
					<Login />
				</Route>
				<Route path="/signup">
					<Register />
				</Route>
				<PrivateRoute path="/counter">
					<Counter />
				</PrivateRoute>
				<Route path="/">
					<Welcome />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
