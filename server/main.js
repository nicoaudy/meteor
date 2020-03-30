import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";
import { CounterCollection } from "/imports/api/counters";

function insertLink({ title, url }) {
	LinksCollection.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
	// If the Links collection is empty, add some data.
	if (CounterCollection.find().count() === 0) {
		CounterCollection.insert({
			name: "counter",
			value: 0,
			createdAt: new Date()
		});
	}

	if (LinksCollection.find().count() === 0) {
		insertLink({
			title: "Do the Tutorial",
			url: "https://www.meteor.com/tutorials/react/creating-an-app"
		});

		insertLink({
			title: "Follow the Guide",
			url: "http://guide.meteor.com"
		});

		insertLink({
			title: "Read the Docs",
			url: "https://docs.meteor.com"
		});

		insertLink({
			title: "Discussions",
			url: "https://forums.meteor.com"
		});
	}
});
