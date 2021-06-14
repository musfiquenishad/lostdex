import React from "react";

function ItemTitle(props) {
	return (
		<div className="row ">
			<div className="col title">
				<h4 className="item-title">{props.ItemTitle}</h4>
			</div>
		</div>
	);
}

export default ItemTitle;
