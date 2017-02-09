import React from "react";
import Aetna from "../../../img/Aetna";
import CVS from "../../../img/CVS";
import Humana from "../../../img/Humana";
import Merck from "../../../img/Merck";

const Partners = () => (
	<div> 
		<svg className="partner-icon">
			<use xlinkHref={Aetna}></use>
		</svg>
		<svg className="partner-icon">
			<use xlinkHref={CVS}></use>
		</svg>
		<svg className="partner-icon">
			<use xlinkHref={Humana}></use>
		</svg>
		<svg className="partner-icon">
			<use xlinkHref={Merck}></use>
		</svg>
	</div>
);

export default Partners;