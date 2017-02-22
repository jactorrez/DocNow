import React from "react";
import Button from "../../partials/Button";

const HeroSection = (props) => {

	let slideCount = 1;
	let totalSlides;

	setTimeout(function(){
		totalSlides = document.querySelectorAll(".slide").length;
	}, 1000);

	function triggerSlide(direction){

		if(direction === "next"){

			let hide_slide;
			let show_slide;

			if(slideCount >= totalSlides){
				hide_slide = document.querySelector(`[data-slide="${totalSlides}"]`);
				hide_slide.style.opacity = "0";
				slideCount = 1;
				show_slide = document.querySelector(`[data-slide="${slideCount}"]`);
				show_slide.style.opacity = "1";
				return;
			}

			hide_slide = document.querySelector(`[data-slide="${slideCount}"]`);
			hide_slide.style.opacity = "0";

			slideCount++;

			show_slide = document.querySelector(`[data-slide="${slideCount}"]`);
			show_slide.style.opacity = "1";
		}

		else if(direction === "prev"){

			let hide_slide;
			let show_slide;

			if(slideCount <= 1){
				hide_slide = document.querySelector("[data-slide='1']");
				hide_slide.style.opacity = "0";
				slideCount = 3;
				show_slide = document.querySelector(`[data-slide="${slideCount}"]`);
				show_slide.style.opacity = "1";
				return;
			}

			hide_slide = document.querySelector(`[data-slide="${slideCount}"]`);
			hide_slide.style.opacity = "0";

			slideCount--;

			show_slide = document.querySelector(`[data-slide="${slideCount}"]`);
			show_slide.style.opacity = "1";
		}	
	}

	return (
		<header className="hero-container"> 
				<section className="hero">	
					<ul className="slideshow">
						<div className="slide" data-slide="1">
							<div className="slide-content">
								<h1>The Best Doctors Near You, For You</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
								   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
								   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
								   esse cillum dolore eu fugiat nulla pariatur.
								</p>
								<Button message="Learn More" linkTo="#" buttonClass="btn-base"/>
							</div>
						</div>
						<div className="slide" data-slide="2">
							<div className="slide-content">
								<h1>DocNow Tools and Resources</h1>
								<p>Locate a doctor, find a pharmacy, make health benefits choices and more. Duis aute irure dolor in reprehenderit in voluptate velit 
								   esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit 
								   esse cillum dolore eu fugiat nulla pariatur.
								</p>
								<Button message="Learn More" linkTo="#" buttonClass="btn-base"/>
							</div>
						</div>
						<div className="slide" data-slide="3">
							<div className="slide-content">
								<h1>DocNow Tools and Resources</h1>
								<p>Locate a doctor, find a pharmacy, make health benefits choices and more. Duis aute irure dolor in reprehenderit in voluptate velit 
								   esse cillum dolore eu fugiat nulla pariatur.
								   Duis aute irure dolor in reprehenderit in voluptate velit 
								   esse cillum dolore eu fugiat nulla pariatur.
								</p>
								<Button message="Learn More" linkTo="#" buttonClass="btn-base"/>
							</div>
						</div>
					</ul>	
					<i onClick={() => triggerSlide("prev")} className="fa fa-chevron-left arrow arrow-left"></i>
					<i onClick={() => triggerSlide("next")} className="fa fa-chevron-right arrow arrow-right"></i>
				</section>
				<div className="search-container">
					<div className="search-content">
						<h4>Find A Doctor</h4>
						<div className="search-form">
							<form method="POST" action="/">
								<div className="form-group">
									<label>City</label>
									<input type="text" placeholder="Your city" />
								</div>
								<div className="form-group">
									<label>Specialty</label>
									<select className="input-select input-long">
										<option defaultValue disabled>I am searching for a...</option>
										<option>One</option>
									</select>
								</div>
								<div className="form-group">
									<label>Insurance</label>
									<input type="text" className="input-long" placeholder="Who will cover?"/>
								</div>
								<button className="btn btn-success btn-find">Find a Doctor</button>
							</form>
						</div>
					</div>
				</div>
		</header>
		);
}


export default HeroSection;