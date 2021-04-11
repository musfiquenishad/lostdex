import React, { Fragment, useState } from "react";

function ManageItem() {
	const [images, setImages] = useState([]);

	function handleChange(event) {
		if (event.target.files) {
			const imagesArray = Array.from(event.target.files).map((image) =>
				URL.createObjectURL(image)
			);

			setImages((prevImages) => prevImages.concat(imagesArray));

			// Array.from(event.target.files).map(
			// 	(image) => URL.revokeObjectURL(image) // avoid memory leak
			// );
		}
	}

	function removeImage(index) {
		console.log(index);
		images.splice(index, index + 1);
	}

	const previewImages = (images) => {
		return images.map((photo, index) => {
			return (
				<div className="col-4 preview-image-col p-2" key={index}>
					<button
						id={index}
						type="button"
						className="preview-image-remove-button btn btn-danger btn-sm"
						onClick={() => {
							removeImage(index);
						}}
						name="remove Image"
					>
						{index}
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

	return (
		<Fragment>
			<div className="segment container text-center">
				<button
					type="button"
					className="btn btn-warning"
					data-bs-toggle="modal"
					data-bs-target="#uplaodItemModal"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-file-earmark-plus"
						viewBox="0 0 16 16"
					>
						<path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
						<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
					</svg>{" "}
					Upload Item
				</button>

				{/* Modal */}

				<div
					className="modal fade"
					id="uplaodItemModal"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabIndex="-1"
					aria-labelledby="uplaodItemModal"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">
									Upload An Item
								</h5>
								<button
									type="button"
									className="btn-close btn btn-warning"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							{/* Modal Body */}
							<div className="modal-body">
								{/* Image Preview Before upload */}
								<div className="preview-image-box">
									<div className="row ">
										{previewImages(images)}

										{/* Image selector */}

										{images.length >= 6 ? null : (
											<div className="col-4 p-2 image-selector-box">
												<input
													type="file"
													className="image-selector-small"
													id="image-selector"
													onChange={handleChange}
													multiple
												/>
												<label
													htmlFor="image-selector"
													className="image-selector-small-label "
												>
													Choose Image
												</label>
											</div>
										)}

										{/* Image selector */}
									</div>
								</div>
								{/* Image Preview Before upload */}
							</div>
							{/* Modal Body */}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default ManageItem;
