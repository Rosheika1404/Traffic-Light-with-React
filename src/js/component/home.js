import React, { useState } from "react";

//create your first component
export function Home() {
	const [selectColor, setSelectColor] = useState("");

	return (
		<div>
			<div className="pole"></div>
			<div className="text-center trafficLight">
				<div
					className={
						"light red " + (selectColor === "red" ? "selected" : "")
						// if (selectColor === "red"){
						// 	setSelectColor{"selected"};
						// }else{
						// 	""
					}
					onClick={() => setSelectColor("red")}></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
}
