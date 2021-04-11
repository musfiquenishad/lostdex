import React from "react";

function MobilePreviewImages(props) {
	return (
		<div className="mobile-view-Preview-images">
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={props.PreviewImage1}
							className="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={props.PreviewImage2}
							className="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={props.PreviewImage3}
							className="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={props.PreviewImage4}
							className="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={props.PreviewImage5}
							className="d-block w-100"
							alt="Item Pictures"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobilePreviewImages;
