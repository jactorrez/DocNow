import React from "react";

const NavBar = (props) => (
	<nav>
		<div className="navbar">
			<div className="navbar-top">
				<a className="link" href="#">Download Our App</a>
				<p>Questions? Call <a className="link" href="#">888-321-3213</a> or <a className="link" href="#">Live Chat</a></p>
			</div>
			<div className="navbar-bottom">
				<div className="logo-container"><a className="navbar-logo" href="#">DocNow</a></div>
				<ul className="navbar-list">
					<li><a className="active" href="#">Home</a></li>
					<li><a href="#">Doctors</a></li>
					<li><a href="#">Locations</a></li>
					<li><a href="#">Contact Us</a></li>
					<li><a className="btn btn-border" href="#">Log In/Register</a></li>
				</ul>
			</div>
		</div>
		{props.children}
	</nav>
	);

export default NavBar;