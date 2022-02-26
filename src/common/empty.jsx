import React from "react";
import empty from "../assets/img/empty.png";

const Empty = () => {
	return (
		<div className="p-10 md:p-5 flex flex-col items-center justify-center">
			<img className="w-2/3 md:w-1/3" alt="Empty" src={empty} />
			<span className="text-lg mt-5 font-medium text-gray-500">
				No tasks information.
			</span>
		</div>
	);
};

export default Empty;
