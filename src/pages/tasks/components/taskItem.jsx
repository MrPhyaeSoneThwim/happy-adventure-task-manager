import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
	const { title, isCompleted, id, color } = task;

	return (
		<div className="bg-white mb-2 h-12 group flex items-center pl-3.5 pr-2.5 py-2.5 relative rounded-xl border border-gray-100">
			<div className="absolute h-full inset-y-0 left-0 flex flex-col items-center justify-center">
				<div
					style={{ backgroundColor: color }}
					className="w-[4px] h-7 rounded-r-lg"
				/>
			</div>
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={() => onCompleteTask(id)}
				className="text-sky-500 cursor-pointer w-5 h-5 focus:ring-sky-400 focus:ring-opacity-25 border border-gray-300 rounded-full"
			/>
			<span
				className={`flex-1 mx-3 decoration-sky-500 ${
					isCompleted && "line-through"
				}`}
			>
				{title}
			</span>
			<button
				onClick={() => onDeleteTask(id)}
				className="bg-gray-100 hidden group-hover:inline-flex rounded-full p-2 text-red-500 items-center justify-center"
			>
				<TrashIcon className="w-5 h-5" />
			</button>
		</div>
	);
};

export default TaskItem;
