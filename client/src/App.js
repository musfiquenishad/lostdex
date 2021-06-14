import "./App.css";
import "./Mobilestyle.css";
import "./Tabstyle.css";
import Home from "./Pages/Home";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchAndFilter from "./Pages/SearchAndFilter";
import ItemDetails from "./Pages/ItemDetails";
import UserProfile from "./Pages/UserProfile";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUP from "./Pages/SignUP";
import UploadItem from "./Pages/UploadItem";
import ManageItem from "./Pages/ManageItem";
import LostItems from "./Pages/LostItems";
import FoundItems from "./Pages/FoundItems";
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
				<Route exact path="/userprofile">
					<Profile />
				</Route>
				<Route exact path="/lostitems">
					<LostItems />
				</Route>
				<Route exact path="/founditems">
					<FoundItems />
				</Route>
				<Route exact path="/upload-item">
					<UploadItem />
				</Route>
				<Route exact path="/manage-item">
					<ManageItem />
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
