import React from "react";

const Button = (props) => {

	let btnClass = `btn btn-${props.type}`;

	if(!props.submit){
		return (
			<a className={btnClass} href={props.linkTo}>
				{props.children}
			</a>
		);
	}
	else{
		return (
			<input type="submit" className={btnClass} value={props.children}/>
		);
	}	

}

export default Button;