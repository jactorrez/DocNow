import React from "react"; 
import Button from "../../partials/Button";

const Home = () => (
	<div>
		<main>
			<header className="hero-container"> 
				<section className="hero">	
					<ul className="slideshow">
						<div className="slide" data-slide="1">
							<h1>The Best Doctors Near You, For You</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
							   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
							   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
							   esse cillum dolore eu fugiat nulla pariatur.
							</p>
							<Button message="Learn More" linkTo="#" buttonType="base"/>
						</div>
					</ul>	
				</section>
				<div className="search-container">
					<div className="search-content">
						<h4>Find A Doctor</h4>
						<div className="search-form">
							<div className="form-group">
								<label>City</label>
								<input type="text" placeholder="Your city" />
							</div>
							<div className="form-group">
								<label>Specialty</label>
								<select className="input-select input-long">
									<option selected disabled>I am searching for a...</option>
									<option>One</option>
								</select>
							</div>
							<div className="form-group">
								<label>Insurance</label>
								<input type="text" className="input-long" placeholder="Who will cover?"/>
							</div>
							<Button submitButton="true" message="Find A Doctor" buttonType="success btn-submit"/>
						</div>
					</div>
				</div>
				<h1>Hello</h1>
			</header>
		</main>
	</div>
);

export default Home;