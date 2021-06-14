import React from "react";

function ManageItemTable(props) {
	return (
		<tr key={props.id}>
			<th scope="row">
				<div>
					<input
						className="form-check-input"
						type="checkbox"
						id="checkboxNoLabel"
						value=""
						aria-label="..."
					/>
				</div>
			</th>
			<td className="manage-item-preview-image-col">
				<img
					src={props.thumbnail}
					alt="Item Preview Image"
					className="manage-item-preview-image"
				/>
			</td>
			<td>
				<div className="description-holder">
					<h6 className="manage-item-title">{props.title}</h6>
					<p className="manage-item-category text-muted">{props.category}</p>
					<p className="manage-item-description">{props.description}</p>
				</div>
			</td>
		</tr>
	);
}

export default ManageItemTable;
