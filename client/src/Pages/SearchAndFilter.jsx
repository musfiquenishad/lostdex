import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import thumbnail from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";
import ItemCard from "./../Components/ItemCard";

function SearchAndFilter() {
	const title = "This will be the title of the item";
	return (
		<Fragment>
			<Navbar />
			<div className="container segment text-center">
				<h5 className="text-center search-filter-location-heading mb-5">
					NEAR :
					<span className="search-filter-location">
						{" "}
						Shonir Akhra, Dhaka, Bangladesh
					</span>
				</h5>

				<div className="search-filter-input-box col-lg-8 col-md-8 col-sm-12 text-center">
					<div className="input-group mb-3 location-form shadow-lg text-center">
						<input
							type="text"
							className="form-control location-input"
							placeholder="Search What you looking for"
							aria-label="Search What you looking for"
							aria-describedby="button-addon2"
						/>
						<button
							className="btn btn-warning"
							type="button"
							id="button-addon2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-funnel"
								viewBox="0 0 16 16"
							>
								<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
							</svg>{" "}
							Filter
						</button>
					</div>
				</div>

				<div className="row items-grid">
					<ItemCard
						thumbnail={thumbnail}
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Document-Invoice Paper"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
				</div>
			</div>
		</Fragment>
	);
}

export default SearchAndFilter;
