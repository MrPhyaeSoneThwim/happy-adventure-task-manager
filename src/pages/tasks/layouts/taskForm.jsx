import React from "react";
import logo from "../../../assets/img/logo.png";

import { useState } from "react";
import { CirclePicker } from "react-color";
import { colors } from "../../../utils/data";

const TaskForm = ({ onAddTask }) => {
	const [taskData, setTaskData] = useState({
		title: "",
		color: colors[0],
		isCompleted: false,
	});

	const handleForm = (event) => {
		const { name, value } = event.target;
		setTaskData({ ...taskData, [name]: value });
	};

	const handleColorChange = (color, event) => {
		setTaskData({ ...taskData, color: color.hex });
	};

	const handleAddTask = (event) => {
		event.preventDefault();
		onAddTask(taskData);

		// reset task data after task creation
		setTaskData({ ...taskData, title: "", color: colors[0] });
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<img className="w-10 h-auto" alt="Task Manager" src={logo} />
				<h5 className="font-sans block mt-3 text-lg font-bold">Task Manager</h5>
			</div>
			<div className="mt-5 w-full bg-white border border-gray-200 rounded-2xl">
				<form>
					<input
						name="title"
						value={taskData.title}
						onChange={handleForm}
						placeholder="Enter task"
						className="w-full bg-transparent border-none focus:outline-none px-5 py-4"
					/>
					<div className="px-5 pb-4 flex items-center justify-between">
						<CirclePicker
							width="auto"
							colors={colors}
							circleSize={24}
							color={taskData.color}
							onChange={handleColorChange}
						/>
						<button
							onClick={handleAddTask}
							className={`px-5 py-1.5 text-white rounded-xl ${
								(taskData.title &&
									"cursor-pointer bg-sky-500 hover:bg-sky-600") ||
								"cursor-not-allowed bg-gray-300"
							}`}
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default TaskForm;
