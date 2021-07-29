import axios from "axios";
import React, { useState } from "react";
import Logo from "./../Assets/logos/pagelogo.png";

function Signin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [validation, setValidation] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		if (email == "") {
			setValidation("is-invalid");
		} else if (password == "") {
			setValidation("is-invalid");
		} else {
			axios
				.post("api/users/signin", { email, password })
				.then((res) => {
					if (res.status == 200 && res.data.authorized) {
						setLoading(false);
						setEmail("");
						setPassword("");
						console.log(res.data.token);
					}
				})
				.catch((error) => {
					setValidation("is-invalid");
					setLoading(false);
					console.log(error);
				});
		}
	}
	return (
		<div className="sign-in">
			<main className="form-signin">
				<form onSubmit={handleSubmit}>
					<div className="logo text-center">
						<a href="/">
							<img
								className="mb-4 "
								src={Logo}
								alt=""
								width="auto"
								height="80"
							/>
						</a>

						<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
					</div>
					<label htmlFor="inputEmail" className="visually-hidden">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						onChange={(event) => {
							setEmail(event.target.value);
							setValidation("");
						}}
						className={`form-control ${validation}`}
						placeholder="Email address"
						required
						value={email}
						autoFocus
					/>
					<label htmlFor="inputPassword" className="visually-hidden">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						onChange={(event) => {
							setPassword(event.target.value);
							setValidation("");
						}}
						className={`form-control ${validation}`}
						placeholder="Password"
						required
						value={password}
					/>
					<div className="invalid-feedback mb-3">Incorrect credantials!</div>
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					{loading ? (
						<button
							className="w-100 btn btn btn-warning"
							type="submit"
							disabled
						>
							<span
								className="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							></span>{" "}
							Loading...
						</button>
					) : (
						<button className="w-100 btn btn btn-warning" type="submit">
							Sign In
						</button>
					)}
					<p className="mt-3 mb-3 text-muted text-center">
						Don't have an account? <a href="/signup">Sign Up</a>
					</p>
				</form>
			</main>
		</div>
	);
}

export default Signin;
