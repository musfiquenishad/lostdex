import React from "react";

function ItemTitle(props) {
	return (
		<div className="row ">
			<div className="col">
				<h3 className="item-title">{props.ItemTitle}</h3>
			</div>
		</div>
	);
}

export default ItemTitle;
