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

class Home extends React.Component {

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
											<option selected disabled>I am searching for a...</option>
											<option>One</option>
										</select>
									</div>
									<div className="form-group">
										<label>Insurance</label>
										<input type="text" className="input-long" placeholder="Who will cover?"/>
									</div>
									<button className="btn btn-success btn-find"><span>Find a Doctor</span></button>
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
										
										</div>
									</div>
								</li>
								<li className="review-slide">
									<img className="user-img"src="https://randomuser.me/api/portraits/women/11.jpg"/>
									<div className="user-info">
										<p className="user-review">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
										<p className="user-name">Harold Perkins</p>
										<div className="user-stars"></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="button-container">
						<p>Are you a current user?</p>
						<a className="btn btn-success">Leaving Feedback</a>
					</div>
					<i className="fa fa-chevron-left arrow arrow-left"></i>
					<i className="fa fa-chevron-right arrow arrow-right"></i>
				</section>
			</main>
		</div>
	);

	}
}

export default Home;