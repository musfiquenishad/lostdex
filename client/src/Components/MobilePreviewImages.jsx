import React from "react";

function MobilePreviewImages(props) {
	return (
		<div className="mobile-view-Preview-images">
			<div
				id="carouselExampleSlidesOnly"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src={props.PreviewImage1}
							class="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div class="carousel-item">
						<img
							src={props.PreviewImage2}
							class="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div class="carousel-item">
						<img
							src={props.PreviewImage3}
							class="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div class="carousel-item">
						<img
							src={props.PreviewImage4}
							class="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div class="carousel-item">
						<img
							src={props.PreviewImage5}
							class="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobilePreviewImages;
