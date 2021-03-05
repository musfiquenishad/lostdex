import React from "react";

function ItemCard(props) {
	return (
		<div className="col-lg-3 col-md-4 col-sm text-start">
			<div className="thumbnail-holder">
				{props.rewardAmount ? (
					<div className="reward sticky-top">
						<h6>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-award-fill"
								viewBox="0 0 16 16"
							>
								<path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
								<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
							</svg>{" "}
							{props.rewardAmount + " $ "}
						</h6>
					</div>
				) : (
					<div className="found-label bg-success">
						<h6>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-star-fill"
								viewBox="0 0 16 16"
							>
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
							</svg>{" "}
							Found Item
						</h6>
					</div>
				)}

				<img
					width="100%"
					className="item-thumbnail"
					src={props.thumbnail}
					alt="item thumbnail"
				/>
			</div>
			<div className="description-holder">
				<h6 className=" text-start title">
					{props.title.substring(0, 100) + "..."}
				</h6>
				<p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-stack"
						viewBox="0 0 16 16"
					>
						<path d="M14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
						<path d="M14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
					</svg>{" "}
					{props.category}
				</p>

				<div className="row distance-date-row">
					<div className="col text-start">
						<h5 className="distance-number">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-compass-fill"
								viewBox="0 0 16 16"
							>
								<path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
							</svg>{" "}
							{props.distance}
						</h5>
						<p className="distance-label">away</p>
					</div>
					<div className="col">
						<p className="date-time">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-calendar-event-fill"
								viewBox="0 0 16 16"
							>
								<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
							</svg>{" "}
							{props.dateTime}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
