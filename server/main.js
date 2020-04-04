import { Meteor } from "meteor/meteor";
import { CounterCollection } from "/imports/api/counters";

Meteor.startup(() => {
	if (CounterCollection.find().count() === 0) {
		CounterCollection.insert({
			name: "counter",
			value: 0,
			createdAt: new Date()
		});
	}
});
