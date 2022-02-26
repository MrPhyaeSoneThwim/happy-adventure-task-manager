import React from "react";
const filterData = ["all", "complete", "incomplete"];

const TaskFilter = ({ filter, onFilter }) => {
	return (
		<div className="bg-white space-x-1 flex items-center my-3 p-1 border border-gray-200 rounded-xl">
			{filterData.map((filterVal, index) => (
				<button
					key={index}
					onClick={() => onFilter(filterVal)}
					className={`flex-1 flex py-1.5 text-sm items-center justify-center rounded-lg capitalize ${
						(filter === filterVal &&
							"bg-sky-500 font-semibold text-white hover:bg-sky-600") ||
						"text-gray-600 font-medium hover:bg-gray-100"
					}`}
				>
					{filterVal}
				</button>
			))}
		</div>
	);
};

export default TaskFilter;
