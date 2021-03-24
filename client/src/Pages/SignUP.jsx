import React from "react";
import Logo from "./../Assets/logos/lostdexSignInLogo.png";

function SignUP() {
	return (
		<div className="sign-up-holder">
			<main className="form-signup">
				<form>
					<div className="logo text-center">
						<img className="mb-5 " src={Logo} alt="" width="72" height="57" />

						<h1 className="h3 mb-5 fw-normal">Signup to post your items</h1>
					</div>
					<div className="inputs">
						<div className="row mb-3">
							<div className="col-md-6 first-name">
								<input
									className="form-control form-control-lg"
									type="text"
									placeholder="First Name"
									aria-label="First Name"
								/>
							</div>
							<div className="col-md-6 last-name">
								<input
									className="form-control form-control-lg"
									type="text"
									placeholder="Last Name"
									aria-label="Last Name"
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col">
								<input
									className="form-control form-control-lg"
									type="email"
									placeholder="Email"
									aria-label="Email"
								/>
							</div>
						</div>

						{/* <div className="row mb-3">
							<div className="col">
								<div className="input-group">
									<span className="input-group-text" id="basic-addon1">
										@
									</span>
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Username"
										aria-label="Username"
										aria-describedby="username"
									/>
								</div>
							</div>
						</div> */}

						<div className="row mb-3">
							<div className="col">
								<input
									className="form-control form-control-lg"
									type="password"
									placeholder="Password"
									aria-label="Password"
								/>
							</div>
						</div>
						<div className="row mb-4">
							<div className="col">
								<input
									className="form-control form-control-lg"
									type="password"
									placeholder="Confirm Password"
									aria-label="Confirm Password"
								/>
							</div>
						</div>
						<button className="w-100 btn btn-lg btn-warning" type="submit">
							Sign Up
						</button>
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
