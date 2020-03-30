import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const Info = () => {
	const [form, setState] = React.useState({
		title: "",
		url: ""
	});

	const links = useTracker(() => {
		return LinksCollection.find().fetch();
	});

	const updateField = e => {
		setState({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const submit = e => {
		e.preventDefault();

		if (form.id) {
			LinksCollection.update(form.id, {
				title: form.title,
				url: form.url
			});
		} else {
			LinksCollection.insert({
				title: form.title,
				url: form.url,
				createdAt: new Date()
			});
		}

		setState({
			title: "",
			url: ""
		});
	};

	const remove = id => {
		LinksCollection.remove(id);
	};

	const edit = id => {
		const data = LinksCollection.findOne(id);
		setState({
			id,
			title: data.title,
			url: data.url
		});
	};

	return (
		<div>
			<h2>Learn Meteor!</h2>
			<form>
				<input
					type="text"
					name="title"
					value={form.title}
					onChange={updateField}
					placeholder="Title"
				/>
				<input
					type="text"
					name="url"
					value={form.url}
					onChange={updateField}
					placeholder="Add other link"
				/>
				<button onClick={submit}>Submit</button>
			</form>

			<ul>
				{links.map(link => (
					<li key={link._id}>
						<a href={link.url} target="_blank">
							{link.title}
						</a>
						<button onClick={() => edit(link._id)}>edit</button>
						<button onClick={() => remove(link._id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};
