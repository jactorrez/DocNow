import React from "react";

const Button = (props) => {

	let btnClass = `btn ${props.buttonType}`;

	if(!props.submitButton){
		return (
			<a className={btnClass} href={props.linkTo}>
				{props.message}
			</a>
		);
	}
	else{
		return (
			<input type="submit" className={btnClass} value={props.message}/>
		);
	}	

}

export default Button;