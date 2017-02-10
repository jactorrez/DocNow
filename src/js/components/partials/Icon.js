import React from "react";

const Icon = (props) => {

	return (
		<div className="process-icon">
			<svg>
				<use xlinkHref={props.iconId}></use>
			</svg>
		</div>
	);
}

export default Icon;