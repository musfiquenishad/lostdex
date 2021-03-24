import "./App.css";
import "./Mobilestyle.css";
import "./Tabstyle.css";
import Home from "./Pages/Home";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchAndFilter from "./Pages/SearchAndFilter";
import ItemDetails from "./Pages/ItemDetails";
import UserProfile from "./Pages/UserProfile";
import SignIn from "./Pages/SignIn";
import SignUP from "./Pages/SignUP";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/search">
					<SearchAndFilter />
				</Route>
				<Route exact path="/details">
					<ItemDetails />
				</Route>
				<Route exact path="/profile">
					<UserProfile />
				</Route>
				<Route exact path="/signin">
					<SignIn />
				</Route>
				<Route exact path="/signup">
					<SignUP />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
