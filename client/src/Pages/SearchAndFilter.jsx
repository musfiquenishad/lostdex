import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import thumbnail1 from "./../Assets/Images/Router/P_20210609_230559.jpg";
import thumbnail2 from "./../Assets/Images/Router/P_20210609_230329.jpg";
import thumbnail3 from "./../Assets/Images/Router/P_20210609_230214.jpg";
import thumbnail4 from "./../Assets/Images/Router/P_20210609_230050.jpg";
import thumbnail5 from "./../Assets/Images/Router/P_20210609_230040.jpg";
import thumbnail6 from "./../Assets/Images/Router/P_20210609_230030.jpg";
import thumbnail7 from "./../Assets/Images/Router/P_20210609_230011.jpg";
import thumbnail8 from "./../Assets/Images/Router/P_20210609_225948.jpg";
import thumbnail9 from "./../Assets/Images/Router/P_20210609_230329.jpg";
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
						thumbnail={thumbnail1}
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail2}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail3}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail4}
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail5}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail6}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail7}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail8}
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
					<ItemCard
						thumbnail={thumbnail9}
						rewardAmount="500"
						title="This will be a small describing title of the item that losts"
						category="Electronics / Others"
						distance="500m"
						dateTime=" 02, feb, 2021"
					/>
				</div>
			</div>
		</Fragment>
	);
}

export default SearchAndFilter;
