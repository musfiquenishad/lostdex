import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

import thumbnail from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";
import ItemCard from "./../Components/ItemCard";

function FoundItems() {
	return (
		<div>
			<Navbar />

			<div className="container segment">
				<div className="user-profile-holder shadow">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-4">
							<img
								src="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
								alt="User Profile"
								className="user-profile-picture"
							/>
						</div>
						<div className="col-lg-7 col-md-7 col-8 text-start user-name-holder">
							<h4 className="user-name fw-bolder">
								Musfique Ahsan Nishad{" "}
								<span
									className="varified"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="Verified"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="currentColor"
										className="bi bi-patch-check-fill"
										viewBox="0 0 16 16"
									>
										<path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
									</svg>
								</span>
							</h4>
							<h5 className="user-id ">@ahsannishad</h5>

							<div className="row mt-3 web-view">
								<div className="col listings-number-box  text-center">
									<h4 className="fw-bolder listings-number">05</h4>
									<p className="listings-label">Listings</p>
								</div>
								<div className="col listings-number-box text-center">
									<h4 className="fw-bolder listings-number">02</h4>
									<p className="listings-label">Losts</p>
								</div>
								<div className="col listings-number-box text-center">
									<h4 className="fw-bolder listings-number">03</h4>
									<p className="listings-label">Found</p>
								</div>
							</div>
						</div>

						<div className="col-sm-12 mobile-view">
							<div className="row mt-3">
								<div className="col listings-number-box  text-center">
									<h4 className="fw-bolder listings-number">05</h4>
									<p className="listings-label">Listings</p>
								</div>
								<div className="col listings-number-box text-center">
									<h4 className="fw-bolder listings-number">02</h4>
									<p className="listings-label">Losts</p>
								</div>
								<div className="col listings-number-box text-center">
									<h4 className="fw-bolder listings-number">03</h4>
									<p className="listings-label">Found</p>
								</div>
							</div>
						</div>
						<div className="col-md-2 text-end web-view">
							<button type="button" className="btn btn-warning ">
								Contact Me
							</button>
						</div>
						<div className="col-md-2 text-start mt-3 mobile-view">
							<button type="button" className="btn btn-warning ">
								Contact Me
							</button>
						</div>
					</div>

					<hr className="profile-tabs-line text-center" />
					<nav className="nav">
						<NavLink
							activeClassName="active-tab"
							className="nav-link user-profile-tabs"
							aria-current="page"
							to="/profile"
						>
							All Listings
						</NavLink>
						<NavLink
							activeClassName="active-tab"
							className="nav-link user-profile-tabs"
							to="/lostitems"
						>
							Lost Items
						</NavLink>
						<NavLink
							activeClassName="active-tab"
							className="nav-link user-profile-tabs"
							to="/founditems"
						>
							Found Items
						</NavLink>
					</nav>
				</div>

				<div className="item-cards-holder">
					<div className="row">
						<ItemCard
							thumbnail={thumbnail}
							title="This will be a small describing title of the item that losts"
							category="Document, Invoice Paper"
							distance="500m"
							dateTime=" 02, feb, 2021"
						/>

						<ItemCard
							thumbnail={thumbnail}
							title="This will be a small describing title of the item that losts"
							category="Document, Invoice Paper"
							distance="500m"
							dateTime=" 02, feb, 2021"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FoundItems;
