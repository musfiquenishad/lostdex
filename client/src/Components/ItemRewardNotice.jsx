import React from "react";

function ItemRewardNotice(props) {
	return (
		<div className="card contact-card">
			<div className="card-body">
				<h4 className="card-title text-center mb-3">
					{props.RewardAmount + "$"}
				</h4>
				<p className="card-text text-center">
					{"The person who return this item will be rewarded " +
						props.RewardAmount +
						"$"}
				</p>
				<div className="d-grid gap-2">
					<button className="btn btn-warning" type="button">
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
}

export default ItemRewardNotice;
