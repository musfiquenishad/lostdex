import React from "react";
import { useState } from "react";
import DeskTopPreviewImages from "../Components/DeskTopPreviewImages";
import ItemDescription from "../Components/ItemDescription";
import ItemRewardNotice from "../Components/ItemRewardNotice";
import ItemTitle from "../Components/ItemTitle";
import MobilePreviewImages from "../Components/MobilePreviewImages";
import Navbar from "../Components/Navbar";
import PublishedBy from "../Components/PublishedBy";
import PreviewImage1 from "./../Assets/Images/Router/P_20210609_230214.jpg";
import PreviewImage2 from "./../Assets/Images/Router/P_20210609_230329.jpg";
import PreviewImage3 from "./../Assets/Images/Router/P_20210609_230559.jpg";
import PreviewImage4 from "./../Assets/Images/Router/P_20210609_230040.jpg";
import PreviewImage5 from "./../Assets/Images/Router/P_20210609_230050.jpg";

function ItemDetails() {
	const [categorys] = useState(["Electronics", "Router"]);
	return (
		<div>
			<Navbar />
			{/* Desktop View */}
			<div className="container segment desktop-view-item-details">
				<ItemTitle ItemTitle="TP-Link TL-wn727n 150mbps router" />
				<div className="row  item-category-location">
					<div className=" col item-category-and-location">
						<span className="text-muted">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-geo-fill location-icon"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
								/>
							</svg>{" "}
							Sonir Akhra, Dhaka-1236
						</span>

						<nav aria-label="breadcrumb" className="item-category">
							<ol className="breadcrumb">
								<li>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-dot"
										viewBox="0 0 16 16"
									>
										<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									</svg>
								</li>

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
					</div>
				</div>

				<DeskTopPreviewImages
					PreviewImage1={PreviewImage1}
					PreviewImage2={PreviewImage2}
					PreviewImage3={PreviewImage3}
					PreviewImage4={PreviewImage4}
					PreviewImage5={PreviewImage5}
				/>
				<div className="row">
					<div className="col-lg-8 col-md-8">
						<div className="table-responsive">
							<PublishedBy
								ProfilePic="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
								DateTime="02, february, 21 at 10 am"
							/>
						</div>
						<ItemDescription ItemDescription="Lorem ipsum dolor sit amet consectetur adipiscing, elit venenatis aliquam penatibus felis. Nullam mi cras enim tristique a elementum massa litora habitasse, diam eleifend turpis risus justo rhoncus fames suspendisse, ornare felis nam eu primis dis quisque tempus. Porttitor vestibulum" />
					</div>
					<div className="col-lg-4 col-md-4">
						<ItemRewardNotice RewardAmount="500" />
					</div>
				</div>
			</div>
			{/* Desktop View */}

			{/* Mobile View */}

			<div className="mobile-view-item-details">
				<MobilePreviewImages
					PreviewImage1={PreviewImage1}
					PreviewImage2={PreviewImage2}
					PreviewImage3={PreviewImage3}
					PreviewImage4={PreviewImage4}
					PreviewImage5={PreviewImage5}
				/>

				<div className="container mt-3">
					<ItemTitle ItemTitle="Lorem ipsum dolor sit amet consectetur abc" />
					<div className="row  item-category-location">
						<div className=" col item-category-and-location">
							<span className="text-muted item-location">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-geo-fill location-icon"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
									/>
								</svg>{" "}
								Sonir Akhra, Dhaka-1236
							</span>
							<nav aria-label="breadcrumb" className="item-category">
								<ol className="breadcrumb">
									{categorys.map((category, index) => {
										return (
											<li
												key={index}
												className="breadcrumb-item active"
												aria-current="page"
											>
												{category}
											</li>
										);
									})}
								</ol>
							</nav>
						</div>
					</div>
					<hr />
					<div className="table-responsive">
						<PublishedBy
							ProfilePic="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
							DateTime="02, february, 21 at 10 am"
						/>
					</div>

					<div className="mobile-description-holder">
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing, elit venenatis
							aliquam penatibus felis. Nullam mi cras enim tristique a elementum
							massa litora habitasse, diam eleifend turpis risus justo rhoncus
							fames suspendisse, ornare felis nam eu primis dis quisque tempus.
							Porttitor vestibulum
						</p>
					</div>

					<div className="mobile-contact-card fixed-bottom">
						<div className="row">
							<div className="col-5">
								<h4 className="text-center reward-number">500$</h4>
								<p className="text-center reward-label">Reward</p>
							</div>
							<div className="col-7 contact-button-holder">
								<button
									className="btn btn-lg btn-warning contact-button "
									type="button"
								>
									Contact Me
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile View */}
		</div>
	);
}

export default ItemDetails;
