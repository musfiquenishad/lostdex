import React from "react";

function DeskTopPreviewImages(props) {
	return (
		<div className="row preview-images">
			<div className="row">
				<div className="col-lg-6 mb-4">
					<img
						className="item-preview-image border-radius-start"
						width="100%"
						src={props.PreviewImage1}
						alt=""
					/>
				</div>
				<div className="col-lg-6">
					<div className="row mb-4">
						<div className="col">
							<img
								className="item-preview-image "
								width="100%"
								src={props.PreviewImage2}
								alt=""
							/>
						</div>
						<div className="col">
							<img
								className="item-preview-image border-radius-top-end"
								width="100%"
								src={props.PreviewImage3}
								alt=""
							/>
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<img
								className="item-preview-image"
								width="100%"
								src={props.PreviewImage4}
								alt=""
							/>
						</div>
						<div className="col">
							<img
								className="item-preview-image border-radius-bottom-end"
								width="100%"
								src={props.PreviewImage5}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeskTopPreviewImages;
