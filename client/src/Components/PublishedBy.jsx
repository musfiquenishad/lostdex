import React from "react";

function PublishedBy(props) {
	return (
		<div className="profile-info ">
			<div className="profile-picture-holder">
				<img
					className="profile-pic"
					width="50px"
					height="50px"
					src="https://ahsannishad.com/static/media/Avatar.c3eca402.jpg"
					alt="Profile-picture"
				/>
			</div>

			<div className="user-name-time-holder align-middle">
				<h5 className="user-name">Musfique Ahsan Nishad</h5>
				<span className="text-muted">{props.DateTime}</span>
			</div>
			<hr className="hr-line" />
		</div>
	);
}

export default PublishedBy;
