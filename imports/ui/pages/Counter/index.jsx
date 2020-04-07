import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CounterCollection } from "../../../api/counters";

export default Counter = () => {
	const counter = useTracker(() => {
		console.log(CounterCollection.findOne());
		return CounterCollection.findOne();
	});

	const increment = () => {
		CounterCollection.update(counter._id, { value: counter.value + 1 });
		console.log(counter);
	};

	const decrement = () => {
		CounterCollection.update(counter._id, { value: counter.value - 1 });
		console.log(counter);
	};

	if (!counter) {
		return <h2>Loading...</h2>;
	}

	return (
		<div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<p>You've pressed the button {counter.value} times.</p>
		</div>
	);
};
