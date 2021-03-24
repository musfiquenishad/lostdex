import React from "react";
import CategoryLocation from "../Components/CategoryLocation";
import DeskTopPreviewImages from "../Components/DeskTopPreviewImages";
import ItemDescription from "../Components/ItemDescription";
import ItemRewardNotice from "../Components/ItemRewardNotice";
import ItemTitle from "../Components/ItemTitle";
import MobilePreviewImages from "../Components/MobilePreviewImages";
import Navbar from "../Components/Navbar";
import PublishedBy from "../Components/PublishedBy";
import PreviewImage1 from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";

function ItemDetails() {
	return (
		<div>
			<Navbar />
			{/* Desktop View */}
			<div className="container segment desktop-view-item-details">
				<ItemTitle ItemTitle="Lorem ipsum dolor sit amet consectetur abc" />
				<CategoryLocation
					Category="Invoice Paper"
					Location="Sonirakhra, Dhaka-1236"
				/>
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
					<CategoryLocation
						Category="Invoice Paper"
						Location="Sonirakhra, Dhaka-1236"
					/>
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
					<div class="card contact-card">
						<div class="card-body">
							<h4 class="card-title text-center mb-3">{"500$"}</h4>
							<p class="card-text text-center">
								{"The person who return this item will be rewarded 500$"}
							</p>
							<div class="d-grid gap-2">
								<button class="btn btn-warning" type="button">
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
