import React from "react";
import subHeroImage from "./../Assets/Images/animation_500_kl89pxng.gif";

function CallToAction() {
	return (
		<div className="call-to-action-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm text-center">
						<h1 className="call-to-action-heading">
							We are committed to helping <br className="sub-hero-brake" /> you
							find your lost belongings
						</h1>
					</div>
					<div className="col-lg-4 col-md-4 col-sm text-center">
						<a
							href="/signup"
							type="button"
							className="btn btn-lg btn-light call-to-action-button"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CallToAction;
