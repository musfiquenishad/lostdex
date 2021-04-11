import React from "react";

function ItemCardProfile(props) {
	return (
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-sm-4">
					<img width="100%" src={props.thumbnail} alt="Item Thumbnail" />
				</div>
				<div className="col-sm-8">
					<div className="card-body">
						<div className="row">
							<div className="col-10">
								<h5 className="card-title">{props.title}</h5>
							</div>
							<div className="col-2 text-end">
								<button
									type="button"
									id="dropdownMenuButton"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									className="align-middle btn btn-light btn-sm three-dot-button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-three-dots"
										viewBox="0 0 16 16"
									>
										<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
									</svg>
								</button>
								<div
									className="dropdown-menu dropdown-menu-end "
									aria-labelledby="dropdownMenuButton"
								>
									<a className="dropdown-item btn btn-light" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-pen"
											viewBox="0 0 16 16"
										>
											<path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
										</svg>{" "}
										Edit
									</a>
									<button type="button" className="dropdown-item btn btn-light">
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
												d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
											/>
										</svg>{" "}
										Delete
									</button>
								</div>
							</div>
						</div>

						<p className="card-text">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-list-check"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
								/>
							</svg>{" "}
							{props.category}
						</p>
						<p className="card-text">{props.description}</p>
						<p className="card-text align-end">
							<small className="text-muted profile-card-date-time">
								{props.dateTime}
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCardProfile;
