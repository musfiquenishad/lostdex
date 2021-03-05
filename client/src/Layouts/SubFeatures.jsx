import React from "react";
import featuresImage from "./../Assets/Images/undraw_Map_dark_k9pw.png";

function SubFeatures() {
	return (
		<div className="sub-features-section ">
			<div className="container">
				<div className="row web-view">
					<div className=".col-lg-6 col-md-6 col-sm pb-5">
						<h1 className="features-heading mb-3">Get Directions</h1>
						<p className="features-sub-heading">
							Find anything within five kilometre. Our algorithm is designed to
							help you find your item whithin five kilometre range
						</p>
					</div>
					<div className=".col-lg-6 col-md-6 col-sm">
						<img
							src={featuresImage}
							alt="gift illustration"
							width="100%"
							className="sub-features-image"
						/>
					</div>
				</div>
				<div className="row mobile-view">
					<div className=".col-lg-6 col-md-6 col-sm">
						<img
							src={featuresImage}
							alt="gift illustration"
							width="100%"
							className="sub-features-image"
						/>
					</div>
					<div className=".col-lg-6 col-md-6 col-sm pb-5">
						<h1 className="features-heading mb-3">Get Directions</h1>
						<p className="features-sub-heading">
							Find anything within five kilometre. Our algorithm is designed to
							help you find your item whithin five kilometre range
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubFeatures;
