import React from "react";
import { useState } from "react";
import DeskTopPreviewImages from "../Components/DeskTopPreviewImages";
import ItemDescription from "../Components/ItemDescription";
import ItemRewardNotice from "../Components/ItemRewardNotice";
import ItemTitle from "../Components/ItemTitle";
import MobilePreviewImages from "../Components/MobilePreviewImages";
import Navbar from "../Components/Navbar";
import PublishedBy from "../Components/PublishedBy";
import PreviewImage1 from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";

function ItemDetails() {
	const [categorys] = useState(["Document", "Invoice"]);
	return (
		<div>
			<Navbar />
			{/* Desktop View */}
			<div className="container segment desktop-view-item-details">
				<ItemTitle ItemTitle="Lorem ipsum dolor sit amet consectetur abc" />
				<div className="row  item-category-location">
					<div className=" col item-category-and-location">
						<span className="text-muted">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-geo-fill"
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
					PreviewImage2={PreviewImage1}
					PreviewImage3={PreviewImage1}
					PreviewImage4={PreviewImage1}
					PreviewImage5={PreviewImage1}
				/>
				<div className="row">
					<div className="col-lg-8 col-md-8">
						<PublishedBy
							ProfilePic="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.0-1/p160x160/123674333_1218376621882766_4037199215118466441_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=iHGcMaKrjj0AX8H75b1&_nc_ht=scontent.fdac116-1.fna&tp=6&oh=59378c4027312b6618f45a2e7ddf926a&oe=606D362C"
							DateTime="02, february, 21 at 10 am"
						/>
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
					PreviewImage2={PreviewImage1}
					PreviewImage3={PreviewImage1}
					PreviewImage4={PreviewImage1}
					PreviewImage5={PreviewImage1}
				/>

				<div className="container mt-3">
					<ItemTitle ItemTitle="Lorem ipsum dolor sit amet consectetur abc" />
					<div className="row  item-category-location">
						<div className=" col item-category-and-location">
							<span className="text-muted">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-geo-fill"
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
					<ItemDescription
						ItemDescription="Lorem ipsum dolor sit amet consectetur adipiscing, elit 
				venenatis aliquam penatibus felis. Nullam mi cras enim tristique a elementum massa litora 
				habitasse, diam eleifend turpis risus justo rhoncus fames suspendisse, ornare felis nam eu 
				primis dis quisque tempus. Porttitor vestibulum"
					/>
					<hr />
					<PublishedBy
						ProfilePic="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.0-1/p160x160/123674333_1218376621882766_4037199215118466441_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=iHGcMaKrjj0AX8H75b1&_nc_ht=scontent.fdac116-1.fna&tp=6&oh=59378c4027312b6618f45a2e7ddf926a&oe=606D362C"
						DateTime="02, february, 21 at 10 am"
					/>
					<div className="card contact-card">
						<div className="card-body">
							<h4 className="card-title text-center mb-3">{"500$"}</h4>
							<p className="card-text text-center">
								{"The person who return this item will be rewarded 500$"}
							</p>
							<div className="d-grid gap-2">
								<button className="btn btn-warning" type="button">
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
