import React from "react";


const NavBar = (props) => (
	<div>
		<div className="navbar">
			<div className="navbar-top">
				<a href="#">Download Our App</a>
				<p>Questions? Call <a href="#">888-321-3213</a> or <a href="#">Live Chat</a></p>
			</div>
			<div className="navbar-bottom">
				<div class="navbar-logo"><a href="#">DocNow</a></div>
				<ul>
					<li>Home</li>
					<li>Doctors</li>
					<li>Locations</li>
					<li>Contact Us</li>
					<li><a href="#">Log In/Register</a></li>
				</ul>

			</div>
		</div>
		{props.children}
	</div>
	);

export default NavBar;