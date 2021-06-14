import React from "react";

function DeskTopPreviewImages(props) {
	return (
		<div className="row preview-images mt-2 mb-4">
			<div className="row padding-left padding-right preview-row">
				<div className="col padding-right">
					<img
						src={props.PreviewImage1}
						className="details-preview-image border-radius-start preview-image-main"
						alt="Preview Image"
					/>
				</div>
				<div className="col padding-left">
					<div className="row">
						<div className="col padding-right padding-bottom">
							<img
								src={props.PreviewImage2}
								className="details-preview-image  preview-image-sub"
								alt="Preview Image"
							/>
						</div>
						<div className="col padding-left padding-bottom">
							<img
								src={props.PreviewImage3}
								className="details-preview-image border-radius-top-end preview-image-sub"
								alt="Preview Image"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col padding-right">
							<img
								src={props.PreviewImage4}
								className="details-preview-image  preview-image-sub"
								alt="Preview Image"
							/>
						</div>
						<div className="col padding-left">
							<img
								src={props.PreviewImage5}
								className="details-preview-image border-radius-bottom-end preview-image-sub"
								alt="Preview Image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeskTopPreviewImages;
