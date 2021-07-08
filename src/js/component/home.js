import React from "react";

//create your first component
export function Home() {
	return (
		<div>
			<div className="pole"></div>
			<div className="text-center trafficLight">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
}
