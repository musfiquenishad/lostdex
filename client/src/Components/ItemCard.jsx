import React from "react";
import { useState } from "react";

function ItemCard(props) {
	const [categorys] = useState(["Electronics", "Router"]);
	return (
		<div className="col-lg-3 col-md-4 col-sm text-start">
			<a className="details-link" href="/details">
				<div className="thumbnail-holder">
					{props.rewardAmount ? (
						<div className="reward sticky-top">
							<h6>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-award-fill"
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
									className="bi bi-star-fill"
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
					<nav aria-label="breadcrumb" className="text-muted">
						<ol className="breadcrumb mb-2">
							{categorys.map((category, index) => {
								return (
									<li
										className="breadcrumb-item active"
										aria-current="page"
										key={index}
									>
										{category}
									</li>
								);
							})}
						</ol>
					</nav>

					<h6 className=" text-start title">
						{props.title.substring(0, 100) + "..."}
					</h6>

					<div className="row distance-date-row">
						<div className="col text-start">
							<h5 className="distance-number text-dark">{props.distance}</h5>
							<p className="distance-label text-muted">away</p>
						</div>
						<div className="col">
							<p className="date-time text-muted">{props.dateTime}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default ItemCard;
