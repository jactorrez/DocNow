import React from "react"; 

//Components
import Button from "../../partials/Button";
import Partners from "../../partials/Partners";
import Icon from "../../partials/Icon";
import HeroSection from "./Hero-Section";
import ReviewSlideShow from "./Review-Slideshow";
import Footer from "./Footer";

//SVG 
import FindIcon from "../../../../img/MagGlass";
import ClipboardIcon from "../../../../img/Clipboard";
import DoctorIcon from "../../../../img/Doctor";
import StarIcon from "../../../../img/Star";
import PhonePortrait from "../../../../img/Phone-Portrait";

class Home extends React.Component {

	render(){
		return (<div>
			<main>
				<HeroSection/>	

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

				<ReviewSlideShow/>

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
						<svg data-star="<16></16>">
							<use xlinkHref={StarIcon}></use>
						</svg>
					<p>Are you a doctor or medical expert? Getting certified means reaching more patients</p>
					<a href="#" className="btn btn-white-border">Get Certified Today</a>
				</div>
			</main>
			<Footer/>
		</div>
	);
	}
}

export default Home;