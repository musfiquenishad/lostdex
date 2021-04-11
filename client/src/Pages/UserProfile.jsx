import React from "react";
import ItemCardProfile from "../Components/ItemCardProfile";
import Navbar from "../Components/Navbar";
import ProfileItemCard from "../Components/ProfileItemCard";
import thumbnail from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";

function UserProfile() {
	return (
		<div>
			<Navbar />
			<div className="segment">
				<div className="container mt-5">
					<div className="row">
						<div className="col-lg-4 col-md-4 user">
							<div className="profile-card shadow">
								<div className="cover "></div>
								<div className="profile-pic-holder text-center">
									<img
										className="profile-picture"
										src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.0-1/p160x160/123674333_1218376621882766_4037199215118466441_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=iHGcMaKrjj0AX8H75b1&_nc_ht=scontent.fdac116-1.fna&tp=6&oh=59378c4027312b6618f45a2e7ddf926a&oe=606D362C"
										alt="Profile Picture"
									/>
								</div>
								<div className="username-holder text-center">
									<h4 className="username">Ahsan Nishad</h4>
									<h6 className="userurl">@ahannishad</h6>
								</div>
								<div className="row user-total-posts">
									<div className="col user-post-insight">
										<div className="total-posts text-center">
											<h3 className="posts-counting-number">05</h3>
											<p className="posts-counting-label">POSTS</p>
										</div>
										<hr className="vertical-line-user" width="2" size="60" />
									</div>
									<div className="col user-post-insight">
										<div className="total-posts-losts text-center">
											<h3 className="posts-counting-number">03</h3>
											<p className="posts-counting-label">LOST</p>
										</div>
										<hr className="vertical-line-user" width="2" size="60" />
									</div>
									<div className="col user-post-insight">
										<div className="total-posts-found text-center">
											<h3 className="posts-counting-number">02</h3>
											<p className="posts-counting-label">FOUND</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-8 col-md-8 mt-3 users-listings">
							<div className="row total-listing-label-sort-by">
								<div className="col-6">
									<h4 className="total-listing-label">5 Listings</h4>
								</div>
								<div className="col-6 ">
									<select className="form-select " aria-label="Default select">
										<option defaultValue>Sort by</option>
										<option value="1">New First</option>
										<option value="2">Old First</option>
										<option value="3">Nearest First</option>
									</select>
								</div>
							</div>

							<div className="users-all-listings mt-5">
								<ItemCardProfile
									thumbnail={thumbnail}
									title="Canadian Passport Lost"
									category="Passport"
									description="I lost my canadian Passport while traveling in Bangladesh.
									 If anyone found this please return it to me"
									dateTime="02, February, 2021"
								/>
								<ItemCardProfile
									thumbnail={thumbnail}
									title="Canadian Passport Lost"
									category="Passport"
									description="I lost my canadian Passport while traveling in Bangladesh.
									 If anyone found this please return it to me"
									dateTime="02, February, 2021"
								/>
								<ItemCardProfile
									thumbnail={thumbnail}
									title="Canadian Passport Lost"
									category="Passport"
									description="I lost my canadian Passport while traveling in Bangladesh.
									 If anyone found this please return it to me"
									dateTime="02, February, 2021"
								/>
								<ItemCardProfile
									thumbnail={thumbnail}
									title="Canadian Passport Lost"
									category="Passport"
									description="I lost my canadian Passport while traveling in Bangladesh.
									 If anyone found this please return it to me"
									dateTime="02, February, 2021"
								/>
							</div>

							<div className="pagination-holder  mt-5">
								<nav aria-label="Page navigation example">
									<ul className="pagination justify-content-center">
										<li className="page-item disabled">
											<a
												className="page-link"
												href="#"
												tabIndex="-1"
												aria-disabled="true"
											>
												Previous
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												Next
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
