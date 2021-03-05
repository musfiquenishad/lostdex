import React from "react";
import featuresImage from "./../Assets/Images/Gift-amico.png";
function Features() {
	return (
		<div className="features-section">
			<div className="container">
				<div className="row">
					<div className=".col-lg-6 col-md-6 col-sm mt-5">
						<img
							src={featuresImage}
							alt="gift illustration"
							width="100%"
							className="features-image"
						/>
					</div>
					<div className=".col-lg-6 col-md-6 col-sm pb-5">
						<h1 className="features-heading mb-3">Reward System</h1>
						<p className="features-sub-heading">
							You can select an amount of reward money. when the person finds
							the item you lost and returns it to you then you can reward him.
							Reward system will inspire people to return your lost item to you.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
