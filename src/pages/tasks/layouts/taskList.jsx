import React from "react";
import Empty from "../../../common/empty";
import TaskItem from "../components/taskItem";

const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
	return (
		<>
			{(tasks &&
				tasks.length > 0 &&
				tasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						onDeleteTask={onDeleteTask}
						onCompleteTask={onCompleteTask}
					/>
				))) || <Empty />}
		</>
	);
};

export default TaskList;
