import React from "react";

import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { Login, Welcome, Counter } from "../ui/pages";

const useAccount = () =>
	useTracker(() => {
		const user = Meteor.user();
		const userId = Meteor.userId();
		return {
			user,
			userId,
			isLoggedIn: !!userId
		};
	}, []);

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

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/signin">
					<Login />
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
