import React from "react";
import Navbar from "../Components/Navbar";
import ProfileItemCard from "../Components/ProfileItemCard";
import thumbnail from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";
import ItemCard from "./../Components/ItemCard";

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
								<div className="col-6">
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected>Sort by</option>
										<option value="1">New First</option>
										<option value="2">Old First</option>
										<option value="3">Nearest First</option>
									</select>
								</div>
							</div>

							<div className="users-all-listings mt-5">
								<div class="card mb-3">
									<div class="row g-0">
										<div class="col-sm-4">
											<img width="100%" src={thumbnail} alt="Item Thumbnail" />
										</div>
										<div class="col-sm-8">
											<div class="card-body">
												<div className="row">
													<div className="col-10">
														<h5 className="card-title">Card Title</h5>
													</div>
													<div className="col-2 text-end">
														<button type="button" class=" three-dot-button">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																class="bi bi-three-dots"
																viewBox="0 0 16 16"
															>
																<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
															</svg>
														</button>
													</div>
												</div>

												<p class="card-text">
													This is a wider card with supporting text below as a
													natural lead-in to additional content. This content is
													a little bit longer.
												</p>
												<p class="card-text align-end">
													<small class="text-muted">02, february, 2021</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
