import React from "react";
import Logo from "./../Assets/logos/lostdexSignInLogo.png";

function Signin() {
	return (
		<div className="sign-in">
			<main className="form-signin">
				<form>
					<div className="logo text-center">
						<img className="mb-4 " src={Logo} alt="" width="72" height="57" />

						<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
					</div>
					<label htmlFor="inputEmail" className="visually-hidden">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						autoFocus
					/>
					<label htmlFor="inputPassword" className="visually-hidden">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button className="w-100 btn btn-lg btn-warning" type="submit">
						Sign in
					</button>
					<p className="mt-3 mb-3 text-muted text-center">
						Don't have an account? <a href="/signup">Sign Up</a>
					</p>
				</form>
			</main>
		</div>
	);
}

export default Signin;
