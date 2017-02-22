import React from "react"; 

//Components
import Button from "../../partials/Button";
import Partners from "../../partials/Partners";
import Icon from "../../partials/Icon";

//SVG 
import FindIcon from "../../../../img/MagGlass";
import ClipboardIcon from "../../../../img/Clipboard";
import DoctorIcon from "../../../../img/Doctor";
import StarIcon from "../../../../img/Star";
import PhonePortrait from "../../../../img/Phone-Portrait";

class Home extends React.Component {

	constructor(){
		super();
		this.slide = this.slide.bind(this);
		this.slideAmount = 1;
		this.slideBy = 0;
	}

	slide(direction){
		let slideshow = document.querySelector(".slide-list");
		let slideContainer = slideshow.parentNode.getBoundingClientRect();
		let slideByVal = slideContainer.width;

		if(direction === "next"){

			this.slideAmount++;

			if(this.slideAmount > (slideshow.children.length/2)){
				this.slideAmount = slideshow.children.length/2;
				
				slideshow.classList.toggle("toggleLimit");
				
				setTimeout(() => {
					slideshow.classList.remove("toggleLimit");
				}, 500);
				return;
			} else {
				this.slideBy -= slideByVal;
				slideshow.style.marginLeft = this.slideBy + "px";
			}

		} else if(direction === "prev"){

			this.slideAmount--;

			if(this.slideAmount < 1){
				this.slideAmount = 1;
				slideshow.classList.toggle("toggleLimit");

				setTimeout(() => {
					slideshow.classList.remove("toggleLimit");
				}, 500);
				return;
			} else {
				this.slideBy += slideByVal;
				slideshow.style.marginLeft = this.slideBy + "px";
			}
		}
	}

	render(){
		return (<div>
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
								<Button message="Learn More" linkTo="#" buttonClass="btn-base"/>
							</div>
						</ul>	
						<i className="fa fa-chevron-left arrow arrow-left"></i>
						<i className="fa fa-chevron-right arrow arrow-right"></i>
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

				<section className="partners-section">
					<p>Trusted by our partners</p>
					<Partners/>
				</section>

				<section className="icons-section">
					<h2>What To Expect</h2>
					<div className="steps-icons">
						<div className="icon-container find-icon">
							<Icon iconId={FindIcon} />
							<p>Find A Doctor</p>
							<Button message="Start Searching" linkTo="#" buttonClass="btn-success"/> 
						</div>
						<div className="icon-container medical-file-icon">
							<Icon iconId={ClipboardIcon} />
							<p>Complete Your Medical File</p>
							<Button message="Complete Your File" linkTo="#" buttonClass="btn-success"/> 
						</div>
						<div className="icon-container doctor-icon">
							<Icon iconId={DoctorIcon} />
							<p>Get Consulted By An Expert</p>
							<Button message="Talk to an expert" linkTo="#" buttonClass="btn-success"/> 
						</div>
					</div>
					<svg data-star="1">
						<use xlinkHref={StarIcon}></use>
					</svg>
					<svg data-star="2">
						<use xlinkHref={StarIcon}></use>
					</svg>
					<svg data-star="3">
						<use xlinkHref={StarIcon}></use>
					</svg>
					<svg data-star="4">
						<use xlinkHref={StarIcon}></use>
					</svg>
				</section>

				<section className="reviews-section">
					<h2>See What Our Users Think</h2>
					<div className="review-slideshow">
						<div className="slide-container">
							<ul className="slide-list">
								<li className="review-slide">
									<img className="user-img" src="https://randomuser.me/api/portraits/women/16.jpg"/>
									<div className="user-info">
										<p className="user-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
										<p className="user-name">Jane Holland</p>
										<div className="user-stars">
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-unfill" aria-hidden="true"></i>
										</div>
									</div>
								</li>
								<li className="review-slide">
									<img className="user-img"src="https://randomuser.me/api/portraits/men/12.jpg"/>
									<div className="user-info">
										<p className="user-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
										<p className="user-name">Harold Perkins</p>
										<div className="user-stars">
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
										</div>
									</div>
								</li>
								<li className="review-slide">
									<img className="user-img"src="https://randomuser.me/api/portraits/women/11.jpg"/>
									<div className="user-info">
										<p className="user-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
										<p className="user-name">Jane Holland</p>
										<div className="user-stars">
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-unfill" aria-hidden="true"></i>
										</div>
									</div>
								</li>
								<li className="review-slide">
									<img className="user-img"src="https://randomuser.me/api/portraits/women/11.jpg"/>
									<div className="user-info">
										<p className="user-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
										<p className="user-name">Harold Perkins</p>
										<div className="user-stars">
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-fill" aria-hidden="true"></i>
											<i className="fa fa-star star star-unfill" aria-hidden="true"></i>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="button-container">
						<p>Are you a current user?</p>
						<a className="btn btn-success">Leaving Feedback</a>
					</div>
					<i onClick={() => this.slide("prev")} className="fa fa-chevron-left arrow arrow-left"></i>
					<i onClick={() => this.slide("next")} className="fa fa-chevron-right arrow arrow-right"></i>
				</section>

				<section className="download-app-section">
					<div className="phone-illustration">
						<svg data-star="5">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="6">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="7">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="8">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="9">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="10">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg className="phone-portrait">
							<use xlinkHref={PhonePortrait}></use>
						</svg>		
					</div>
					<div className="download-stores">
						<h2>Download the DocNow	app</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<div className="store-buttons">
							<a href="#" className="btn ios-store-btn btn-success"><i className="fa fa-apple" aria-hidden="true"></i>Download for iOS</a>
							<a href="#" className="btn android-store-btn btn-success"><i className="fa fa-android" aria-hidden="true"></i>Download for Android</a>
						</div>
					</div>
				</section>
				<div className="doctors-CTA">
						<svg data-star="11">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="12">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="13">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="14">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="15">
							<use xlinkHref={StarIcon}></use>
						</svg>
						<svg data-star="16">
							<use xlinkHref={StarIcon}></use>
						</svg>
					<p>Are you a doctor or medical expert? Getting certified means reaching more patients</p>
					<a href="#" className="btn btn-white-border">Get Certified Today</a>
				</div>
			</main>
		</div>
	);
	}
}

export default Home;