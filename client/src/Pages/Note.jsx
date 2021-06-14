<div className="row">
	<div className="col  mt-4">
		<table className="table  align-middle table-responsive">
			{showSelected && (
				<thead className="table-dark  align-middle ">
					<tr>
						<th scope="col" className="text-center">
							2 selected
						</th>
						<th scope="col" colSpan="3">
							<button type="button" className="btn btn-danger">
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
										d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
									/>
								</svg>{" "}
								Delete
							</button>
						</th>
					</tr>
				</thead>
			)}

			{/* Table Head Starts */}
			<thead>
				<tr>
					<th scope="col">
						<div>
							<input
								className="form-check-input"
								onChange={(event) => {
									if (event.target.checked) {
										setShowSelected(true);
									} else {
										setShowSelected(false);
									}
								}}
								type="checkbox"
								id="checkboxNoLabel"
								value=""
								aria-label="..."
							/>
						</div>
					</th>
					<th scope="col" className="manage-item-preview-image-col">
						Preview{" "}
					</th>
					<th scope="col">Description </th>
				</tr>
			</thead>

			{/* Table body starts */}
			<tbody>
				<ManageItemTable
					id="1"
					thumbnail={thumbnail}
					title="Canadian Passport Lost"
					category="Passport"
					description="I lost my canadian Passport while traveling in Bangladesh. If
							                     anyone found this please return it to me. Lorem ipsum dolor sit
												  amet consectetur adipiscing, elit rutrum sodales semper sem"
				/>
				<ManageItemTable
					id="1"
					thumbnail={thumbnail}
					title="Canadian Passport Lost"
					category="Passport"
					description="I lost my canadian Passport while traveling in Bangladesh. If
							                     anyone found this please return it to me. Lorem ipsum dolor sit
												  amet consectetur adipiscing, elit rutrum sodales semper sem"
				/>
				<ManageItemTable
					id="1"
					thumbnail={thumbnail}
					title="Canadian Passport Lost"
					category="Passport"
					description="I lost my canadian Passport while traveling in Bangladesh. If
							                     anyone found this please return it to me. Lorem ipsum dolor sit
												  amet consectetur adipiscing, elit rutrum sodales semper sem"
				/>
				<ManageItemTable
					id="1"
					thumbnail={thumbnail}
					title="Canadian Passport Lost"
					category="Passport"
					description="I lost my canadian Passport while traveling in Bangladesh. If
							                     anyone found this please return it to me. Lorem ipsum dolor sit
												  amet consectetur adipiscing, elit rutrum sodales semper sem"
				/>
			</tbody>
		</table>
	</div>
</div>;
