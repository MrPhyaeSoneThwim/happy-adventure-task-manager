import uniqid from "uniqid";
import TaskList from "./layouts/taskList";
import TaskForm from "./layouts/taskForm";
import TaskFilter from "./layouts/taskFilter";

import { useEffect, useState } from "react";

const filterData = ["all", "complete", "incomplete"];

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState(filterData[0]);

	const handleFilter = (filterVal) => {
		setFilter(filterVal);
	};

	// method to manipulate the state after task create, delete and update
	const handleUpdateByFilter = (filter, tasks) => {
		switch (filter) {
			case "complete":
				setTasks(tasks.filter((task) => task.isCompleted));
				break;
			case "incomplete":
				setTasks(tasks.filter((task) => !task.isCompleted));
				break;
			default:
				setTasks(tasks);
				break;
		}
	};

	/**
	 * this useEffect will be triggered after jsx element
	 * return from the componet mounted on the DOM
	 */

	useEffect(() => {
		// retrieve task list stored in local storage
		const localTasks = JSON.parse(localStorage.getItem("tasks"));

		// update the component tasks state depends on the local tasks value
		setTasks((localTasks && localTasks.length > 0 && localTasks) || []);
	}, []);

	/**
	 * this useEffect will be triggered depends on the filter value (all | complete | incomplete)
	 * and will update the existing component tasks state by filtered data
	 */
	useEffect(() => {
		const localTasks = JSON.parse(localStorage.getItem("tasks"));
		if (localTasks) {
			handleUpdateByFilter(filter, localTasks);
		}
	}, [filter]);

	// this method is to add a new task
	const handleAddTask = (newTask) => {
		const localTasks = JSON.parse(localStorage.getItem("tasks"));
		let addedTasks = [];

		if (localTasks) {
			addedTasks = [...localTasks, { ...newTask, id: uniqid() }];
		} else {
			addedTasks = [...addedTasks, { ...newTask, id: uniqid() }];
		}

		/**
		 * store existing tasks data + new task in
		 * local storage to become persistent
		 */
		localStorage.setItem("tasks", JSON.stringify(addedTasks));

		/**
		 * update the existing component tasks update
		 * after creating new task item
		 */

		handleUpdateByFilter(filter, addedTasks);
	};

	const handleDeleteTask = (taskId) => {
		const localTasks = JSON.parse(localStorage.getItem("tasks"));
		const updatedTasks = localTasks.filter((task) => task.id !== taskId);

		/**
		 * store updated tasks in local storage after deleting a task by using taskId
		 */
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));

		// set the updated tasks data in local component tasks state after task deletion
		handleUpdateByFilter(filter, updatedTasks);
	};

	const handleCompleteTask = (taskId) => {
		const localTasks = JSON.parse(localStorage.getItem("tasks"));

		const updatedTasks = localTasks.map((task) =>
			task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
		);

		/**
		 * store updated tasks in local storage after updating
		 * task (isCompleted property) by using taskId
		 */
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));

		// set the updated tasks data in local component tasks state after task update
		handleUpdateByFilter(filter, updatedTasks);
	};

	return (
		<div className="w-full px-4 min-h-screen bg-slate-50 py-10">
			<div className="max-w-xl w-full mx-auto">
				<TaskForm onAddTask={handleAddTask} />
				<TaskFilter filter={filter} onFilter={handleFilter} />
				<TaskList
					tasks={tasks}
					onDeleteTask={handleDeleteTask}
					onCompleteTask={handleCompleteTask}
				/>
			</div>
		</div>
	);
};

export default Tasks;
