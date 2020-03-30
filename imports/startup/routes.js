import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Welcome, Counter } from "../ui/pages";

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/counter">
					<Counter />
				</Route>
				<Route path="/">
					<Welcome />
				</Route>
			</Switch>
		</Router>
	);
};
