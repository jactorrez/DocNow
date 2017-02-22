import React from "react";


class ReviewSlideShow extends React.Component{

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
		return (<section className="reviews-section">
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
			</section>);
	}
}

export default ReviewSlideShow;