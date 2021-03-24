import React from "react";

function ProfileItemCard(props) {
	return (
		<div className="col-lg-4 col-md-4 col-sm text-start">
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
				<p className="text-muted">
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
						<h5 className="distance-number text-muted">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-geo-fill"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
								/>
							</svg>{" "}
							{props.distance}
						</h5>
						<p className="distance-label text-muted">away</p>
					</div>
					<div className="col">
						<p className="date-time text-muted">{props.dateTime}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileItemCard;
