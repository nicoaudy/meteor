import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TaskCollection } from "../../api/tasks";

export default Welcome = () => {
	const [todo, setTodo] = React.useState("");
	const [isEdit, setIsEdit] = React.useState(false);
	const [task, setTask] = React.useState("");

	const tasks = useTracker(() => {
		return TaskCollection.find().fetch();
	});

	const handleSubmit = () => {
		TaskCollection.insert({ name: todo });
		setTodo("");
	};

	const remove = id => {
		TaskCollection.remove(id);
	};

	const edit = id => {
		const data = TaskCollection.findOne(id);
		console.log(data);
		setIsEdit(true);
		setTask(data.name);
	};

	const update = id => {
		TaskCollection.update(id, { name: task });
		setIsEdit(false);
		setTask("");
	};

	if (!tasks) return null;

	return (
		<>
			<h3>Todo {tasks.length}</h3>
			<input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
			<button onClick={handleSubmit}>submit</button>

			{tasks &&
				tasks.map(r => (
					<div key={r._id}>
						{isEdit ? (
							<input
								type="text"
								value={task}
								onChange={e => setTask(e.target.value)}
								onPointerLeave={e => update(r._id)}
							/>
						) : (
							<a onClick={() => edit(r._id)}>{r.name}</a>
						)}
						<a onClick={() => remove(r._id)}>X</a>
					</div>
				))}
		</>
	);
};
