import { Meteor } from "meteor/meteor";
import { CounterCollection } from "/imports/api/counters";
import { TaskCollection } from "/imports/api/tasks";

Meteor.startup(() => {
	if (CounterCollection.find().count() === 0) {
		CounterCollection.insert({
			name: "counter",
			value: 0,
			createdAt: new Date()
		});
	}

	if (TaskCollection.find().count() === 0) {
		TaskCollection.insert({
			name: "say hi",
			createdAt: new Date()
		});
	}
});

Meteor.methods({
	sayHello() {
		console.log("Hello From sayHello");
	}
});
