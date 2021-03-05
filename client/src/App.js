import "./App.css";
import "./Mobilestyle.css";
import "./Tabstyle.css";
import Home from "./Pages/Home";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchAndFilter from "./Pages/SearchAndFilter";
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
			</Switch>
		</Router>
	);
}

export default App;
