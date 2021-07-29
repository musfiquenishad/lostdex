import React, { Fragment, useState } from "react";
import Navbar from "./../Components/Navbar";
import thumbnail from "./../Assets/Images/jaimie-harmsen-8d9jdqyGaQA-unsplash.jpg";
import Pagination from "./../Components/Pagination";
import PlacesAutocomplete, {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from "react-places-autocomplete";

function ManageItem() {
	const [images, setImages] = useState([]);
	const [showSelected, setShowSelected] = useState(false);
	const [subCategory, setSubCategory] = useState([]);
	const [showSubCategory, setShowSubCategory] = useState(false);
	const [step, setStep] = useState(1);
	const [address, setAddress] = useState("");
	const [coordinates, setCoordinates] = React.useState({
		lat: null,
		lng: null,
	});
	function handleChange(event) {
		if (event.target.files) {
			const imagesArray = Array.from(event.target.files).map((image) =>
				URL.createObjectURL(image)
			);

			setImages((prevImages) => prevImages.concat(imagesArray));

			Array.from(event.target.files).map(
				(image) => URL.revokeObjectURL(image) // avoid memory leak
			);
		}
	}
	const handleSelect = async (value) => {
		const results = await geocodeByAddress(value);
		const latLng = await getLatLng(results[0]);
		setAddress(value);
		setCoordinates(latLng);
	};

	async function removeImage(index) {
		images.splice(index, 1);
		setImages([...images]);
	}

	const previewImages = (images) => {
		return images.map((photo, index) => {
			return (
				<div className="col-4 preview-image-col p-2" key={index}>
					<button
						id={index}
						type="button"
						className="preview-image-remove-button btn btn-warning btn-sm"
						onClick={() => {
							removeImage(index);
						}}
						name="remove Image"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-x-circle-fill"
							viewBox="0 0 16 16"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
						</svg>
					</button>
					<img
						src={photo}
						alt="Preview Images"
						className="rounded img-fluid preview-image"
					/>
				</div>
			);
		});
	};

	function selectCategory(event) {
		if (event.target.value === "Humans") {
			setSubCategory([
				"Children(1-12 Years)",
				"Teen (13-19 Years)",
				"Adult (20-40 Years) ",
				"Old (Over 41 Years)",
			]);

			setShowSubCategory(true);
		} else if (event.target.value === "Documents") {
			setSubCategory([
				"Deed Papers",
				"Invoice Paper",
				"Banking Documents",
				"Bank Checks",
				"Tickets",
				"Note Book",
				"Magazine",
				"Others",
			]);

			setShowSubCategory(true);
		} else if (event.target.value === "Electronics") {
			setSubCategory([
				"Laptop",
				"Tab",
				"Camera",
				"Computer Accessories",
				"Headphone, Buds, Accessories",
				"Adapter",
				"Remote",
				"Smart Watch",
				"Others",
			]);

			setShowSubCategory(true);
		} else if (event.target.value === "Mobile & Accessories") {
			setSubCategory([
				"Smartphone",
				"Feature Phone",
				"Power Bank",
				"Charger",
				"Others",
			]);

			setShowSubCategory(true);
		} else if (event.target.value === "Certificates") {
			setSubCategory([
				"School/College Certificates",
				"Board Certificates",
				"Birth Certificates",
				"Dead Certificates",
				"Testimonial Certificates",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "Id Cards") {
			setSubCategory([
				"Id Cards",
				"National Id Card",
				"School/College/University Id Card",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "Bags") {
			setSubCategory([
				"Bags",
				"Purse",
				"Money Bag",
				"Gym Bag",
				"School Bag",
				"Office Bag",
				"Grocery Bag",
				"Belt Bag",
				"Camera Bag",
				"Laptop Bag",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "Keys") {
			setSubCategory([
				"Home Key",
				"Vehicles Key",
				"Office Key",
				"Store Key",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "License") {
			setSubCategory(["Driving License", "Trade License", "Others"]);
			setShowSubCategory(true);
		} else if (event.target.value === "Vehicles") {
			setSubCategory(["Car", "Van", "Motor Bike", "Bicycle", "Pickup Van"]);
			setShowSubCategory(true);
		} else if (event.target.value === "Passport & Visa") {
			setSubCategory(["Passport", "Nationality Card (Green Card)", "Others"]);
			setShowSubCategory(true);
		} else if (event.target.value === "Pets & Animals") {
			setSubCategory(["Birds", "Cats", "Dogs", "Rabbits", "Others"]);
			setShowSubCategory(true);
		} else if (event.target.value === "Fashion & Beauty") {
			setSubCategory([
				"Wrist Band",
				"Shoe",
				"Bracelet",
				"Ring",
				"Necklace",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "Sports & Hobbies") {
			setSubCategory([
				"Guitar",
				"Cricket Bat",
				"Cricket Ball",
				"Badminton Bat",
				"Tennis Bat",
				"Tennis Ball",
				"Hand Glub",
				"Others",
			]);
			setShowSubCategory(true);
		} else if (event.target.value === "Book & Stationary") {
			setSubCategory(["Book", "Notebook", "Stationary", "Diary", "Others"]);
			setShowSubCategory(true);
		}
	}

	return (
		<Fragment>
			<Navbar />
			<div className="segment container">
				<div className="row">
					<div className="col text-end">
						<button
							type="button"
							className="btn btn-warning"
							data-bs-toggle="modal"
							data-bs-target="#uploadItemModal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus-square-dotted"
								viewBox="0 0 16 16"
							>
								<path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
							</svg>{" "}
							List Item
						</button>
					</div>
				</div>

				<div className="row manage-item-holder shadow ">
					<div className="col ">
						{/* Desktop view */}
						<table class="table desktop-view">
							{showSelected && (
								<thead className="table-dark  align-middle bulk-action">
									<tr>
										<th scope="col" className="text-center">
											2 selected
										</th>
										<th scope="col btn-sm">
											<button type="button" className="btn btn-danger">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-trash"
													viewBox="0 0 16 16"
												>
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
													<path
														fillRule="evenodd"
														d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
													/>
												</svg>{" "}
												Delete
											</button>
										</th>
									</tr>
								</thead>
							)}

							<thead>
								<tr>
									<th scope="col">
										<div>
											<input
												className="form-check-input"
												onChange={(event) => {
													if (event.target.checked) {
														setShowSelected(true);
													} else {
														setShowSelected(false);
													}
												}}
												type="checkbox"
												id="checkboxNoLabel"
												value=""
												aria-label="..."
											/>
										</div>
									</th>
									<th scope="col">Preview</th>
									<th scope="col">Title</th>
									<th scope="col">Category</th>
									<th scope="col">Date</th>
								</tr>
							</thead>
							<tbody>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
											width="100px"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>Passport Losts in Dhaka Bangladesh</td>
									<td>Passport</td>
									<td>02, Feb, 2020</td>
								</tr>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="http://localhost:3000/static/media/demo.8e5a5b07.jpeg"
											width="100px"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>Passport Losts in Dhaka Bangladesh</td>
									<td>Passport</td>
									<td>02, Feb, 2020</td>
								</tr>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
											width="100px"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>Passport Losts in Dhaka Bangladesh</td>
									<td>Passport</td>
									<td>02, Feb, 2020</td>
								</tr>
							</tbody>
						</table>

						{/* Mobile View */}
						<table class="table mobile-view">
							{showSelected && (
								<thead className="table-dark  align-middle ">
									<tr>
										<th scope="col" className="text-center">
											2 selected
										</th>
										<th scope="col" colSpan="3">
											<button type="button" className="btn btn-danger">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-trash"
													viewBox="0 0 16 16"
												>
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
													<path
														fillRule="evenodd"
														d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
													/>
												</svg>{" "}
												Delete
											</button>
										</th>
									</tr>
								</thead>
							)}
							<thead>
								<tr>
									<th scope="col">
										<div>
											<input
												className="form-check-input"
												onChange={(event) => {
													if (event.target.checked) {
														setShowSelected(true);
													} else {
														setShowSelected(false);
													}
												}}
												type="checkbox"
												id="checkboxNoLabel"
												value=""
												aria-label="..."
											/>
										</div>
									</th>
									<th scope="col">Preview</th>
									<th scope="col">Title</th>
								</tr>
							</thead>
							<tbody>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="http://localhost:3000/static/media/demo.8e5a5b07.jpeg"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>
										Passport Losts in Dhaka Bangladesh
										<p className="text-muted fs-6">Last Saturday at 10:53 PM</p>
									</td>
								</tr>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>
										Passport Losts in Dhaka Bangladesh
										<p className="text-muted fs-6">Last Saturday at 10:53 PM</p>
									</td>
								</tr>
								<tr className="align-middle">
									<th scope="row">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="flexCheckDefault"
											/>
											<label
												class="form-check-label"
												for="flexCheckDefault"
											></label>
										</div>
									</th>
									<td>
										<img
											src="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
											alt="Preview Item"
											className="preview-thumbnail"
										/>
									</td>
									<td>
										Passport Losts in Dhaka Bangladesh
										<p className="text-muted fs-6">Last Saturday at 10:53 PM</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<form
					onSubmit={(event) => {
						event.preventDefault();
						console.log("Form Submited");
					}}
				>
					<div
						className="modal fade"
						id="uploadItemModal"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-lg  modal-dialog-scrollable">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										Upload An Item
									</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>

								{/* Modal Body */}
								<div className="modal-body">
									{step === 1 ? (
										<div className="container text-center">
											<div className="row">
												<div className="col text-center mt-3">
													<h3>Item Type</h3>
													<p>
														If you need more info, please check out{" "}
														<a href="#">FAQ Page</a>
													</p>
												</div>
											</div>
											<div className=" mb-3 mt-3">
												<input
													className="form-check-input lost-item-input"
													type="radio"
													name="flexRadioDefault"
													id="flexRadioDefault1"
												/>
												<label
													className="form-check-label lost-item-input-label"
													htmlFor="flexRadioDefault1"
												>
													<div>
														<div className="row g-0 p-2">
															<div className="col-2">
																<div className="mt-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		className="bi bi-search found-item-icon"
																		viewBox="0 0 16 16"
																	>
																		<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
																	</svg>
																</div>
															</div>
															<div className="col-10">
																<div className="card-body text-start">
																	<h4>Lost Item</h4>
																	<p className="card-text">
																		Lost Something? List it now. So someone can
																		return it to you
																	</p>
																</div>
															</div>
														</div>
													</div>
												</label>
											</div>
											<div className=" mb-5">
												<input
													className="form-check-input found-item-input"
													type="radio"
													name="flexRadioDefault"
													id="flexRadioDefault2"
												/>
												<label
													className="form-check-label found-item-input-label"
													htmlFor="flexRadioDefault2"
												>
													<div>
														<div className="row g-0 p-2">
															<div className="col-2">
																<div className="mt-4">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		className="bi bi-file-earmark-arrow-up found-item-icon"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
																		<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
																	</svg>
																</div>
															</div>
															<div className="col-10">
																<div className="card-body text-start">
																	<h4>Found Item</h4>
																	<p className="card-text">
																		Found Something? List it now. So someone can
																		find their item.
																	</p>
																</div>
															</div>
														</div>
													</div>
												</label>
											</div>
										</div>
									) : (
										<div>
											{/* Image Preview Before upload */}
											<div className="container">
												<div className="preview-image-box">
													<div className="row ">
														{previewImages(images)}

														{/* Image selector */}

														{images.length > 0 && images.length < 6 ? (
															<div className="col-4 p-2">
																<div className="image-selector-box">
																	<input
																		type="file"
																		className="image-selector"
																		id="image-selector"
																		onChange={handleChange}
																		multiple
																		accept="image/png"
																	/>
																	<label
																		htmlFor="image-selector"
																		className="image-selector-label"
																	>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			width="16"
																			height="16"
																			fill="currentColor"
																			className="bi bi-plus image-selector-icon"
																			viewBox="0 0 16 16"
																		>
																			<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																		</svg>
																	</label>
																</div>
															</div>
														) : null}

														{images.length < 1 ? (
															<div className="image-selector-holder">
																<div className="row ">
																	<div className="col image-selector-col">
																		<input
																			type="file"
																			className="image-selector"
																			id="image-selector"
																			onChange={handleChange}
																			multiple
																			accept="image/png"
																		/>
																		<label
																			htmlFor="image-selector"
																			className="image-selector-label btn btn-warning"
																		>
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="16"
																				height="16"
																				fill="currentColor"
																				className="bi bi-plus-square-dotted"
																				viewBox="0 0 16 16"
																			>
																				<path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
																			</svg>{" "}
																			Choose Images
																		</label>
																	</div>
																</div>
																<div className="row">
																	<div className="col text-center align-middle">
																		<h6>Upload Upto 6 Images</h6>
																	</div>
																</div>
															</div>
														) : null}
													</div>
												</div>
											</div>
											{/* REVIEW */}
											<div className="form mt-3">
												<PlacesAutocomplete
													value={address}
													onChange={setAddress}
													onSelect={handleSelect}
												>
													{({
														getInputProps,
														suggestions,
														getSuggestionItemProps,
														loading,
													}) => (
														<div>
															<input
																className="form-control form-control-lg mb-3"
																{...getInputProps({
																	placeholder: "Type address",
																})}
															/>

															<div>
																{loading ? (
																	<div className="mb-3">
																		<span
																			className="spinner-grow spinner-grow-sm"
																			role="status"
																			aria-hidden="true"
																		></span>{" "}
																		<span>Loading...</span>
																	</div>
																) : null}

																{suggestions.map((suggestion) => {
																	const style = {
																		backgroundColor: suggestion.active
																			? "#41b6e6"
																			: "#fff",
																	};

																	return (
																		<div
																			{...getSuggestionItemProps(suggestion, {
																				style,
																			})}
																		>
																			{suggestion.description}
																		</div>
																	);
																})}
															</div>
														</div>
													)}
												</PlacesAutocomplete>

												<input
													className="form-control form-control-lg  mb-3"
													type="text"
													placeholder="Enter small title"
													aria-label="Small Title"
												/>

												{/* PrimaryCategory */}
												<div className="row">
													<div className="col-sm">
														<select
															className="form-select form-select-lg mb-3"
															aria-label=".form-select-lg example"
															onChange={selectCategory}
														>
															<option value="">Choose category</option>
															<option value="Humans">Humans</option>
															<option value="Documents">Documents</option>
															<option value="Electronics">Electronics</option>
															<option value="Mobile & Accessories">
																Mobile & Accessories
															</option>
															<option value="Id Cards">Id Cards</option>
															<option value="Certificates">Certificates</option>
															<option value="Bags">Bags</option>
															<option value="Keys">Keys</option>
															<option value="License">License</option>
															<option value="Vehicles">Vehicles</option>
															<option value="Pets & Animals">
																Pets & Animals
															</option>
															<option value="Fashion & Beauty">
																Fashion & Beauty
															</option>
															<option value="Sports & Hobbies">
																Sports & Hobbies
															</option>
															<option value="Book & Stationary">
																Book & Stationary
															</option>
															<option value="Passport & Visa">
																Passport & Visa
															</option>
														</select>
													</div>

													{/* sub category */}
													{showSubCategory && (
														<div className="col-sm">
															<select
																className="form-select form-select-lg mb-3"
																aria-label=".form-select-lg example"
																onChange={(event) => {
																	console.log(event.target.value);
																}}
															>
																<option value="">Choose sub category</option>
																{subCategory.map((category, index) => {
																	return (
																		<option key={index} value={category}>
																			{category}
																		</option>
																	);
																})}
															</select>
														</div>
													)}

													<div className="mb-3">
														<textarea
															className="form-control form-control-lg "
															id="description"
															placeholder="Please Describe how the incident took place"
															rows="5"
														></textarea>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
								{step > 1 ? (
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-dark"
											onClick={() => setStep(step - 1)}
										>
											Back
										</button>
										<button type="submit" className="btn btn-warning">
											Submit
										</button>
									</div>
								) : (
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-dark"
											data-bs-dismiss="modal"
										>
											Cancel
										</button>
										<button
											type="button"
											className="btn btn-warning"
											onClick={() => setStep(step + 1)}
										>
											Next
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
}

export default ManageItem;
