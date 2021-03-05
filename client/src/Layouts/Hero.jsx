import React from "react";
import heroImage from "./../Assets/Images/animation_500_kle9wjmi.gif";
function Hero() {
	return (
		<div className="container hero-section">
			<div className="row">
				<div className="col-lg-7 col-md-7 col-sm">
					<h1 className="hero-heading">Recently Lost something?</h1>

					<div className="input-group mb-3 location-form shadow-lg">
						<input
							type="text"
							className="form-control location-input"
							placeholder="Enter the location"
							aria-label="Enter the location"
							aria-describedby="button-addon2"
						/>
						<button
							className="btn btn-warning"
							type="button"
							id="button-addon2"
						>
							Search
						</button>
					</div>
				</div>
				<div className="col-lg-5 col-md-5 col-sm">
					<img width="100%" src={heroImage} alt="hero gif" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
