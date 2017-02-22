import React from "react";


const Footer = () => {

	return (<footer>
				<div className="main-content">
					<div className="footer-logo">
						<h1>DocNow</h1>
					</div>

					<div className="footer-content">
						<ul>
							<li>
								<p>About</p>
								<ul>
									<li>About Us</li>
									<li>Press Center</li>	
									<li>Contact</li>
									<li>Blog</li>
								</ul>
							</li>
							<li>
								<p>Insurance</p>
								<ul>
									<li>Cigna</li>
									<li>GHI</li>	
									<li>HIP</li>
									<li>Blue Cross Blue Shield</li>
									<a href="#">More...</a>
								</ul>
							</li>
							<li>
								<p>Top Doctors</p>
								<ul>
									<li>Dr. Lal</li>
									<li>Dr. Ahmed Soomro</li>	
									<li>Dr. Shanaz</li>
									<li>Dr. Abid</li>
									<li>Dr. Rubina Ashraf</li>
								</ul>
							</li>
							<li>
								<p>Contact Us</p>
								<ul>
									<li>Call</li>
									<li>Live Chat</li>	
									<li>Twitter</li>
									<li>Facebook</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className="copyright">
				 	<span> Our <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a> &copy; DocNow, Inc</span>
				</div>
			</footer>);

}

export default Footer;