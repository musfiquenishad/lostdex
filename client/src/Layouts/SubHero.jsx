import React from "react";
import subHeroImage from "./../Assets/Images/animation_500_kl89pxng.gif";

function SubHero() {
	return (
		<div className="sub-hero-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm">
						<h1 className="sub-hero-heading">
							We are committed to helping <br className="sub-hero-brake" /> you
							find your lost belongings
						</h1>

						<div className="card p-2 sub-hero-card">
							<div className="card-body">
								<h4 className="card-title">List Item on Lostdex</h4>
								<p className="card-text">
									Would you like Thousend of users to see your lost item’s
									notice?
								</p>
								<p className="card-text">
									You just list your lost item on Lostdex and we handle the
									rest. From organizing your lost notice to finding the items
								</p>
								<div className="text-end">
									<a href="#" className="btn btn-warning">
										Get Started
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm">
						<img
							width="100%"
							src={subHeroImage}
							alt="sub hero gif animation"
							className="sub-hero-image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubHero;
