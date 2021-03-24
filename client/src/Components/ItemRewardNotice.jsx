import React from "react";

function ItemRewardNotice(props) {
	return (
		<div class="card contact-card">
			<div class="card-body">
				<h4 class="card-title text-center mb-3">{props.RewardAmount + "$"}</h4>
				<p class="card-text text-center">
					{"The person who return this item will be rewarded " +
						props.RewardAmount +
						"$"}
				</p>
				<div class="d-grid gap-2">
					<button class="btn btn-warning" type="button">
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
}

export default ItemRewardNotice;
