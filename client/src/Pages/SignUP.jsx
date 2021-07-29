import React from "react";
import { useState } from "react";
import Logo from "./../Assets/logos/pagelogo.png";
import axios from "axios";

function SignUP() {
	const [firstname, setFirstname] = useState("");
	const [firstnameValidation, setFirstnameValidation] = useState("");
	const [lastname, setLastname] = useState("");
	const [lastnameValidation, setLastnameValidation] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [userNameValidation, setUserNameValidation] = useState("");
	const [userNameFeedback, setUserNameFeedback] = useState("");
	const [emailValidation, setEmailValidation] = useState("");
	const [emailFeedback, setEmailFeedback] = useState("");
	const [passwordValidation, setPasswordValidation] = useState("");
	const [loading, setLoading] = useState(false);
	var format = /[!@#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/;

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		const usernameAvailable = await axios.post(
			`api/users?username=${username}`
		);
		const emailAvailable = await axios.post(`api/email?email=${email}`);

		if (format.test(username)) {
			setUserNameValidation("is-invalid");
			setUserNameFeedback("Username can't contain special character");
			setLoading(false);
		} else if (username.indexOf(" ") >= 0) {
			setUserNameValidation("is-invalid");
			setUserNameFeedback("Username can't contain space");
			setLoading(false);
		} else if (!usernameAvailable.data.available) {
			setUserNameValidation("is-invalid");
			setUserNameFeedback(
				"user name is unavailable please try with another one"
			);
			setLoading(false);
		} else if (!emailAvailable.data.available) {
			setEmailValidation("is-invalid");
			setEmailFeedback("Email is already in use, please use another one");
			setLoading(false);
		} else if (confirmPassword !== password) {
			setPasswordValidation("is-invalid");
			setLoading(false);
		} else if (firstname == "") {
			setFirstnameValidation("is-invalid");
		} else if (lastname == "") {
			setLastnameValidation("is-invalid");
			setLoading(false);
		} else {
			setUserNameValidation("is-valid");
			setEmailValidation("is-valid");
			setPasswordValidation("is-valid");
			setFirstnameValidation("is-valid");
			setLastnameValidation("is-valid");

			axios
				.post("api/users/signup", {
					firstname,
					lastname,
					username,
					email,
					password,
				})
				.then((res) => {
					if (res.status == 201 && res.data.authorized) {
						console.log(res.data.token);
						setFirstname("");
						setLastname("");
						setUsername("");
						setEmail("");
						setPassword("");
						setConfirmPassword("");
						setFirstnameValidation("");
						setLastnameValidation("");
						setUserNameValidation("");
						setEmailValidation("");
						setPasswordValidation("");
						setLoading(false);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	return (
		<div className="sign-up-holder">
			<main className="form-signup">
				<form onSubmit={handleSubmit}>
					<div className="logo text-center">
						<a href="/">
							<img
								className="mb-4"
								src={Logo}
								alt=""
								width="auto"
								height="80"
							/>
						</a>
						<h1 className="h3 mb-4 fw-normal">Signup to post your items</h1>
					</div>
					<div className="inputs">
						<div className="row mb-3">
							<div className="col-md-6 first-name">
								<input
									name="firstname"
									value={firstname}
									onChange={(event) => {
										setFirstname(event.target.value);
									}}
									className={`form-control ${firstnameValidation}`}
									type="text"
									placeholder="First Name"
									aria-label="First Name"
									maxLength="50"
									required
								/>
								<div className="invalid-feedback text-center">
									Enter your first name
								</div>
							</div>
							<div className="col-md-6 last-name">
								<input
									name="lastname"
									value={lastname}
									onChange={(event) => {
										setLastname(event.target.value);
									}}
									className={`form-control ${lastnameValidation}`}
									type="text"
									placeholder="Last Name"
									aria-label="Last Name"
									Ingth="50"
									required
								/>
								<div className="invalid-feedback text-center">
									Enter your last name
								</div>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col">
								<div className="input-group">
									<span className="input-group-text" id="basic-addon1">
										@
									</span>
									<input
										name="username"
										type="text"
										onChange={(event) => {
											setUserNameValidation("");
											setUsername(event.target.value);
										}}
										className={`form-control ${userNameValidation}`}
										placeholder="Username"
										aria-label="Username"
										value={username}
										aria-describedby="username"
										maxLength="50"
										required
									/>
									<div className="invalid-feedback text-center">
										{userNameFeedback}
									</div>
								</div>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col">
								<input
									name="email"
									value={email}
									onChange={(event) => {
										setEmailValidation("");
										setEmail(event.target.value);
									}}
									className={`form-control ${emailValidation}`}
									type="email"
									placeholder="Email"
									aria-label="Email"
									required
								/>
								<div className="invalid-feedback text-center">
									{emailFeedback}
								</div>
							</div>
						</div>

						<div className="row mb-3">
							<div className="col">
								<input
									name="password"
									value={password}
									onChange={(event) => {
										setPasswordValidation("");
										setPassword(event.target.value);
									}}
									className={`form-control ${passwordValidation}`}
									type="password"
									placeholder="Password"
									aria-label="Password"
									minLength="6"
									required
								/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="col">
								<input
									name="confirmPassword"
									value={confirmPassword}
									onChange={(event) => {
										setPasswordValidation("");
										setConfirmPassword(event.target.value);
									}}
									className={`form-control ${passwordValidation}`}
									type="password"
									placeholder="Confirm Password"
									aria-label="Confirm Password"
									minLength="6"
									required
								/>
								<div className="invalid-feedback text-center">
									Password and confirm password does not match.
								</div>
							</div>
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
								Sign Up
							</button>
						)}
					</div>

					<p className="mt-3 mb-3 text-muted text-center">
						Already have an account? <a href="/signin">Sign In</a>
					</p>
				</form>
			</main>
		</div>
	);
}

export default SignUP;
