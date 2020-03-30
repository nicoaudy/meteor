import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CounterCollection } from "../api/counters";

export const Hello = () => {
	const [counter, setCounter] = useState(0);

	const res = useTracker(() => {
		return CounterCollection.findOne();
	});

	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<button onClick={increment}>Click Me</button>
			<p>You've pressed the button {counter} times.</p>
		</div>
	);
};
